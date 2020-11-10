import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CategoriesService } from '../categories.service';

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
    private router: Router
  ) {
    this.addQuoteForm = this.formBuilder.group({
      text: '',
      author: '',
      username: '',
      category: '',
      date: ''
    });
  }

  ngOnInit(): void {
  }


  onSubmit(userData) {
    let category = this.categoriesService.getCategories()[userData.category];

    console.log("Form is submitted!", userData);
    alert(`Your quote was added to the ${category.title} category`);

    // save date of component
    userData.date = new Date();

    this.categoriesService.addQuote(userData);
    this.addQuoteForm.reset();

    // leave to homepage
    this.router.navigateByUrl("");
  }
}
