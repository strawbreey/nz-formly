import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, Subject } from 'rxjs';
import { multicast } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DragAttributeService {

  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'border border border-info m-2 p-2 d-block',
      fieldGroup: [
        {
          key: 'key',
          type: 'nz-input',
          templateOptions: {
            label: 'Key',
          },
        },
        {
          key: 'id',
          type: 'nz-input',
          templateOptions: {
            label: 'Id',
          },
          hideExpression: '!model.id'
        },
        {
          key: 'name',
          type: 'nz-input',
          templateOptions: {
            label: 'Name',
            nzLayout: 'inline'

          },
          hideExpression: '!model.name'
        },
        {
          key: 'type',
          type: 'nz-input',
          templateOptions: {
            label: 'Type',
            disabled: true
          },
          hideExpression: '!model.type'
        },
        {
          key: 'className',
          type: 'nz-input',
          templateOptions: {
            label: 'ClassName',
          },
          hideExpression: '!model.className'
        },
        {
          key: 'fieldGroupClassName',
          type: 'nz-input',
          templateOptions: {
            label: 'fieldGroupClassName',
          },
          hideExpression: '!model.fieldGroupClassName'
        },
        {
          key: 'templateOptions',
          className: 'd-block pr-2 py-2 bg-light',
          templateOptions: {
            label: 'templateOptions',
            nzLayout: 'vertical'
          },
          fieldGroup: [
            {
              key: 'nzType',
              type: 'nz-input',
              templateOptions: {
                label: 'nzType'
              },
            },
            {
              key: 'Styles',
              type: 'nz-input',
              templateOptions: {
                label: 'styles'
              }
            },
            {
              key: 'text',
              type: 'nz-input',
              templateOptions: {
                label: 'nzText'
              }
            },
            {
              key: 'label',
              type: 'nz-input',
              templateOptions: {
                label: 'Label'
              }
            },
            {
              key: 'nzSize',
              type: 'nz-input',
              templateOptions: {
                label: 'NzSize'
              }
            },
            {
              key: 'nzBlock',
              type: 'nz-input',
              templateOptions: {
                label: 'nzBlock'
              }

            },
            {
              key: 'nzLayout',
              type: 'nz-input',
              templateOptions: {
                label: 'nzLayout'
              }
            },
            {
              key: 'options',
              type: 'nz-input',
              templateOptions: {
                label: 'options'
              }
            },
            {
              key: 'value',
              type: 'nz-input',
              templateOptions: {
                label: 'value'
              }
            }
          ]
        }
      ]
    }
  ]

  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };

  constructor() { }

  model$ = new Subject<Object>()

  setModel (field: FormlyFieldConfig) {
    // let model =  {
    //   key: field.key,
    //   id: field.id,
    //   name: field.name,
    //   calssName: field.calssName,
    //   templateOptions: {...field.templateOptions},
    //   dafaultValue: field.dafaultValue,
    //   wrappers: field.wrappers,
    // }
    // this.model = model
    this.model = field
    this.model$.next(field)
  }

  // 返回引用对象/返回可观察的
  getModel () {
    return this.model
  }
}
