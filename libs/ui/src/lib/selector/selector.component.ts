import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList,
  Renderer2,
  Output,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectItem } from './selector.interface';

@Component({
  selector: 'rikiki-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectorComponent,
    },
  ],
})
export class SelectorComponent implements OnInit, AfterViewInit {
  @ViewChild('container')
  containerRef!: ElementRef;

  @ViewChildren('el')
  elementsRef!: QueryList<ElementRef>;

  @Input() set items(data: SelectItem[]) {
    this._items = data;

    const selectedInd = this._items.findIndex((item) => item.selected);
    if (selectedInd !== -1) {
      this.selectedItem = Object.assign({}, this._items[selectedInd]);
    }

    this.isLoading = false;
  }

  @Output() selectionChanged: EventEmitter<SelectItem> =
    new EventEmitter<SelectItem>();

  get items(): SelectItem[] {
    return this._items;
  }
  private _items!: SelectItem[];

  selectedItem!: SelectItem;

  isLoading = true;

  constructor(
    private readonly cd: ChangeDetectorRef,
    private readonly renderer: Renderer2
  ) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.elementsRef.forEach((el, i, _) => {
      if (this._items[i].selected) {
        const perfectOffset = el.nativeElement.offsetTop - 25;
        this.renderer.setProperty(
          this.containerRef.nativeElement,
          'scrollTop',
          perfectOffset
        );
      }
    });
  }
  selectItem(item: SelectItem): void {
    const selectedInd = this._items.findIndex((i) => i.id === item.id);

    if (selectedInd !== -1) {
      this._items.forEach((i) => (i.selected = false));
      this._items[selectedInd].selected = true;
      this.selectedItem = Object.assign({}, this._items[selectedInd]);

      this.selectionChanged.emit(this.selectedItem);
      this.cd.markForCheck();
    } else {
      console.warn('No item had the id of ', item.id);
    }
  }
  writeValue(item: SelectItem) {
    this.selectItem(item);
  }
  identify(_: number, item: any) {
    return item.id;
  }
}
