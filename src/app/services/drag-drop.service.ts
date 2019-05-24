import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, Subject } from 'rxjs';
import { reverseDeepMerge, assignModelValue, clone } from '../../utils/index';
import { CdkDragDrop, moveItemInArray, transferArrayItem, DragDropModule, copyArrayItem, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';


@Injectable({
  providedIn: 'root'
})
export class DragDropService {

  ids: string [] = []
  form = new FormGroup({});
  model: any = {
    dropList: {
      label: '233'
    }
  };

  fields: FormlyFieldConfig[] = []

  private fieldSource = new Subject<FormlyFieldConfig[]>();

  field$ = this.fieldSource.asObservable();

  constructor() { 
    // this.fields$.next(this.fields)
  }

  setFields(fields: FormlyFieldConfig[]) {
    this.fieldSource.next(fields);
  }


  getIds (): string [] {
    return this.ids
  }

  addIds (id) {
    if (!this.ids.find(item => item === id) && id) {
      this.ids.push(id)
    }
  }

  canDropPredicate(): Function {
    const me = this;
    return (drag: CdkDrag<Element>, drop: CdkDropList<Element>): boolean => {
      // console.log(drag)
      // console.log('drop')
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

}
