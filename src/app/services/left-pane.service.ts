import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class LeftPaneService {

  constructor() { }

  basicFields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'app-text',
      className: 'px-2',
      templateOptions: {
        label: 'text'
      }
    },
    {
      key: 'square',
      type: 'app-panel',
      className: 'px-2',
      templateOptions: {
        label: 'square'
      }
    },
    {
      key: 'circle',
      type: 'app-panel',
      className: 'px-2',
      templateOptions: {
        label: 'circle'
      }
    },
    {
      key: 'image',
      type: 'app-picture',
      className: 'px-2',
      templateOptions: {
        label: 'image'
      }
    }
  ]

  FieldConfig: FormlyFieldConfig[] = [
    {
      key: 'app-line',
      type: 'app-line',
      className: 'px-2',
    },
    {
      key: 'app-text',
      type: 'app-text',
      className: 'px-2',
    },
    {
      key: 'app-panel',
      type: 'app-panel',
      className: 'px-2',
    },
    {
      key: 'app-picture',
      type: 'app-picture',
      className: 'px-2',
    },
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
      type: 'nz-input-number',
      wrappers: ['field-wrapper'],
      className: 'px-2',
      templateOptions: {
        label: 'input-number',
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
      key: 'breadcrumb',
      type: 'nz-breadcrumb',
      className: 'd-block',
      templateOptions: {
        options: []
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
