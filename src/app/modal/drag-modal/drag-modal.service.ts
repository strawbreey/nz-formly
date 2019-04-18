import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragModalService {

  constructor() { }

  bulletlin$ = new Subject();

  addbulletlin(item) {
    this.bulletlin$.next(item)
  }
}
