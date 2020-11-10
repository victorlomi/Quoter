import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { CategoryComponent } from './category/category.component';
import { AddQuoteFormComponent } from './add-quote-form/add-quote-form.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    CategoriesComponent,
    AddQuoteComponent,
    CategoryComponent,
    AddQuoteFormComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: HomepageComponent},
      {path: 'add-quote', component: AddQuoteFormComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
