import { Component, OnInit, HostListener, ChangeDetectionStrategy, ComponentFactoryResolver, Injector, Attribute, SimpleChanges } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem} from '@angular/cdk/drag-drop';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, Field, FormlyFormBuilder, FieldType ,FormlyConfig } from '@ngx-formly/core';
import { isNullOrUndefined } from '../../../utils/index'
// import {  } from '@ngx-formly/core/lib/components/formly.field.config';


import { reverseDeepMerge, assignModelValue, clone } from '../../../utils/index';
import { DragAttributeService } from '../../../app/services/drag-attribute.service'
import { DragDropService } from '../../../app/services/drag-drop.service'



@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DropComponent  extends FieldType implements OnInit {
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
      key: 'nz-input',
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
      type: 'mt-drop-list',
      fieldGroup: [],
      templateOptions: {
        label: 'drop-list'
      }
    }, 
  ];

  dropForm = new FormGroup({});
  dropModel: any = {};
  dropOptions: FormlyFormOptions = {};
  dropFields:FormlyFieldConfig[] = [];

  operatorForm = new FormGroup({});
  operatorModel: any = {};
  operatorOptions: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  operatorFields: FormlyFieldConfig[] = []

  constructor(
    @Attribute('immutable') immutable,
    private attributeService: DragAttributeService,
    private dragDropService:DragDropService
  ) { 
    super()
  }







  drop(event: CdkDragDrop<string[]>) {
		console.log(event)
    if (event.previousContainer === event.container) {
      console.log('moveItemInArray')
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // copyArrayItem(event.container.data, event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('copyArrayItem')
      // console.log(event.previousContainer.data)
      // console.log(event.container.data)
      // console.log(event.previousIndex)
      // console.log(event.currentIndex)
      // transferArrayItem(event.previousContainer.data, <string[]>this.dropFields, event.previousIndex, event.currentIndex);
      copyArrayItem(event.previousContainer.data, <string[]>this.dropFields, event.previousIndex, event.currentIndex);

      // copyArrayItem(clone(event.previousContainer.data), event.container.data, event.previousIndex, event.currentIndex);
    }
  }



  ngOnInit() {
    this.operatorForm = this.attributeService.form
    this.operatorOptions = this.attributeService.options
    this.operatorFields = this.attributeService.fields
    this.attributeService.getModel().subscribe(res => {
      // this.operatorModel = res
      // console.log(this.attributeService.model)
      this.operatorModel = this.attributeService.model
    })

    this.dragDropService.getFields().subscribe(field => {
      // console.log(field)
      this.dropModel = this.dragDropService.model
      // this.dropOptions.resetModel(this.dropModel)
      this.dropFields = field
    })

    this.dragDropService.init()
    // this.operatorFiel
    // this.operatorModel = this.attributeService.model
    // console.log(this.attributeService.model)
    // getModel
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

  change ($event) {
    // this.attributeService.setModel($event)
  }
}
