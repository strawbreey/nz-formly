import { 
  Component, DoCheck, OnChanges, Input, 
  SimpleChanges, Optional, EventEmitter, 
  Output, OnDestroy, Attribute, OnInit, 
  HostListener, ChangeDetectionStrategy, ComponentFactoryResolver, 
  Injector, ViewChild, TemplateRef, AfterViewInit, ViewContainerRef
} from '@angular/core';

import { FormGroup, FormArray, FormGroupDirective } from '@angular/forms';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal, PortalModule} from '@angular/cdk/portal';
import {CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem} from '@angular/cdk/drag-drop';

import { FormlyFormOptions, FormlyFieldConfig, Field,  FieldType, FormlyFormBuilder, FormlyConfig  } from '@ngx-formly/core';
import { FormlyFormOptionsCache }from '@ngx-formly/core/lib/components/formly.field.config';
import { getFieldId } from '@ngx-formly/core/lib/utils';

import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { assignModelValue, isNullOrUndefined, wrapProperty, clone, defineHiddenProp, reverseDeepMerge } from '../../../utils/index'
import { DragAttributeService } from '../../services/drag-attribute.service'
import { DragDropService } from '../../services/drag-drop.service'
import { ModalService } from '../../services/modal.service' 

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DropComponent implements DoCheck, OnChanges, OnDestroy, AfterViewInit {

  data = [1,2,3]
  ids = []

  constructor(
    private attributeService: DragAttributeService,
    private dragDropService:DragDropService,
    private _overlay: Overlay, 
    private _viewContainerRef: ViewContainerRef,
    private formlyBuilder: FormlyFormBuilder,
    private _modalService: ModalService,
    @Optional() private parentFormGroup: FormGroupDirective,
  ) { 
    this.dragDropService.addIds('dragroot')
    this.ids = this.dragDropService.getIds()
  }

  // 菜单栏
  menuData:FormlyFieldConfig[] = [    
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
      key: 'label',
      type: 'nz-title',
      className: 'd-block',
      defaultValue: '请输入',
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

  // 视图栏
  form = new FormGroup({});
  model: any = {radio: true};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };

  init = false
 
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

  resultField 


  // 将菜单栏控件拖到视图层
  dragListDrop(event: CdkDragDrop<string[]>, field) { 
    console.log(event)   
    // // 如果将视图层的拖到试图外，则是删除
    if (!event.isPointerOverContainer) {
      event.previousContainer.data.splice(event.previousIndex, 1)
      event.container.data.splice(event.currentIndex, 1)
      return
    }

    // // 如果
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    //   // copyArrayItem(event.container.data, event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   // transferArrayItem(event.previousContainer.data, <string[]>this.dropFields, event.previousIndex, event.currentIndex);
    //   copyArrayItem(clone(event.previousContainer.data), event.container.data, event.previousIndex, event.currentIndex);

    //   // copyArrayItem(clone(event.previousContainer.data), event.container.data, event.previousIndex, event.currentIndex);
    // }

    if (event.previousContainer.id ===  'menuid') {
      copyArrayItem(clone(event.previousContainer.data), event.container.data, event.previousIndex, event.currentIndex);      
    } else if (event.previousContainer === event.container ){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);      
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  dragListEntered ($event) {
    // console.log('dragListEntered')
    // console.log($event)
  }

  dragListExited ($event, field) {
    // console.log('dragListExited')
    // console.log($event)
  }

  menuDrop (event: CdkDragDrop<string[]>, field) {
    // console.log('菜单栏')
    if (event.previousContainer === event.container) {
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // copyArrayItem(event.container.data, event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // console.log('233')
      // // 这是上一个
      // console.log(event.previousContainer.data)
      // console.log(event.container.data)

      // transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      // copyArrayItem(event.previousContainer.data, <string[]>this.dropFields, event.previousIndex, event.currentIndex);
      // copyArrayItem(event.previousContainer.data, <string[]>this.dropFields, event.previousIndex, event.currentIndex);
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      // console.log(event.previousContainer.data)
      // console.log(event.container.data)
      // copyArrayItem(clone(event.previousContainer.data), event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  menuMoved ($event) {
    console.log('$event')
  } 

  ngOnInit() {
    console.log('ngOnInit')
    this.init = true

    this.operatorFields = this.attributeService.fields
    // this.operatorModel = this.attributeService.model
    this.getAttributeModel()
    
    // this.formlyBuilder.buildForm(this.form,[field], this.model,this.options);
  }

  getAttributeModel () {
    this.operatorModel = this.attributeService.getModel()
  }



  CdkDragStart($event) {
    console.log($event)
  }


  isModelVisible = false

  showModal () {
    this.isModelVisible = true
    let field = this.getField(this.fields)
    this.resultField = field

    // this
  }

  getField (field) {
    if (Array.isArray(field)) {
      return field.map(item => {
        return {
          key: item.key,
          templateOptions: item.templateOptions,
          type: item.type,
          wrappers: item.wrappers,
          className: item.className
        }
      })
    }
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
    this.fieldChanges()
    this.getAttributeModel()
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

  fieldChanges () {
    this.fields = this.fields || [];
    this.model = this.model || {};
    this.form = this.form || (new FormGroup({}));
    this.setOptions();
    this.clearModelSubscriptions();
    this.formlyBuilder.buildForm(this.form, this.fields, this.model, this.options);
    this.trackModelChanges(this.fields);
    this.options.updateInitialValue();
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

  getCurrentClass () {

  }


  // TODO: field
  fieldDrop ($event) {
    // console.log('fieldDrop')
    console.log($event)
  }

  fieldEntered ($event) {
    console.log('fieldEntered')
  }

  fieldExited ($event) {
    console.log('fieldExited')
  }

  fieldReleased ($event) {
    console.log('fieldReleased')
  }

  fieldStarted ($event) {
    console.log('fieldStarted')
  }

  // 右键点击
  fieldContextMenu ($event, field) {
    $event.preventDefault();
    $event.stopPropagation();
    // this.openDialog($event)
    this._modalService.open('contentmenu', $event)
  }

  // 左键点击
  fieldClick ($event, field) {
    $event.preventDefault();
    $event.stopPropagation();
    this.attributeService.model = field
  }
}
