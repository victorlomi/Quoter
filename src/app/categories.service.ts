import { Injectable } from '@angular/core';

import { Category } from "./category";
import { firstCategories } from "./categories";
import { Quote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories1: Category[] = firstCategories;

  getCategories(): Category[] {
    return this.categories1;
  }

  addQuote(data) {
    let index: number = +data.category;
    let quote: Quote  = {text: data.text, author: data.author.toString(), username: data.username};

    firstCategories[index].quotes.push(quote);
    console.log(this.categories1)
    this.categories1 = firstCategories;
  }

  constructor() { }
}

