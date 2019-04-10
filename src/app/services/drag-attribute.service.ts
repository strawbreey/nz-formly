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
      fieldGroupClassName: '',
      fieldGroup: [
        {
          key: 'key',
          type: 'nz-input',
          templateOptions: {
            label: 'Key',
            nzLayout: 'inline'
          },
        },
        {
          key: 'id',
          type: 'nz-input',
          templateOptions: {
            label: 'Id'
          },
          hideExpression: '!model.id'
        },
        {
          key: 'name',
          type: 'nz-input',
          templateOptions: {
            label: 'Name'
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
          }
        },
        {
          key: 'templateOptions',
          fieldGroup: [
            {
              key: 'nzType',
              type: 'nz-input',
              templateOptions: {
                label: 'nzType'
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

  getModel(): Observable<any> {
    return this.model$
  }
}
