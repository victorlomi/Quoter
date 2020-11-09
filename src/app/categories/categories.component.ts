import { Component, OnInit } from '@angular/core';
import { Category } from "../category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [
    {title: "Sports", "image": "sports.jpg", "description": "20 quotes"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
