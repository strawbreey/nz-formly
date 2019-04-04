import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, Field } from '@ngx-formly/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})

export class CheckboxComponent implements OnInit {

  constructor() { }

  checkboxForm = new FormGroup({});
  checkboxModel: any = {};
  checkboxOptions: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  checkboxFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'd-flex mb-2',
      fieldGroup: [
        {
          key: 'checkbox1',
          type: 'nz-checkbox',
          className: 'px-2',
          templateOptions: {
            text: 'primary',
            disabled: true
          },
        },
        {
          key: 'checkbox2',
          type: 'nz-checkbox',
          className: 'px-2',
          templateOptions: {
            text: 'primary',
            change: (field, $event) => {
              console.log('change')
            }
          },
        },
      ]
    },
    {
      fieldGroupClassName: 'd-flex mb-2',
      fieldGroup: [
        {
          key: 'checkbox-group-1',
          type: 'nz-checkbox-group',
          className: 'px-2',
          defaultValue: ['111'],
          templateOptions: {
            text: 'nz-checkbox-group',
            options: [{
              id: 1,
              value: '111',
              checked: '1',
            }, {
              id: 2,
              value: '222',
              label: '222'
            }]
          },
        },
        {
          key: 'checkbox-group-2',
          type: 'nz-checkbox-group',
          className: 'px-2',
          defaultValue: [{
            value: '111',
            label: '111',
            checked: true,
          }, {
            value: '222',
            label: '222',
            checked: false
          }],
          templateOptions: {
            text: 'nz-checkbox-group',
            change: (field, $event) => {
              console.log('change')
            }
          },
        },
        {
          key: 'checkbox-group-3',
          type: 'nz-checkbox-group',
          className: 'px-2',
          defaultValue: [
            { label: 'Apple', value: 'Apple', checked: true, disabled: true,},
            { label: 'Pear', value: 'Pear' },
            { label: 'Orange', value: 'Orange' }],
          templateOptions: {
            text: 'nz-checkbox-group',
            change: (field, $event) => {
              console.log('change')
            }
          },
        },
      ]
    }
  ]

  ngOnInit() {
    
  }

}
