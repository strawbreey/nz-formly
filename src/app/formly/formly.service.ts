import { Injectable } from '@angular/core';
import { Field } from '@ngx-formly/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class FormlyService {

  fields: FormlyFieldConfig[]

  constructor() { 
    // this.fields = fields
  }

  get getFields () {
    return '233'
  }

  set setFields (fields: FormlyFieldConfig[]) {
    this.fields = fields
  }
}
