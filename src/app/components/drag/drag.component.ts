import { Component, OnInit, HostListener, ChangeDetectionStrategy, ComponentFactoryResolver, Injector, Attribute, SimpleChanges } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem} from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, Field, FormlyFormBuilder, FieldType ,FormlyConfig } from '@ngx-formly/core';
import { isNullOrUndefined } from '../../../utils/index'
// import {  } from '@ngx-formly/core/lib/components/formly.field.config';


import { reverseDeepMerge, assignModelValue, clone } from '../../../utils/index';


@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DragComponent  extends FieldType implements OnInit {
  private immutable = false;
  data = [1,2,3]
  private initialModel: any

  private _model: any;
  menu:FormlyFieldConfig[] = [
    {
      key: 'radio',
      type: 'nz-radio',
      className: 'px-2',
      templateOptions: {
        text: 'primary',
      },
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
      type: 'nz-button',
      templateOptions: {
        text: '6666'
      }
    },
    {
      id: 'fieldGroup',
      fieldGroup: [],
      fieldGroupClassName: ''
    }
  ];

  dragForm = new FormGroup({});
  dragModel: any = {};
  dragOptions: FormlyFormOptions = {};
  dragFields:FormlyFieldConfig[] = [
    {
      key: 'radio',
      type: 'nz-radio',
      className: 'px-2',
      templateOptions: {
        text: 'primary',
      },
    }, 
  ];

  constructor(
    private formlyBuilder: FormlyFormBuilder,
    formlyConfig: FormlyConfig,
    // tslint:disable-next-line
    @Attribute('immutable') immutable,
  ) { 
    super()
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges')
    if (!this.dragFields || this.dragFields.length === 0) {
      return;
    }

    if (changes.fields || changes.form || changes.model) {
      this.model = this.model || {};
      this.form = this.form || (new FormGroup({}));
      this.options = this.options || {};
      // this.clearModelSubscriptions();
      // this.formlyBuilder.buildForm(this.form, this.dragFields, this.model, this.options);
      this.formlyBuilder.buildForm(this.dragForm, this.dragFields, this.dragModel, this.dragOptions);

      // this.trackModelChanges(this.fields);
      // this.options.updateInitialValue();
    }
  }


  // private checkExpressionChange() {
  //   if ((<FormlyFormOptionsCache> this.options)._checkField) {
  //     (<FormlyFormOptionsCache> this.options)._checkField({
  //       fieldGroup: this.fields,
  //       model: this.model,
  //       formControl: this.form,
  //       options: this.options,
  //     });
  //   }
  // }



  drop(event: CdkDragDrop<string[]>) {
    console.log('drop')
    if (event.previousContainer === event.container) {
    console.log('drop1')
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // copyArrayItem(event.container.data, event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('drop2')
      console.log(event.previousContainer.data)
      console.log([...event.previousContainer.data])
      // transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      copyArrayItem(clone(event.previousContainer.data), event.container.data, event.previousIndex, event.currentIndex);

    }
    this.dragModel = this.dragModel || {};
    this.dragForm = this.dragForm || (new FormGroup({}));
    this.dragOptions = this.dragOptions || {};
    this.formlyBuilder.buildForm(this.dragForm, this.dragFields, this.dragModel, this.dragOptions);
  }
  ngOnInit() {
    this.model = this.model || {};
    this.form = this.form || (new FormGroup({}));
    this.options = this.options || {};
    this.formlyBuilder.buildForm(this.dragForm, this.dragFields, this.dragModel, this.dragOptions);
  }

  getPlaceholderElement ($event) {
    console.log($event)
  }

  CdkDragStart($event) {
    console.log($event)
  }

  
  started($event) {
    console.log('started')
    console.log($event)
    // let drag = $event.source
    // console.log(drag.getPlaceholderElement())
    // console.log(drag.getRootElement())
  }

  entered ($event) {
    console.log('entered')
    console.log($event)
  }

  draged ($event) {
    console.log('drag')    
    console.log($event)
  }


  ended ($event) {
    console.log('ended')
    console.log($event)
  }

  exited ($event) {
    console.log('exited')
    console.log($event)
  }

  moved ($event) {
    console.log('moved')
    console.log($event)
  }

  released ($event) {
    console.log('released')
    console.log($event)
  }




  operatorForm = new FormGroup({});
  operatorModel: any = {};
  operatorOptions: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  operatorFields: FormlyFieldConfig[] = [
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
            }
          ]
        }
      ]
    }
  ]

}
