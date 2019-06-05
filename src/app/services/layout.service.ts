import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  // mobile, ipad, pc

  mobile = {
    'width': '375px',
    'height': '675px',
  }

  ipad = {
    'width': '768px',
    'height': '1024px'
  }

  pc = {
    'width': '100%',
    'min-height': '100%'
  }

  private _device = new Subject();

  device$ = this._device.asObservable();

  constructor() { }

  setDevice(data) {
    let device = null
    switch (data) {
      case 'mobile': device = this.mobile; break;
      case 'ipad': device = this.ipad; break;
      case 'pc': device = this.pc; break;
      default: device = this.mobile; break;
    }
    console.log('777777')
    console.log(device)
    this._device.next(device);
  }
}
