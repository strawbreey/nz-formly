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


@Component({
  selector: 'app-editor-modal',
  templateUrl: './editor-modal.component.html',
  styleUrls: ['./editor-modal.component.css']
})
export class EditorModalComponent implements OnInit {

  @ViewChild('codeEditorModal') _dialogTemplate: TemplateRef<any>;
  private _overlayRef: OverlayRef;
  private _portal: TemplatePortal;



  fields  = null

  editorOptions = {theme: 'vs-dark', language: 'javascript'};

  code: string= 'function x() {\nconsole.log("Hello world!");\n}';

  constructor(
    private _overlay: Overlay, 
    private _viewContainerRef: ViewContainerRef,
    private _modalService: ModalService
  ) { }

  ngOnInit() {
    this._modalService.modal$.pipe(filter(item => {
      return item['key'] === 'editor'
    })).subscribe(item => {
      // console.log(item)
      this.fields = item['data']['fields']
      this.isModelVisible = true
    })
  }

  isModelVisible = false

  handleCancel () {
    this.isModelVisible = false
  }

  handleOk () {
    this.isModelVisible = false
  }

  ngAfterViewInit() {
    // 弹窗内容
    this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
      height: '600px',
      width: '960px'
    });

    this._modalService.modal$.pipe(filter(item => {
      return item['key'] === 'code-editor'
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
    console.log('6666')
    let strategy = null
    strategy = this._overlay.position().global().width('500px').height('500px').centerHorizontally().centerVertically()
    this._overlayRef.updatePositionStrategy(strategy)
    this._overlayRef.attach(this._portal);
  }

  closeModal () {
    this._overlayRef.detach()
  }
}
