import { Component, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem} from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, Field } from '@ngx-formly/core';
import { FieldType } from '@ngx-formly/core';

import { reverseDeepMerge, assignModelValue, clone } from '../../../utils/index';


@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DragComponent  extends FieldType implements OnInit {
  constructor() { 
    super()
  }
  data = [1,2,3]

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

  drag:FormlyFieldConfig[] = [
    {
      key: 'radio',
      type: 'nz-radio',
      className: 'px-2',
      templateOptions: {
        text: 'primary',
      },
    }, 

  ];


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
  }
  ngOnInit() {
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

  click ($event, data) {
    $event.preventDefault();
    console.log('click')
    console.log($event)
    console.log(data)

    this.operatorModel = data
  }

  contextmenu ($event) {
    $event.preventDefault();
    console.log('contextmenu')
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

            }
          ]
        }
      ]
    }
  ]

}
