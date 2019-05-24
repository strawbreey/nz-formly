import { 
  Component, DoCheck, OnChanges, Input, 
  SimpleChanges, Optional, EventEmitter, 
  Output, OnDestroy, Attribute, OnInit, 
  HostListener, ChangeDetectionStrategy, ComponentFactoryResolver, 
  Injector, ViewChild, TemplateRef, AfterViewInit, ViewContainerRef
} from '@angular/core';

import { FormGroup, FormArray, FormGroupDirective } from '@angular/forms';
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

import { LeftPaneService } from '../../services/left-pane.service'

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class DropComponent implements DoCheck, OnDestroy {

  data = [1,2,3]
  ids = []

  // 菜单栏
  leftPaneFieldConfig: FormlyFieldConfig[] = []

  constructor(
    private attributeService: DragAttributeService,
    private dragDropService:DragDropService,
    private formlyBuilder: FormlyFormBuilder,
    private _modalService: ModalService,
    private _leftPaneService: LeftPaneService,
    @Optional() private parentFormGroup: FormGroupDirective,
  ) { 
    this.dragDropService.addIds('dragroot')
    this.ids = this.dragDropService.getIds()
    dragDropService.field$.subscribe(item => {
      console.log('item')
      console.log(item)
      this.fields = item
    })

    this.leftPaneFieldConfig = this._leftPaneService.FieldConfig
  }



  // 视图栏
  form = new FormGroup({});
  model: any = {radio: true};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
 
  fields: FormlyFieldConfig[] = [];

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

  initialModel: any;
  modelChangeSubs: Subscription[] = [];

  lastClickField = null

  // 将菜单栏控件拖到视图层
  dragListDrop(event: CdkDragDrop<string[]>, field) { 
    // 如果将视图层的拖到试图外，则是删除
    if (!event.isPointerOverContainer) {
      if (event.previousContainer === event.container) {
        event.container.data.splice(event.currentIndex, 1)        
      } else {
        event.container.data.splice(event.currentIndex, 1)
        event.previousContainer.data.splice(event.previousIndex, 1)
      }
      return
    }

    if (event.previousContainer.id ===  'menuid') {
      copyArrayItem(clone(event.previousContainer.data), event.container.data, event.previousIndex, event.currentIndex);      
    } else if (event.previousContainer === event.container ){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);      
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
 

    // this.dragDropService.setFields(this.fields)
  }

  dragListEntered ($event) {
    // console.log('dragListEntered')
    // console.log($event)
  }

  dragListExited ($event, field) {
    // console.log('dragListExited')
    // console.log($event)
  }

  menuDrop (event: CdkDragDrop<string[]>) {
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
    this.operatorFields = this.attributeService.fields
    this.getAttributeModel()

    this.dragDropService.setFields(this.fields)
  }

  getAttributeModel () {
    this.operatorModel = this.attributeService.getModel()
  }



  CdkDragStart($event) {
    console.log($event)
  }



  showModal ($event) {
    let fields = this.fieldGroup(clone(this.fields))
    this._modalService.open('editor', {
      $event: $event,
      fields: fields
    })
  }

  fieldGroup (field) {
    if (Array.isArray(field) && field.length > 0) {
      field = field.map(item => {
        if (item.fieldGroup && item.fieldGroup.length > 0) {
          return {
            key: item.key,
            templateOptions: item.templateOptions,
            type: item.type,
            wrappers: item.wrappers,
            className: item.className,
            fieldGroupClassName: item.fieldGroupClassName,
            fieldGroup: this.fieldGroup(item.fieldGroup)
          }
        } else {
          return {
            key: item.key,
            templateOptions: item.templateOptions,
            type: item.type,
            wrappers: item.wrappers,
            className: item.className
          }
        }
      })
    }
    return field
  }

  canDropPredicate(): Function {
    return this.dragDropService.canDropPredicate()
  }


  change ($event) {
    console.log('change')
  }



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

  // 右键点击: 点击右键, 弹出内容目录
  fieldContextMenu ($event, field) {
    $event.preventDefault();
    $event.stopPropagation();
    this._modalService.open('contentmenu', $event)
  }

  // 左键点击
  fieldClick ($event, field) {
    // 添加checked
    if (field !== this.lastClickField) {
      if (this.lastClickField && this.lastClickField.className) {
        this.lastClickField.className = this.lastClickField.className.split(" ").filter(item => item !== 'checked').toString()
      }

      field.className = field.className ? field.className + ' checked' : 'checked'
      this.lastClickField = field
    }

    $event.preventDefault();
    $event.stopPropagation();
    this.attributeService.model = field
  }

  // 打开样式编辑器
  openStyleModal ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this._modalService.open('style-editor', $event)
  }

  // class编辑器
  openClassModel ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this._modalService.open('class-editor', $event)
  }
}
