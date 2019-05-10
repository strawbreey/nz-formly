import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeftPaneService {

  constructor() { }

  FieldConfig: FormlyFieldConfig[] = [    
    {
      key: 'radio',
      type: 'nz-radio',
      className: 'px-2',
      templateOptions: {
        text: 'primary',
      },
    },
    {
      key: 'radio-group',
      type: 'nz-radio-group',
      className: 'px-2',
      templateOptions: {
        nzButtonStyle: 'solid',
        options: [
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange' }
        ]
      }
    },
    {
      key: 'checkbox',
      type: 'nz-checkbox',
      className: 'px-2',
      templateOptions: {
        text: 'primary',
      },
    }, 
    {
      type: 'nz-input',
      wrappers: ['field-wrapper'],
      className: 'px-2',
      templateOptions: {
        label: 'input',
      },
    },
    {
      key: 'button',
      className: 'px-2',
      type: 'nz-button',
      templateOptions: {
        text: '按钮'
      }
    },
    {
      type: 'mt-drop-list',
      className: 'd-block',
      fieldGroupClassName: 'ant-row',
      fieldGroup: [],
      templateOptions: {
        label: 'drop-list'
      }
    },
    {
      type: 'nz-title',
      className: 'd-block',
      templateOptions: {
        content: '2333',
        value: '单击编辑文本',
        fontWeight: 'bold'
      }
    },
    {
      key: 'avatar',
      type: 'nz-avatar',
      className: 'd-block',
      templateOptions: {

      }
    }
  ];

}
