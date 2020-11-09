import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddQuoteFormComponent } from './add-quote-form/add-quote-form.component';


const routes: Routes = [
  { path: "/add-quote", component: AddQuoteFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
