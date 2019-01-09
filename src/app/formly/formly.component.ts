import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, map, switchMap, tap } from 'rxjs/operators';

import { FormlyService } from './formly.service'


@Component({
  selector: 'app-formly',
  templateUrl: './formly.component.html',
  styleUrls: ['./formly.component.css'],
  providers: [FormlyService]
})
export class FormlyComponent implements OnInit {

  i = 0

  form = new FormGroup({});
  
  model = { email: 'email@gmail.com' };
  
  field 

  constructor(formlyService: FormlyService) {
    this.field = formlyService.getFields()
    console.log(this.field)
  }
  
  fields: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'ant-row',
    fieldGroup: [{
      key: 'cascader',
      type: 'nz-cascader',
      templateOptions: {
        label: 'cascader',
        options: [{
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [{
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [{
              value: 'xihu',
              label: 'West Lake',
              isLeaf: true
            }]
          }, {
            value: 'ningbo',
            label: 'Ningbo',
            isLeaf: true
          }]
        }, {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [{
            value: 'nanjing',
            label: 'Nanjing',
            children: [{
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
              isLeaf: true
            }]
          }]
        }]
      }
    }, {
      key: 'firstName',
      type: 'nz-input',
      templateOptions: {
        label: 'FirstName',
        type: 'number',
        required: true,
        min: 18,
        max: 40,
      }
    },  {
      key: 'lastName',
      type: 'nz-input',
      templateOptions: {
        label: 'LastName',
        type: 'text',
        required: true,
      }
    }, {
      key: 'email',
      type: 'nz-input',
      templateOptions: {
        label: 'Email'
      }
    }, {
      key: 'address',
      templateOptions: {
        label: 'Address'
      },
      fieldGroup: [{
        key: 'street',
        type: 'nz-input',
        templateOptions: {
          label: 'Street'
        }
      }, {
        key: 'city',
        type: 'nz-input',
        templateOptions: {
          label:'city',
        }
      }, {
        key: 'state',
        type: 'nz-input',
        templateOptions: {
          label: 'State',
        }
      }, {
        key: 'zip',
        type: 'nz-input',
        templateOptions: {
          label: 'Zip'
        }
      }]
    }, {
      type: 'nz-button',
      templateOptions: {
        text: '确定',
        nzType: 'primary',
        onClick: ([field, model]) => {
          console.log(field)
          console.log(model)
          return []
        }
      } 
    }]
  }];

  FormlyChange$ = new BehaviorSubject(this.fields);

  ngOnInit() {
    // this.formlyService.setFields(this.field)
    console.log(this.formlyService.getFields())
  }

  onClick () {
    this.FormlyChange$.next(this.fields)
  }

}
