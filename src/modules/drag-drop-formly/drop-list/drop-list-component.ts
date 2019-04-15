import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import { FieldType } from '@ngx-formly/core';
import { reverseDeepMerge, assignModelValue, clone } from '../../../utils/index';
import { DragDropService } from '../../../app/services/drag-drop.service'
import { DragAttributeService } from '../../../app/services/drag-attribute.service'
import { cloneSVG } from '@ant-design/icons-angular';


@Component({
    selector: 'mt-drop-list-group',
		templateUrl: './drop-list-component.html',
		styleUrls:['./drop-list-component.css']
    // changeDetection: ChangeDetectionStrategy.OnPush

})
export class DropListComponent extends FieldType {

  ids = []
  connectedLists: string[];

  constructor(private  dragDropService: DragDropService, private attributeService: DragAttributeService) {
    super()
   }


	ngOnInit(): void {
    this.dragDropService.addIds(this.id)
    this.ids = this.dragDropService.getIds()
	}
  
  // 
  canDropPredicate(): Function {
    return this.dragDropService.canDropPredicate()
	}
  


  // 点击
	click ($event, field) {
    console.log($event)
    console.log(field)

    // $event.stopPropagation();    
    // $event.preventDefault();
    this.attributeService.setModel(field)
	}
  
  // 右击
	contextmenu ($event) {
    $event.stopPropagation();
    $event.preventDefault();
    console.log('contextmenu')
	}

	drop(event: CdkDragDrop<string[]>, field) {
		if (event.previousContainer === event.container) {
			moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (Array.isArray(event.container.connectedTo) && 
                  event.container.connectedTo.some(id => id === event.previousContainer.id)) {
			transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);      
    } else {
      copyArrayItem(clone(event.previousContainer.data), event.container.data, event.previousIndex, event.currentIndex)
    }
    console.log('drop')
    console.log(this)
    this.dragDropService.setFields()
  }

  started($event) {
    console.log('started')
    console.log($event)
    // let drag = $event.source
    // console.log(drag.getPlaceholderElement())
    // console.log(drag.getRootElement())
  }

  entered ($event) {
    console.log('entered')
    // console.log($event)
  }

  ended ($event) {
    console.log('ended')
    console.log($event)
  }

  exited ($event) {
    console.log('exited')
    console.log($event)
  }

  moved ($event) {
    console.log('moved')
    console.log($event)
  }

  released ($event) {
    console.log('released')
    console.log($event)
  }
  
  ngOnDestroy () {
    console.log(this.key+': ngOnDestroy')
  }

  dragDrop ($event) {
    console.log('dragDrop')
    console.log($event)
    console.log(this)
  }

  dragEntered ($event) {
    console.log('dragEntered')
    console.log($event)
  }

  dragExited ($event) {

    console.log('dragExited')
    console.log($event)
  }

  dragStarted ($event) {
    console.log('dragStarted')
    console.log($event)

  }

  dragReleased ($event) {
    console.log('dragReleased')
    console.log($event)
  }

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

  clones (field) {
    return clone(field)
  }

}
