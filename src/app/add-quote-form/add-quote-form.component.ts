import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-quote-form',
  templateUrl: './add-quote-form.component.html',
  styleUrls: ['./add-quote-form.component.css']
})
export class AddQuoteFormComponent implements OnInit {
  addQuoteForm;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.addQuoteForm = this.formBuilder.group({
      text: '',
      author: '',
      username: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userData) {
    console.log("Form is submitted!", userData);

    this.addQuoteForm.reset();
  }

}
