import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = !true;
  constructor() { }

  ngOnInit(): void {
  }

}