import { Component, OnInit } from '@angular/core';

import { Category } from "../category";
import { firstCategories } from "../categories";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories1: Category[] = firstCategories;
  constructor() { }

  ngOnInit(): void {
  }

}
