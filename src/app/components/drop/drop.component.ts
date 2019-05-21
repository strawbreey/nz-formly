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
  }

  getAttributeModel () {
    this.operatorModel = this.attributeService.getModel()
  }



  CdkDragStart($event) {
    console.log($event)
  }



  showModal ($event) {
    let field = this.getField(this.fields)
    this.resultField = field
    this._modalService.open('editor', $event)
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

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges')
  //   if (changes.fields || changes.form || changes.model) {
  //     this.fields = this.fields || [];
  //     this.model = this.model || {};
  //     this.form = this.form || (new FormGroup({}));
  //     this.setOptions();
  //     this.clearModelSubscriptions();
  //     this.formlyBuilder.buildForm(this.form, this.fields, this.model, this.options);
  //     this.trackModelChanges(this.fields);
  //     this.options.updateInitialValue();
  //   }
  // }

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
    console.log($event)
    $event.preventDefault();
    $event.stopPropagation();
    this.attributeService.model = field
  }
}
