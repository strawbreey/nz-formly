import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import { FieldType } from '@ngx-formly/core';
import { reverseDeepMerge, assignModelValue, clone } from '../../../utils/index';
import { DragDropService } from '../../../app/services/drag-drop.service'
import { DragAttributeService } from '../../../app/services/drag-attribute.service'
import { cloneSVG } from '@ant-design/icons-angular';
import { ModalService } from '../../../app/services/modal.service'

@Component({
    selector: 'field-group',
		templateUrl: './drop-list-component.html',
		styleUrls:['./drop-list-component.css']
    // changeDetection: ChangeDetectionStrategy.OnPush

})
export class DropListComponent extends FieldType {

  ids = []
  connectedLists: string[];

  constructor(
    private  dragDropService: DragDropService, 
    private attributeService: DragAttributeService,
    private _modalService: ModalService
  ) {
    super()
  }


	ngOnInit(): void {
    console.log('drop-list: oninit')
    console.log(this)
    this.dragDropService.addIds(this.id)
    this.ids = this.dragDropService.getIds()
	}
  
  canDropPredicate(): Function {
    return this.dragDropService.canDropPredicate()
	}
  

  // ------------------------------------------ cdkDropList ----------------------------------------
  // 将菜单栏控件拖到视图层
  drop(event: CdkDragDrop<string[]>, field) {    
    // 如果将视图层的拖到试图外，则是删除
    console.log(event)
    if (event.previousContainer.id === 'menuid') {
      console.log('1')
      copyArrayItem(clone(event.previousContainer.data), event.container.data, event.previousIndex, event.currentIndex);
    } else {
      console.log('2')
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex)
    }
  }


  entered ($event, field) {
    console.log('entered')
    console.log($event)
  }

  exited ($event, field) {
    console.log('exited')
    console.log($event)
  }

  // -------------------------------------------- cdkDrag -----------------------------------------
  dragDrop ($event) {
    // console.log('dragDrop')
    // console.log($event)
  }

  dragEntered ($event) {
    // console.log('dragEntered')
    // console.log($event)
  }

  dragExited ($event) {

    // console.log('dragExited')
    // console.log($event)
  }

  dragStarted ($event) {
    // console.log('dragStarted')
    // console.log($event)
  }

  dragReleased ($event) {
    // console.log('dragReleased')
    // console.log($event)
  }

  
  // -------------------------------------------- cdkDrag -----------------------------------------

  // 获取当前的class
  getCurrentClass (field ) {
    if (field.className) {
      let className = field.className.split(' ').some(item => item === 'formly-field-box')
      if (!className) {
        field.className = field.className ? field.className + ' formly-field-box' : 'formly-field-box'
      }
    } else {
      field.className = 'formly-field-box'
    }
    return field.className
  }


  // 右键点击
  fieldContextMenu ($event, field) {
    $event.preventDefault();
    $event.stopPropagation();
    this._modalService.open('contentmenu', $event)

  }


  // 左键点击
  fieldClick ($event, field) {
    $event.preventDefault();
    $event.stopPropagation();
    this.attributeService.model = field
  }

  ngOnDestroy () {
    // console.log('drop-list: OnDestroy')
  }
}
