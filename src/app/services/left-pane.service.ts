import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class LeftPaneService {

  constructor() { }

  FieldConfig: FormlyFieldConfig[] = [
    {
      key: 'tag',
      type: 'nz-tag',
      className: 'px-2',
      templateOptions: {
        nzColor: 'magenta',
        nzContent: 'magenta'
      },
    },
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
    },
    {
      key: 'menu',
      type: 'nz-menu',
      templateOptions: {
        
      }
    },
    {
      key: 'tree-select',
      type: 'nz-tree-select',
      className: 'd-block',
      templateOptions: {
        label: '分类',
        nzDisplayWith: (node) => node.title,
        nzNodes: [
          {
            title: 'parent 1',
            key: '100',
            children: [
              {
                title: 'parent 1-0',
                key: '1001',
                children: [
                  { title: 'leaf 1-0-0', key: '10010', isLeaf: true },
                  { title: 'leaf 1-0-1', key: '10011', isLeaf: true }
                ]
              }
            ]
          }
        ]
      }
    }
  ];

}
