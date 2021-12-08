import { animate, style, transition, trigger } from "@angular/animations";

export const dropDownAnim = trigger('grow',
    [
        transition(':enter', 
            [
                style({ height: 0, opacity: 0 }),
                animate('0.5s ease-out', 
                    style({ height: '100px', opacity: 1 }))
            ]
        ),
        transition(
            ':leave', 
            [
              style({ height: '100px', opacity: 1 }),
              animate('0.5s ease-in', 
                    style({ height: 0, opacity: 0 }))
            ]
          )
    ]
);