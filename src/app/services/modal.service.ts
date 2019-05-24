import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modal$ = new Subject();
  zIndex = 800
  constructor() { }

  // key: contentmenu 内容菜单
  // key: model 
  // key: field
  // key: click  点击弹窗
  // editor： 编辑器弹窗
  open(key: string, data = null) {
    this.zIndex = this.zIndex + 5
    this.modal$.next({
        key: key,
        zIndex: this.zIndex,
        data: data
    })
  }
}
