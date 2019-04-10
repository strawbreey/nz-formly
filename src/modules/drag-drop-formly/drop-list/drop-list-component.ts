import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';
import { FieldType } from '@ngx-formly/core';
import { reverseDeepMerge, assignModelValue, clone } from '../../../utils/index';
import { DragDropService } from '../../../app/services/drag-drop.service'
import { DragAttributeService } from '../../../app/services/drag-attribute.service'


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
    const me = this;
    return (drag: CdkDrag<Element>, drop: CdkDropList<Element>): boolean => {
      // console.log(drag)
      // console.log(drop)
      const fromBounds = drag.dropContainer.element.nativeElement.getBoundingClientRect();
      const toBounds = drop.element.nativeElement.getBoundingClientRect();

      if (!me.intersect(fromBounds, toBounds)) {
        return true;
      }

      // This gross but allows us to access a private field for now.
      const pointerPosition: any = drag['_dragRef']['_pointerPositionAtLastDirectionChange'];
      // They Intersect with each other so we need to do some calculations here.
      if (me.insideOf(fromBounds, toBounds)) {
        return !me.pointInsideOf(pointerPosition, fromBounds);
      }

      if (me.insideOf(toBounds, fromBounds) && me.pointInsideOf(pointerPosition, toBounds)) {
        return true;
      }
      return false;
    };
	}
  
  // 
	intersect(r1: DOMRect | ClientRect, r2: DOMRect | ClientRect): boolean {
    return !(r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top);
	}
  
  // 
	insideOf(innerRect: DOMRect | ClientRect, outerRect: DOMRect | ClientRect): boolean {
    return innerRect.left >= outerRect.left &&
      innerRect.right <= outerRect.right &&
      innerRect.top >= outerRect.top &&
      innerRect.bottom <= outerRect.bottom &&
      !(
        innerRect.left === outerRect.left &&
        innerRect.right === outerRect.right &&
        innerRect.top === outerRect.top &&
        innerRect.bottom === outerRect.bottom
      );
	}
	
	// 
  pointInsideOf(position: any, rect: DOMRect | ClientRect) {
    return position.x >= rect.left &&
      position.x <= rect.right &&
      position.y >= rect.top &&
      position.y <= rect.bottom;
  }

  // 点击
	click ($event, field) {
    $event.stopPropagation();    
    $event.preventDefault();
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

}
