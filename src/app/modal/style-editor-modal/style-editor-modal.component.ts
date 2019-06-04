import { 
  Component, OnInit,  ViewChild, TemplateRef, ViewContainerRef
} from '@angular/core';
import { FormGroup, FormArray, FormGroupDirective } from '@angular/forms';


import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal } from '@angular/cdk/portal';

import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { ModalService } from '../../services/modal.service'

import { FormlyFormOptions, FormlyFieldConfig, Field,  FieldType, FormlyFormBuilder, FormlyConfig  } from '@ngx-formly/core';
import { FormlyFormOptionsCache }from '@ngx-formly/core/lib/components/formly.field.config';


export interface CollapseType {
  active: boolean;
  name: string;
  disabled: boolean;
  fields: FormlyFieldConfig[];
}

@Component({
  selector: 'app-style-editor-modal',
  templateUrl: './style-editor-modal.component.html',
  styleUrls: ['./style-editor-modal.component.css']
})


export class StyleEditorModalComponent {
  // 样式编辑器 
  @ViewChild('styleEditorModal') _dialogTemplate: TemplateRef<any>;
  private _overlayRef: OverlayRef;
  private _portal: TemplatePortal;

  constructor(
    private _overlay: Overlay, 
    private _viewContainerRef: ViewContainerRef,
    private _modalService: ModalService
  ) { }

  form = new FormGroup({});
  model: any = {radio: true};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };

  Collapses: CollapseType[] = [
    {
      name: 'Setting',
      active: true,
      disabled: false,
      fields: [
        {
          key: 'padding-right',
          type: 'nz-number',
          defaultValue: 0,
          className: 'ant-col-12',
          templateOptions: {
            label: 'Right',
            nzLayout: 'vertical',
            nzSize: 'small'
          }
        },
        {
          key: 'padding-left',
          type: 'nz-number',
          defaultValue: 0,
          className: 'ant-col-12',
          templateOptions: {
            label: 'Left',
            nzLayout: 'vertical',
            nzSize: 'small'
          }
        },
        {
          key: 'padding-top',
          type: 'nz-number',
          defaultValue: 0,
          className: 'ant-col-12',
          templateOptions: {
            label: 'Top',
            nzLayout: 'vertical',
            nzSize: 'small'
          }
        },
        {
          key: 'padding-bottom',
          type: 'nz-number',
          defaultValue: 0,
          className: 'ant-col-12',
          templateOptions: {
            label: 'Bottom',
            nzLayout: 'vertical',
            nzSize: 'small'
          }
        }
      ]
    }
  ]
 
  fields: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'ant-row p-1',
    fieldGroup: [
      {
        key: 'padding-right',
        type: 'nz-number',
        defaultValue: 0,
        className: 'ant-col-12',
        templateOptions: {
          label: 'Right',
          nzLayout: 'vertical',
          nzSize: 'small'
        }
      },
      {
        key: 'padding-left',
        type: 'nz-number',
        defaultValue: 0,
        className: 'ant-col-12',
        templateOptions: {
          label: 'Left',
          nzLayout: 'vertical',
          nzSize: 'small'
        }
      },
      {
        key: 'padding-top',
        type: 'nz-number',
        defaultValue: 0,
        className: 'ant-col-12',
        templateOptions: {
          label: 'Top',
          nzLayout: 'vertical',
          nzSize: 'small'
        }
      },
      {
        key: 'padding-bottom',
        type: 'nz-number',
        defaultValue: 0,
        className: 'ant-col-12',
        templateOptions: {
          label: 'Bottom',
          nzLayout: 'vertical',
          nzSize: 'small'
        }
      }
    ]
  }]

  ngAfterViewInit() {
    // 弹窗内容
    this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
    });

    this._modalService.modal$.pipe(filter(item => {
      return item['key'] === 'style-editor'
    })).subscribe(item => {
      this.openDialog(item['$event'])
    })

    // 点击遮罩层关闭弹窗
    this._overlayRef.backdropClick().subscribe(($event) => {
      this._overlayRef.detach()
    });

    this._overlayRef.keydownEvents().subscribe(($event) => {
      $event.stopPropagation()
    })
  }

  
  openDialog($event) {
    let strategy = null
    strategy = this._overlay.position().flexibleConnectedTo({
        x: 1200,
        y: 100
    }).withPositions([{
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'top',
    }])
    this._overlayRef.updatePositionStrategy(strategy)
    this._overlayRef.attach(this._portal);
  }

  closeModal () {
    this._overlayRef.detach()
  }
}
