import { 
  Component, OnInit,  ViewChild, TemplateRef, ViewContainerRef
} from '@angular/core';
import { FormGroup, FormArray, FormGroupDirective } from '@angular/forms';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal } from '@angular/cdk/portal';

import { FormlyFormOptions, FormlyFieldConfig, Field,  FieldType, FormlyFormBuilder, FormlyConfig  } from '@ngx-formly/core';
import { FormlyFormOptionsCache }from '@ngx-formly/core/lib/components/formly.field.config';

import { Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { ModalService } from '../../services/modal.service'

export interface CollapseType {
  active: boolean;
  name: string;
  disabled: boolean;
  fields: FormlyFieldConfig[];
}

@Component({
  selector: 'app-class-editor-modal',
  templateUrl: './class-editor-modal.component.html',
  styleUrls: ['./class-editor-modal.component.css']
})

export class ClassEditorModalComponent {
  // 样式编辑器 
  @ViewChild('classEditorModal') _dialogTemplate: TemplateRef<any>;
  private _overlayRef: OverlayRef;
  private _portal: TemplatePortal;

  // form = new FormGroup({});
  model: any = {radio: true};
  // options: FormlyFormOptions = {
  //   formState: {
  //     awesomeIsForced: false,
  //   },
  // };

  collapses: CollapseType[] = [
    {
      name: 'Settings',
      active: true,
      disabled: false,
      fields: [
        {
          key: 'key',
          type: 'nz-input',
          className: 'ant-col-24 px-1',
          defaultValue: '',
          templateOptions: {
            label: 'Key',
            disabled: true,
            // nzLayout: 'vertical',
            nzSize: 'small'
          }
        },
        {
          key: 'type',
          type: 'nz-input',
          className: 'ant-col-24 px-1',
          defaultValue: '',
          templateOptions: {
            label: 'Type',
            disabled: true,
            // nzLayout: 'vertical',
            nzSize: 'small'
          }
        },
        {
          key: 'display',
          type:'nz-select',
          className: 'ant-col-12 px-1',
          defaultValue: 'd-none',
          templateOptions: {
            label: 'Display',
            nzFlex: false,
            nzSize: 'small',
            nzLayout: 'vertical',
            options: [{
              label: 'none',
              value: 'd-none'
            },{
              label: 'inline',
              value: 'd-inline'
            },{
              label: 'inline-block',
              value: 'd-inline-block'
            },{
              label: 'block',
              value: 'd-block'
            },{
              label: 'table',
              value: 'd-table'
            },{
              label: 'flex',
              value: 'd-flex'
            }]
          }
        },
        {
          key: 'border',
          type:'nz-select',
          className: 'ant-col-12 px-1',
          defaultValue: 'border',
          templateOptions: {
            label: 'Borders',
            nzFlex: false,
            nzSize: 'small',
            nzLayout: 'vertical',
            options: [
              {
                label: 'border',
                value: 'border'
              }, 
              {
                label: 'border-top',
                value: 'border-top'
              },
              {
                label: 'border-right',
                value: 'border-right'
              },
              {
                label: 'border-bottom',
                value: 'border-bottom'
              },
              {
                label: 'border-right',
                value: 'border-right'
              },
              {
                label: 'border-0',
                value: 'border-0'
              }, 
              {
                label: 'border-top-0',
                value: 'border-top-0'
              },
              {
                label: 'border-right-0',
                value: 'border-right-0'
              },
              {
                label: 'border-bottom-0',
                value: 'border-bottom-0'
              },
              {
                label: 'border-right-0',
                value: 'border-right-0'
              },
              {
                label: 'border-primary',
                value: 'border-primary'
              },
              {
                label: 'border-secondary',
                value: 'border-secondary'
              }, 
              {
                label: 'border-success',
                value: 'border-success'
              },
              {
                label: 'border-danger',
                value: 'border-danger'
              },
              {
                label: 'border-warning',
                value: 'border-warning'
              },
              {
                label: 'border-info',
                value: 'border-info'
              },
              {
                label: 'border-light',
                value: 'border-light'
              },
              {
                label: 'border-dark',
                value: 'border-dark'
              },
              {
                label: 'border-white',
                value: 'border-white'
              },
              {
                label: 'rounded',
                value: 'rounded'
              },
              {
                label: 'rounded-top',
                value: 'rounded-top'
              },
              {
                label: 'rounded-bottom',
                value: 'rounded-bottom'
              },
              {
                label: 'rounded-right',
                value: 'rounded-right'
              },
              {
                label: 'rounded-left',
                value: 'rounded-left'
              },
              {
                label: 'rounded-circle',
                value: 'rounded-circle'
              },
              {
                label: 'rounded-0',
                value: 'rounded-0'
              },
            ]
          },
        }
      ]
    },
    {
      name: 'General',
      active: true,
      disabled: false,
      fields: [
        {
          key: 'radio',
          type: 'nz-radio-group',
          className: 'ant-col-24 px-1',
          templateOptions: {
            label: 'Alignment',
            nzButtonStyle: 'solid',
            nzLayout: 'vertical',
            nzSize: 'small',
            options: [{
              value: 'left',
              icon: 'align-left'
            }, {
              value: 'center',
              icon: 'align-center'
            }, {
              value: 'right',
              icon: 'align-right'
            }]
          }
        },
        {
          key: 'display',
          type:'nz-select',
          className: 'ant-col-12 px-1',
          templateOptions: {
            label: 'Display',
            nzFlex: false,
            nzSize: 'small',
            nzLayout: 'vertical',
            options: [
            {
              label: 'none',
              value: 'd-none'
            },{
              label: 'inline',
              value: 'd-inline'
            },{
              label: 'inline-block',
              value: 'd-inline-block'
            },{
              label: 'block',
              value: 'd-block'
            },{
              label: 'table',
              value: 'd-table'
            },{
              label: 'flex',
              value: 'd-flex'
            }]
          }
        },
        {
          key: 'border',
          type:'nz-select',
          className: 'ant-col-12 px-1',
          templateOptions: {
            label: 'Borders',
            nzFlex: false,
            nzSize: 'small',
            nzLayout: 'vertical',
            options: [
              {
                label: 'border',
                value: 'border'
              }, 
              {
                label: 'border-top',
                value: 'border-top'
              },
              {
                label: 'border-right',
                value: 'border-right'
              },
              {
                label: 'border-bottom',
                value: 'border-bottom'
              },
              {
                label: 'border-right',
                value: 'border-right'
              },
              {
                label: 'border-0',
                value: 'border-0'
              }, 
              {
                label: 'border-top-0',
                value: 'border-top-0'
              },
              {
                label: 'border-right-0',
                value: 'border-right-0'
              },
              {
                label: 'border-bottom-0',
                value: 'border-bottom-0'
              },
              {
                label: 'border-right-0',
                value: 'border-right-0'
              },
              {
                label: 'border-primary',
                value: 'border-primary'
              },
              {
                label: 'border-secondary',
                value: 'border-secondary'
              }, 
              {
                label: 'border-success',
                value: 'border-success'
              },
              {
                label: 'border-danger',
                value: 'border-danger'
              },
              {
                label: 'border-warning',
                value: 'border-warning'
              },
              {
                label: 'border-info',
                value: 'border-info'
              },
              {
                label: 'border-light',
                value: 'border-light'
              },
              {
                label: 'border-dark',
                value: 'border-dark'
              },
              {
                label: 'border-white',
                value: 'border-white'
              },
              {
                label: 'rounded',
                value: 'rounded'
              },
              {
                label: 'rounded-top',
                value: 'rounded-top'
              },
              {
                label: 'rounded-bottom',
                value: 'rounded-bottom'
              },
              {
                label: 'rounded-right',
                value: 'rounded-right'
              },
              {
                label: 'rounded-left',
                value: 'rounded-left'
              },
              {
                label: 'rounded-circle',
                value: 'rounded-circle'
              },
              {
                label: 'rounded-0',
                value: 'rounded-0'
              },
            ]
          },
        },
        {
          key: 'Top',
          type: 'nz-number',
          defaultValue: 0,
          className: 'ant-col-12 px-1',
          templateOptions: {
            label: 'Top',
            nzLayout: 'vertical',
            nzSize: 'small'
          }
        },
        {
          key: 'Right',
          type: 'nz-number',
          defaultValue: 0,
          className: 'ant-col-12  px-1',
          templateOptions: {
            label: 'Right',
            nzLayout: 'vertical',
            nzSize: 'small'
          }
        },
        {
          key: 'Left',
          type: 'nz-number',
          defaultValue: 0,
          className: 'ant-col-12 px-1',
          templateOptions: {
            label: 'Left',
            nzLayout: 'vertical',
            nzSize: 'small'
          }
        },
        {
          key: 'Bottom',
          type: 'nz-number',
          defaultValue: 0,
          className: 'ant-col-12 px-1',
          templateOptions: {
            label: 'Bottom',
            nzLayout: 'vertical',
            nzSize: 'small'
          }
        },
      ]
    },
    {
      name: 'Typography',
      active: true,
      disabled: false,
      fields: [
        {
          key: 'Font',
          type:'nz-select',
          className: 'ant-col-12 px-1',
          templateOptions: {
            label: 'Font',
            nzFlex: false,
            nzSize: 'small',
            nzLayout: 'vertical',
            options: [
              {
                label: 'Arial',
                value: 'Arial'
              }, 
              {
                label: 'Helvetica',
                value: 'Helvetica'
              },
            ]
          }
        },
        {
          key: 'font-size',
          type: 'nz-number',
          defaultValue: 0,
          className: 'ant-col-12 px-1',
          templateOptions: {
            label: 'Font size',
            nzLayout: 'vertical',
            nzSize: 'small'
          }
        },
        {
          key: 'Weight',
          type:'nz-select',
          className: 'ant-col-12 px-1',
          templateOptions: {
            label: 'Weight',
            nzFlex: false,
            nzSize: 'small',
            nzLayout: 'vertical',
            options: [
              {
                label: 'Blod',
                value: 'Blod'
              }, 
              {
                label: 'Normal',
                value: 'Normal'
              },
            ]
          }
        },
        {
          key: 'letterSpacing',
          type:'nz-select',
          className: 'ant-col-12 px-1',
          templateOptions: {
            label: 'Weight',
            nzFlex: false,
            nzSize: 'small',
            nzLayout: 'vertical',
            options: [
              {
                label: 'Blod',
                value: 'Blod'
              }, 
              {
                label: 'Normal',
                value: 'Normal'
              },
            ]
          }
        },
        {
          key: 'textAlign',
          type: 'nz-radio-group',
          className: 'ant-col-24 px-1',
          templateOptions: {
            label: 'Text align',
            nzButtonStyle: 'solid',
            nzLayout: 'vertical',
            nzSize: 'small',
            options: [
              {
                value: 'align-left',
                icon: 'align-left'
              }, {
                value: 'align-center',
                icon: 'align-center'
              }, {
                value: 'align-right',
                icon: 'align-right'
              }
            ]
          }
        },
        {
          key: 'textDecatation',
          type: 'nz-radio-group',
          className: 'ant-col-24 px-1',
          templateOptions: {
            label: 'Text decoration',
            nzButtonStyle: 'solid',
            nzLayout: 'vertical',
            nzSize: 'small',
            options: [
              {
                value: 'close',
                icon: 'close'
              }, {
                value: 'underline',
                icon: 'underline'
              }, {
                value: 'strikethrough',
                icon: 'strikethrough'
              }
            ]
          }
        },
      ]
    }
    
  ]
 
  fields: FormlyFieldConfig[] = [{
    fieldGroupClassName: 'ant-row px-1',
    fieldGroup: [
      {
        key: 'display',
        type:'nz-select',
        className: 'ant-col-12 px-1',
        templateOptions: {
          label: 'Display',
          nzFlex: false,
          nzSize: 'small',
          nzLayout: 'vertical',
          options: [{
            label: 'none',
            value: 'd-none'
          },{
            label: 'inline',
            value: 'd-inline'
          },{
            label: 'inline-block',
            value: 'd-inline-block'
          },{
            label: 'block',
            value: 'd-block'
          },{
            label: 'table',
            value: 'd-table'
          },{
            label: 'flex',
            value: 'd-flex'
          }]
        }
      },
      {
        key: 'position',
        type:'nz-select',
        className: 'ant-col-12 px-1',
        templateOptions: {
          label: 'Position',
          nzFlex: false,
          nzSize: 'small',
          nzLayout: 'vertical',
          options: [
            {
              label: 'static',
              value: 'position-static'
            }, 
            {
              label: 'relative',
              value: 'position-relative'
            },
            {
              label: 'absolute',
              value: 'position-absolute'
            },
            {
              label: 'inline-fixed',
              value: 'position-fixed'
            },
            {
              label: 'sticky',
              value: 'position-sticky'
            },
          ]
        },
        
      },
      {
        key: 'border',
        type:'nz-select',
        className: 'ant-col-12 px-1',
        templateOptions: {
          label: 'Borders',
          nzFlex: false,
          nzSize: 'small',
          nzLayout: 'vertical',
          options: [
            {
              label: 'border',
              value: 'border'
            }, 
            {
              label: 'border-top',
              value: 'border-top'
            },
            {
              label: 'border-right',
              value: 'border-right'
            },
            {
              label: 'border-bottom',
              value: 'border-bottom'
            },
            {
              label: 'border-right',
              value: 'border-right'
            },
            {
              label: 'border-0',
              value: 'border-0'
            }, 
            {
              label: 'border-top-0',
              value: 'border-top-0'
            },
            {
              label: 'border-right-0',
              value: 'border-right-0'
            },
            {
              label: 'border-bottom-0',
              value: 'border-bottom-0'
            },
            {
              label: 'border-right-0',
              value: 'border-right-0'
            },
            {
              label: 'border-primary',
              value: 'border-primary'
            },
            {
              label: 'border-secondary',
              value: 'border-secondary'
            }, 
            {
              label: 'border-success',
              value: 'border-success'
            },
            {
              label: 'border-danger',
              value: 'border-danger'
            },
            {
              label: 'border-warning',
              value: 'border-warning'
            },
            {
              label: 'border-info',
              value: 'border-info'
            },
            {
              label: 'border-light',
              value: 'border-light'
            },
            {
              label: 'border-dark',
              value: 'border-dark'
            },
            {
              label: 'border-white',
              value: 'border-white'
            },
            {
              label: 'rounded',
              value: 'rounded'
            },
            {
              label: 'rounded-top',
              value: 'rounded-top'
            },
            {
              label: 'rounded-bottom',
              value: 'rounded-bottom'
            },
            {
              label: 'rounded-right',
              value: 'rounded-right'
            },
            {
              label: 'rounded-left',
              value: 'rounded-left'
            },
            {
              label: 'rounded-circle',
              value: 'rounded-circle'
            },
            {
              label: 'rounded-0',
              value: 'rounded-0'
            },
          ]
        },   
      }
    ]
  }];

  panels = [
    {
      active: true,
      name: '文字',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      name: '文本'
    },
    {
      active: false,
      disabled: true,
      name: '阴影'
    },
    {
      active: false,
      disabled: true,
      name: '动效'
    }
  ];

  form = new FormArray(this.collapses.map(() => new FormGroup({})));
  options = this.collapses.map(() => <FormlyFormOptions>{});

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
      return item['key'] === 'class-editor'
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
