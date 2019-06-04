import { 
  Component, DoCheck, OnChanges, Input, 
  SimpleChanges, Optional, EventEmitter, 
  Output, OnDestroy, Attribute, OnInit, 
  HostListener, ChangeDetectionStrategy, ComponentFactoryResolver, 
  Injector, ViewChild, TemplateRef, AfterViewInit, ViewContainerRef, forwardRef
} from '@angular/core';

import { FormGroup, FormArray, FormGroupDirective } from '@angular/forms';
import {CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem} from '@angular/cdk/drag-drop';

import { FormlyFormOptions, FormlyFieldConfig, Field,  FieldType, FormlyFormBuilder, FormlyConfig  } from '@ngx-formly/core';
import { FormlyFormOptionsCache }from '@ngx-formly/core/lib/components/formly.field.config';
import { getFieldId } from '@ngx-formly/core/lib/utils';

import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { assignModelValue, isNullOrUndefined, wrapProperty, clone, defineHiddenProp, reverseDeepMerge } from '../../../../utils/index'
import { DragAttributeService } from '../../../services/drag-attribute.service'
import { DragDropService } from '../../../services/drag-drop.service'
import { ModalService } from '../../../services/modal.service' 
import { LeftPaneService } from '../../../services/left-pane.service'
import { LayersService } from '../../../services/layers.service'

// import { AppContainerComponent } from './container/container.component' 
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AppContainerComponent),
      multi: true
    }
  ]
})

export class AppContainerComponent implements OnInit {

  _fields: FormlyFieldConfig

  @Input() root: String =  '';

  onChange: (value: number) => void = () => null;
  onTouched: () => void = () => null;

  connectedLists = []

  constructor(
    private _layers: LayersService 
  ) { }

  ngOnInit() {
    this._layers.addIds(this.root)
    this.connectedLists = this._layers.getIds()
    console.log(this.connectedLists)
  }

  drop (event: CdkDragDrop<string[]>) {
    console.log(event)
    moveItemInArray(<any[]>this._fields, event.previousIndex, event.currentIndex);
    // transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    console.log('111')
  }

  writeValue(_fields: FormlyFieldConfig): void {
    this._fields = _fields;
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
}
