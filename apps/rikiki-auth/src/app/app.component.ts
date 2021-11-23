import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'rikiki-auth';
  constructor() {}

  ngOnInit(): void {}
}

