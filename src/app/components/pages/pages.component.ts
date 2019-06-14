import { Component,  OnInit } from '@angular/core';
import { DragDropService } from '../../services/drag-drop.service';
import { LayersService } from '../../services/layers.service';

import {CdkDragDrop, moveItemInArray,  transferArrayItem,  CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  fields = [{
    id: '1',
    title: '1',
    parent: '',
    icon: '',
    url: '',
    sort: '',
    authGroup: '',
    level: 1,
    children: [
      {
        id: '1.1',
        title: '1-1',
        parent: '',
        icon: '',
        url: '',
        sort: '',
        level: 2,
        authGroup: '',
        children: [
          {
            id: '1.1.1',
            title: '1-1',
            parent: '',
            icon: '',
            url: '',
            sort: '',
            level: 3,
            authGroup: '',
            isLeaf: true
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: '2',
    parent: '',
    icon: '',
    url: '',
    sort: '',
    level: 1,
    authGroup: '',
    children: [
      {
        id: '2.1',
        title: '2-2',
        parent: '',
        icon: '',
        url: '',
        level: 2,
        sort: '',
        authGroup: '',
        isLeaf: true
      }
    ]
  }]

  elements: Element[];
  connectedLists: string[] = ['root', '1', '2', '1.1', '1.1.1', '2.1'];

  constructor(
    private _dragDropService: DragDropService,
    private _layers: LayersService 
  ) { 
  }

  ngOnInit() {
    
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
