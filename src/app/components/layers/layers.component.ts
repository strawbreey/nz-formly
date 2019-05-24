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
  selector: 'app-layers',
  templateUrl: './layers.component.html',
  styleUrls: ['./layers.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayersComponent implements OnInit {

  fields: FormlyFieldConfig[] = []

  constructor(
    private attributeService: DragAttributeService,
    private dragDropService:DragDropService,
    private _modalService: ModalService,
    private _leftPaneService: LeftPaneService,
  ) { 
    dragDropService.field$.subscribe(item => {
      this.fields = item
    })
  }

  ngOnInit() {

  }

  move ($event) {
    console.log('$event')
  } 

  drop (event: CdkDragDrop<string[]>) {
    moveItemInArray(this.fields, event.previousIndex, event.currentIndex);
  }

}




