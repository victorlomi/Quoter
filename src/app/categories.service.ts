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
    let quote: Quote  = {text: data.text, author: data.author.toString(), username: data.username, date: data.date, votes: 0};

    console.log(quote);
    firstCategories[index].quotes.push(quote);
    console.log(firstCategories);
    // console.log(this.categories1)
    this.categories1 = firstCategories;
  }

  deleteQuote(data: Quote) {
    // first find the index of this quote in the quotes array
    let quoteIndex;
    firstCategories.forEach((category) => {
      category.quotes.forEach((quote, index) => {
        if(quote.text == data.text) {
          quoteIndex = index;

          // reset the value of quotes to a new splice
          category.quotes.splice(index, 1);
        }
      });
    });
  }

  upvote(data: Quote) {
    firstCategories.forEach((category) => {
      category.quotes.forEach((quote, index) => {
        if(quote.text == data.text) {
          quote.votes += 1;
        }
      });
    });
  }

  downvote(data: Quote) {
    firstCategories.forEach((category) => {
      category.quotes.forEach((quote, index) => {
        if(quote.text == data.text) {
          quote.votes -= 1;
        }
      });
    });
  }

  constructor() { }
}

