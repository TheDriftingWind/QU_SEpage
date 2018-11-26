import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selected : number = 0;

  show(num: number) {
    this.selected = num
  }

}
