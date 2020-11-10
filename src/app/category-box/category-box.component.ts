import { Component, OnInit, Input } from '@angular/core';

import { Quote } from "../quote";

@Component({
  selector: 'app-category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.css']
})
export class CategoryBoxComponent implements OnInit {
  @Input() quote: Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
