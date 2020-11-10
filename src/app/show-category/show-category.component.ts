import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  text1 = "hello world";
  author1 = "me me me"
  constructor() { }

  ngOnInit(): void {
  }

}
