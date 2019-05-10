
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
import { debounceTime, filter } from 'rxjs/operators';
import { ModalService } from '../../services/modal.service'



@Component({
  selector: 'app-content-menu-modal',
  templateUrl: './content-menu-modal.component.html',
  styleUrls: ['./content-menu-modal.component.css']
})
export class ContentMenuModalComponent implements OnInit {
  @ViewChild('contentmenu') _dialogTemplate: TemplateRef<any>;
  private _overlayRef: OverlayRef;
  private _portal: TemplatePortal;

  constructor(
    private _overlay: Overlay, 
    private _viewContainerRef: ViewContainerRef,
    private _modalService: ModalService
  ) { }


  ngAfterViewInit() {
    // 弹窗内容
    this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
    });

    this._modalService.modal$.pipe(filter(item => {
      return item['key'] === 'contentmenu'
    })).subscribe(item => {
      console.log(item)
      this.openDialog(item['$event'])
    })

    // 点击遮罩层关闭弹窗
    this._overlayRef.backdropClick().subscribe(($event) => {
      console.log($event)
      this._overlayRef.detach()
    });

    this._overlayRef.keydownEvents().subscribe(($event) => {
      console.log($event)
      $event.stopPropagation()
    })
  }

  
  openDialog($event) {
    let strategy = null
    strategy = this._overlay.position().flexibleConnectedTo({
        x: $event.x,
        y: $event.y
    }).withPositions([{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top',
    }])
    this._overlayRef.updatePositionStrategy(strategy)
    this._overlayRef.attach(this._portal);
  }

  ngOnInit() {
  }

}
