import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, Subject } from 'rxjs';
import { reverseDeepMerge, assignModelValue, clone } from '../../utils/index';

@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  ids: string [] = []
  form = new FormGroup({});
  model: any = {
    dropList: {
      label: '233'
    }
  };
  fields1: FormlyFieldConfig[] = []
  timer = 0
  fields: FormlyFieldConfig[] = [
    {
      key: 'dropList',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }, 
    {
      type: 'nz-input',
      templateOptions: {
        label: '标签'
      }
    }
  ]

  fields$ = new Subject<FormlyFieldConfig[]>()

  constructor() { 
    // this.fields$.next(this.fields)
  }

  getIds (): string [] {
    return this.ids
  }

  addIds (id) {
    if (!this.ids.find(item => item === id) && id) {
      this.ids.push(id)
    }
  }

  getFields () {
    return this.fields$
  }

  setFields () {
    this.model = clone(this.model)
    this.fields$.next(this.fields)
  }

  init () {
    this.fields$.next(this.fields)
  }
}
