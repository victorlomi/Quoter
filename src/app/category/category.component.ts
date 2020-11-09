import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Category } from "../category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() details: Category;
  constructor() { }

  ngOnInit(): void {
  }

}
