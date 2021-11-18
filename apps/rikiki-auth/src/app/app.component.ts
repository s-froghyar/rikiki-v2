import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CookiesComponent } from './cookies/cookies.component';

@Component({
  selector: 'auth-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rikiki-auth';
  cookiesAllowed = false;
  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    const dialogRef = this.dialog.open(CookiesComponent, {
      width: '50%',
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(_ => {
      console.log('The dialog was closed');
      this.cookiesAllowed = true;
    });


  }
}

