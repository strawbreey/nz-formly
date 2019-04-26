// import { Component Attribute, SimpleChanges } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem} from '@angular/cdk/drag-drop';
// import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, Field,  FieldType, FormlyFormBuilder, FormlyConfig  } from '@ngx-formly/core';
import {  assignModelValue, isNullOrUndefined, wrapProperty, clone, defineHiddenProp, reverseDeepMerge } from '../../../utils/index'
// import { FormlyFormBuilder } from '@ngx-formly/core/lib/services/formly.form.builder';
// import { FormlyConfig } from '@ngx-formly/core/lib/services/formly.config';
import { FormlyFormOptionsCache }from '@ngx-formly/core/lib/components/formly.field.config';
import { DragAttributeService } from '../../../app/services/drag-attribute.service'
import { DragDropService } from '../../../app/services/drag-drop.service'
import { Component, DoCheck, OnChanges, Input, SimpleChanges, Optional, EventEmitter, Output, OnDestroy, Attribute, OnInit, HostListener, ChangeDetectionStrategy, ComponentFactoryResolver, Injector, } from '@angular/core';
import { FormGroup, FormArray, FormGroupDirective } from '@angular/forms';

import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DropComponent implements DoCheck, OnChanges, OnDestroy {
  data = [1,2,3]

  // 菜单栏
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

  // 视图栏
  form = new FormGroup({});
  model: any = {radio: true};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };

  init = false
 
  // :FormlyFieldConfig[] = [];
  // fields
  fields: FormlyFieldConfig[] = [
    {
      key: 'radio',
      type: 'nz-radio',
      className: 'px-2',
      templateOptions: {
        text: 'primary',
      },
    }, 
  ];

  // 操作栏
  operatorForm = new FormGroup({});
  operatorModel: any = {};
  operatorOptions: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  operatorFields: FormlyFieldConfig[] = []

  // 
  ids = []

  constructor(
    private attributeService: DragAttributeService,
    private dragDropService:DragDropService,

    private formlyBuilder: FormlyFormBuilder,
    @Optional() private parentFormGroup: FormGroupDirective,
  ) { 
    // super()
    this.dragDropService.addIds('dragroot')

    this.ids = this.dragDropService.getIds()
  }


  // 将菜单栏控件拖到视图层
  dragListDrop(event: CdkDragDrop<string[]>, field) {
    console.log('dragListDrop')
    console.log('视图层')

    console.log(event.previousContainer.data)
    console.log(event.container.data)
    console.log(event)
    
    // 如果将视图层的拖到试图外，则是删除
    if (!event.isPointerOverContainer) {
      event.previousContainer.data.splice(event.previousIndex, 1)
      event.container.data.splice(event.currentIndex, 1)
      // this.dropField = clone(event.container.data)
      return
    }

    // 如果
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // copyArrayItem(event.container.data, event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // transferArrayItem(event.previousContainer.data, <string[]>this.dropFields, event.previousIndex, event.currentIndex);
      copyArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

      // copyArrayItem(clone(event.previousContainer.data), event.container.data, event.previousIndex, event.currentIndex);
    }

    // this.dropOptions.s
    console.log(event.container.data)
    // this.checkExpressionChange()
    // this.dropField = clone(event.container.data)
  }

  dragListEntered ($event) {
    console.log('dragListEntered')
    console.log($event)
  }

  dragListExited ($event, field) {
    console.log('dragListExited')
    console.log($event)
  }

  menuDrop (event: CdkDragDrop<string[]>, field) {
    console.log('菜单栏')
    if (event.previousContainer === event.container) {
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // copyArrayItem(event.container.data, event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('233')
      // 这是上一个
      console.log(event.previousContainer.data)
      console.log(event.container.data)

      // transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      // copyArrayItem(event.previousContainer.data, <string[]>this.dropFields, event.previousIndex, event.currentIndex);
      // copyArrayItem(event.previousContainer.data, <string[]>this.dropFields, event.previousIndex, event.currentIndex);
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.previousContainer.data)
      console.log(event.container.data)
      // copyArrayItem(clone(event.previousContainer.data), event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  ngOnInit() {
    console.log('ngOnInit')
    this.init = true
    // this.operatorForm = this.attributeService.form
    // this.operatorOptions = this.attributeService.options
    // this.operatorFields = this.attributeService.fields
    // this.attributeService.getModel().subscribe(res => {
    //   this.operatorModel = this.attributeService.model
    // })

    // this.dragDropService.getFields().subscribe(field => {
    //   // this.dropModel = this.dragDropService.model
    //   // this.dropFields = field
    // })
  }


  CdkDragStart($event) {
    console.log($event)
  }

  
  started($event) {
    console.log('started')
    console.log($event)
  }

  entered ($event, field) {
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

  exited ($event, field) {
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

  onclick ($event) {
    console.log($event)
  }

  contextmenu ($event) {
    $event.preventDefault();
    console.log('contextmenu')
    console.log($event)
  }


  isModelVisible = false

  showModal () {
    this.isModelVisible = true
  }

  handleCancel () {
    this.isModelVisible = false
  }

  handleOk () {
    this.isModelVisible = false
  }

  canDropPredicate(): Function {
    return this.dragDropService.canDropPredicate()
  }

  clones (field) {
    return clone(field)
  }

  change ($event) {
    console.log('change')
  }


  private initialModel: any;
  private modelChangeSubs: Subscription[] = [];

  private enableCheckExprDebounce = false;

  checkExpressionChange() {
    if ((<FormlyFormOptionsCache> this.options)._checkField) {
      (<FormlyFormOptionsCache> this.options)._checkField({
        fieldGroup: this.fields,
        model: this.model,
        formControl: this.form,
        options: this.options,
      });
    }
  }

  ngDoCheck() {
    console.log('ngDoCheck')
    this.checkExpressionChange();
  }

  clearModelSubscriptions() {
    this.modelChangeSubs.forEach(sub => sub.unsubscribe());
    this.modelChangeSubs = [];
  }
  
  ngOnDestroy() {
    this.clearModelSubscriptions();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges')
    if (changes.fields || changes.form || changes.model) {
      this.fields = this.fields || [];
      this.model = this.model || {};
      this.form = this.form || (new FormGroup({}));
      this.setOptions();
      this.clearModelSubscriptions();
      this.formlyBuilder.buildForm(this.form, this.fields, this.model, this.options);
      this.trackModelChanges(this.fields);
      this.options.updateInitialValue();
    }
  }

  setOptions() {
    if (!this.options) {
      this.options = {};
    }

    if (!this.options.resetModel) {
      this.options.resetModel = (model ?: any) => {
        model = isNullOrUndefined(model) ? this.initialModel : model;
        if (this.model) {
          Object.keys(this.model).forEach(k => delete this.model[k]);
          Object.assign(this.model, model || {});
        }

        (<FormlyFormOptionsCache> this.options)._buildForm();

        // we should call `NgForm::resetForm` to ensure changing `submitted` state after resetting form
        // but only when the current component is a root one.
        if (this.options.parentForm && this.options.parentForm.control === this.form) {
          this.options.parentForm.resetForm(model);
        } else {
          this.form.reset(model);
        }
      };
    }

    if (!this.options.parentForm && this.parentFormGroup) {
      defineHiddenProp(this.options, 'parentForm', this.parentFormGroup);
      wrapProperty(this.options.parentForm, 'submitted', (newVal, oldVal) => {
        if (newVal !== !!oldVal) {
          (<FormlyFormOptionsCache> this.options)._markForCheck({
            fieldGroup: this.fields,
            model: this.model,
            formControl: this.form,
            options: this.options,
          });
        }
      });
    }

    if (!this.options.updateInitialValue) {
      this.options.updateInitialValue = () => this.initialModel = clone(this.model);
    }

    if (!(<FormlyFormOptionsCache> this.options)._buildForm) {
      (<FormlyFormOptionsCache> this.options)._buildForm = (emitModelChange = false) => {
        this.clearModelSubscriptions();
        this.formlyBuilder.buildForm(this.form, this.fields, this.model, this.options);
        this.trackModelChanges(this.fields);

      };
    }
  }

  private trackModelChanges(fields: FormlyFieldConfig[], rootKey: string[] = []) {
    fields.forEach(field => {
      if (field.key && field.type && !field.fieldGroup) {
        const valueChanges = field.modelOptions.debounce && field.modelOptions.debounce.default
          ? field.formControl.valueChanges.pipe(debounceTime(field.modelOptions.debounce.default))
          : field.formControl.valueChanges;

        this.modelChangeSubs.push(valueChanges.subscribe(value => {
          if (field.parsers && field.parsers.length > 0) {
            field.parsers.forEach(parserFn => value = parserFn(value));
          }

          this.changeModel({ key: [...rootKey, field.key].join('.'), value });
        }));
      }

      if (field.fieldGroup && field.fieldGroup.length > 0) {
        this.trackModelChanges(field.fieldGroup, field.key ? [...rootKey, field.key] : rootKey);
      }
    });
  }

  changeModel(event: { key: string, value: any }) {
    assignModelValue(this.model, event.key.split('.'), event.value);
  }




}
