import { Component, Optional,  OnInit, } from '@angular/core';
import {  FormGroupDirective } from '@angular/forms';
import {  FormlyFormBuilder } from '@ngx-formly/core';
import { DragAttributeService } from '../../services/drag-attribute.service';
import { DragDropService } from '../../services/drag-drop.service';
import { ModalService } from '../../services/modal.service';
import { LeftPaneService } from '../../services/left-pane.service';
import { DragDrop } from '@angular/cdk/drag-drop';
import { LayoutService } from '../../services/layout.service' 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private attributeService: DragAttributeService,
    private dragDropService:DragDropService,
    private formlyBuilder: FormlyFormBuilder,
    private _modalService: ModalService,
    private _leftPaneService: LeftPaneService,
    private _dragDrop: DragDrop,
    private _layoutService: LayoutService,
    @Optional() private parentFormGroup: FormGroupDirective,
  ) { }

  ngOnInit() {
  }

  // 打开样式编辑器
  openStyleModal ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this._modalService.open('style-editor', $event)
  }

  // code编辑器
  openCodeModel ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this._modalService.open('code-editor', $event)
  }

  // 快捷键弹窗
  openKeysModel ($event) {
    console.log('keys')
    $event.preventDefault();
    $event.stopPropagation();
    this._modalService.open('keys', $event)
  }

  showModal ($event) {
    // let fields = this.fieldGroup(clone(this.fields))
    // this._modalService.open('editor', {
    //   $event: $event,
    //   fields: fields
    // })
  }

  // class编辑器
  openClassModel ($event) {
    $event.preventDefault();
    $event.stopPropagation();
    this._modalService.open('class-editor', $event)
  }

  setDevice (device) {
    this._layoutService.setDevice(device)
  }

}
