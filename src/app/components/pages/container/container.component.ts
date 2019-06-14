import { Component, Input, OnInit,forwardRef } from '@angular/core';

import {CdkDragDrop, moveItemInArray,  transferArrayItem,  CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';

import { FormlyFieldConfig,  } from '@ngx-formly/core';

import { LayersService } from '../../../services/layers.service'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'app-pages-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: forwardRef(() => AppPagesContainerComponent),
  //     multi: true
  //   }
  // ]
})

export class AppPagesContainerComponent implements OnInit {

  _fields = []

  @Input() 
  root: String =  '';

  @Input()
  element

  @Input()
  connectedLists: string[] = ['root', '1', '2', '1.1', '1.1.1', '2.1'];

  onChange: (value: number) => void = () => null;
  onTouched: () => void = () => null;

  constructor(
    private _layers: LayersService 
  ) { }

  ngOnInit() {
    // console.log(this)
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  // writeValue(_fields): void {
  //   this._fields = _fields;
  // }

  // registerOnChange(fn: (_: any) => {}): void {
  //   this.onChange = fn;
  // }

  // registerOnTouched(fn: () => {}): void {
  //   this.onTouched = fn;
  // }

  canDropPredicate(): Function {
    const me = this;
    return (drag: CdkDrag<Element>, drop: CdkDropList<Element>): boolean => {
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

  intersect(r1: DOMRect | ClientRect, r2: DOMRect | ClientRect): boolean {
    return !(r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top);
  }

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

  pointInsideOf(position: any, rect: DOMRect | ClientRect) {
    return position.x >= rect.left &&
      position.x <= rect.right &&
      position.y >= rect.top &&
      position.y <= rect.bottom;
  }
}
