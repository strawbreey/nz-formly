import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, Field } from '@ngx-formly/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor() { }

  inputForm = new FormGroup({});
  inputModel: any = {};
  inputOptions: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };

  inputFields: FormlyFieldConfig[] = [
    // 基本用法
    {
      fieldGroupClassName: 'd-flex mb-2',
      fieldGroup: [
        {
          key: 'value1',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            placeholder: 'Basic usage',
          }
        }, 
        {
          key: 'value2',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            placeholder: 'Basic usage',
            disabled: true,
          },
        }
      ]
    }, 
    // nzSize
    {
      fieldGroupClassName: 'd-flex mb-2',
      fieldGroup: [
        {
          key: 'value3',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            placeholder: 'large size',
            nzSize: 'large',
          }
        }, 
        {
          key: 'value4',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            placeholder: 'default size',
            nzSize: 'default',
          },
        },
        {
          key: 'value5',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            type: 'number',
            placeholder: 'small size',
            nzSize: 'small',
          },
        }
      ]
    },
    // input 基本用法
    {
      fieldGroupClassName: 'd-flex mb-2',
      fieldGroup: [
        {
          key: 'value6',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            label: 'max: 16',
            type: 'number',
            placeholder: 'number',
            max: 16,
          }
        }, 
        {
          key: 'value7',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            label: 'max: 16',
            type: 'number',
            placeholder: 'number',
            max: 16,
            min: 3
          },
        },
        {
          key: 'value8',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            label: 'methods',
            type: 'email',
            placeholder: 'small',
            change: (field, $event) => {
              console.log('change')
            },
            blur: (field, $event) => {
              console.log('blur')
            },
            focus: (field, $event) => {
              console.log('focus')
            },
            keyup: (field, $event) => {
              console.log('keyup')
            },
            keydown: (field, $event) => {
              console.log('keydown')
            },
            keypress: (field, $event) => {
              console.log('keypress')
            }
          },
        },
        {
          key: 'value9',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            label: 'autofocus',
            type: 'text',
            placeholder: 'autofocus',
            autofocus: true
          },
        },
        {
          key: 'value11',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            label: 'autocomplete',
            type: 'text',
            placeholder: 'autocomplete',
            autocomplete: 'on',
          },
        },
        {
          key: 'value12',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            label: 'maxLength',
            type: 'text',
            placeholder: 'maxLength',
            maxLength: 5
          },
        },
        {
          key: 'value13',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            label: 'min',
            type: 'number',
            placeholder: 'min',
            min: 3
          },
        }
      ]
    },
    {
      fieldGroupClassName: 'd-flex mb-2',
      fieldGroup: [
        {
          key: 'value20',
          type: 'nz-input',
          className: 'px-2',
          templateOptions: {
            type: 'text',
            placeholder: 'number',
          },
        }
      ]
    },
    // input-group 基本用法
    {
      fieldGroupClassName: 'd-flex mb-2',
      fieldGroup: [
        {
          key: 'value20',
          type: 'nz-input-group',
          className: 'px-2',
          templateOptions: {
            type: 'text',
            placeholder: 'number',
          },
        },
        {
          key: 'value21',
          type: 'nz-textarea',
          className: 'px-2',
          defaultValue: '222222222',
          templateOptions: {
            placeholder: 'nz-textarea',
            autocomplete: 'on',
            cols: 20,
            rows: 4,
            readonly: true
          }
        }
      ]
    }
  ]
  
  ngOnInit() {
  }

}
