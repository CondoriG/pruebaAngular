import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-udemy',
  templateUrl: './udemy.component.html',
  styleUrls: ['./udemy.component.scss']
})
export class UdemyComponent implements OnInit {
  title = 'Cursos';
  mainUrl = '/udemy';
  constructor() { }

  ngOnInit(): void {
  }

}
