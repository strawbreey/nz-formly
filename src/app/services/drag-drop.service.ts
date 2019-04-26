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
  fields2: FormlyFieldConfig[] = [
    {
      type: 'nz-input',
      key: 'label',
      templateOptions: {
        label: '标签'
      }
    },
    {
      type: 'nz-input',
      key: 'label2',
      templateOptions: {
        label: '标签'
      }
    },
    {
      type: 'nz-input',
      key: 'label3',
      templateOptions: {
        label: '标签'
      }
    },
    {
      type: 'nz-input',
      key: 'label4',
      templateOptions: {
        label: '标签'
      }
    },
    {
      type: 'nz-input',
      key: 'label5',
      templateOptions: {
        label: '标签'
      }
    },
    {
      type: 'nz-input',
      key: 'label6',
      templateOptions: {
        label: '标签'
      }
    },
    {
      type: 'nz-input',
      key: 'label7',
      templateOptions: {
        label: '标签'
      }
    },
    {
      type: 'nz-input',
      key: 'label8',
      templateOptions: {
        label: '标签'
      }
    }
  ]
  fields3: FormlyFieldConfig[] = [
    {
      key: 'dropList1',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }, 
  ]
  fields4: FormlyFieldConfig[] = [
    {
      key: 'dropList1',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }, 
  ]
  fields1: FormlyFieldConfig[] = [
    {
      key: 'dropList1',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }, 
    {
      key: 'dropList2',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }, 
    {
      key: 'dropList3',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }, 
    {
      key: 'dropList4',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }, 
    {
      key: 'dropList5',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }, 
    {
      key: 'dropList6',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }, 
    {
      key: 'dropList7',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }, 
    {
      key: 'dropList8',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }, 
    {
      key: 'dropList9',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }, 
  ]
  timer = 0
  fields: FormlyFieldConfig[] = [
    {
      key: 'dropList',
      type: 'mt-drop-list',
      fieldGroup: [
        {
          type: 'nz-input',
          key: 'label',
          templateOptions: {
            label: '标签'
          }
        }
      ]
    }
  ]

  fields$ = new Subject<FormlyFieldConfig[]>()

  constructor() { 
    // this.fields$.next(this.fields)
  }

  getIds (): string [] {
    return this.ids
  }

  addIds (id) {
    if (!this.ids.find(item => item === id) && id) {
      this.ids.push(id)
    }
  }

  getFields () {
    return this.fields$
  }

  setFields () {
    // this.model = clone(this.model)
    // console.log(this.fields)
    // this.fields = this.fields1
    this.fields$.next(this.fields)
  }

  init ($event: null) {
    // this.fields = this.fields1
    // console.log(this.fields)
    // switch ($event) {
    //   case '1': console.log('1');this.fields = this.fields1; break
    //   case '2': console.log('2');this.fields = this.fields2; break
    //   case '3': console.log('3');this.fields = this.fields3; break
    //   case '4': console.log('4');this.fields = this.fields4;break

    // }
    
    this.fields$.next(this.fields)
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
