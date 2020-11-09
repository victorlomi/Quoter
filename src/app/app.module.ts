import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { CategoryComponent } from './category/category.component';
import { AddQuoteFormComponent } from './add-quote-form/add-quote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeroComponent,
    CategoriesComponent,
    AddQuoteComponent,
    CategoryComponent,
    AddQuoteFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: NavComponent},
      {path: 'add-quote', component: AddQuoteFormComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
