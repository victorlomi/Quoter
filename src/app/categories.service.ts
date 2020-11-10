import { Injectable } from '@angular/core';

import { Category } from "./category";
import { firstCategories } from "./categories";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories1: Category[] = firstCategories;

  getCategories(): Category[] {
    return this.categories1;
  }
  constructor() { }
}
