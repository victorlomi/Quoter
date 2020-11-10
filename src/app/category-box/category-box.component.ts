import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Quote } from "../quote";
import { CategoriesService } from '../categories.service'

@Component({
  selector: 'app-category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.css']
})
export class CategoryBoxComponent implements OnInit {
  @Input() quote: Quote;
  constructor(
    private categoriesService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  delete() {
    alert(`The quote is '${this.quote.text}' is going to be deleted`)
    this.categoriesService.deleteQuote(this.quote);
  }

  upvote() {
    this.categoriesService.upvote(this.quote);
  }

  downvote() {
    this.categoriesService.downvote(this.quote);
  }

}
