import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  foods: Food[] = [
    { value: 'group1', viewValue: 'group1' },
    { value: 'group2', viewValue: 'group2' },
    { value: 'group3', viewValue: 'group3' },
  ];
  constructor() {}
  ngOnInit(): void {}
}
