import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CategoriesService } from '../categories.service'

@Component({
  selector: 'app-add-quote-form',
  templateUrl: './add-quote-form.component.html',
  styleUrls: ['./add-quote-form.component.css']
})
export class AddQuoteFormComponent implements OnInit {
  addQuoteForm;
  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
  ) {
    this.addQuoteForm = this.formBuilder.group({
      text: '',
      author: '',
      username: '',
      category: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userData) {
    console.log("Form is submitted!", userData);
    this.categoriesService.addQuote(userData);

    this.addQuoteForm.reset();
  }
}
