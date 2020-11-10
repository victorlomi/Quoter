import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-box',
  templateUrl: './category-box.component.html',
  styleUrls: ['./category-box.component.css']
})
export class CategoryBoxComponent implements OnInit {
  @Input() text: string;
  @Input() author: string;
  constructor() { }

  ngOnInit(): void {
  }

}
