import { Component, OnInit } from '@angular/core';

import { Category } from "../category";
import { CategoriesService } from "../categories.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories1: Category[];
  constructor(
    private categoriesService: CategoriesService
  ) { }

  getCategories(): void {
    this.categories1 = this.categoriesService.getCategories();
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
