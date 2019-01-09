import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveComponent } from './reactive/reactive.component'
import { FormlyComponent } from './formly/formly.component' 

const routes: Routes = [
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'formly', component: FormlyComponent}
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
