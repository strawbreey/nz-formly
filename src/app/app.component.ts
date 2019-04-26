import { Component, ElementRef,ViewChild } from '@angular/core';

import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import { DragModalService } from './modal/drag-modal/drag-modal.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dragService: DragModalService, ) {

  }

  @ViewChild('modal1') modal1: ElementRef
  @ViewChild('modal2') modal2: ElementRef
  @ViewChild('modal3') modal3: ElementRef

  @ViewChild('modal4') modal4: ElementRef

  isVisible1 = false
  isVisible2= false
  isVisible3 = false
  isVisible4 = false

  zIndex = 1000


  title = 'ng-formly';

  form = new FormGroup({});
  
  model = { email: 'email@gmail.com' };
  
  fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'nz-input',
    templateOptions: {
      type: 'number',
      // label: 'Email address',
      // placeholder: 'Enter email',
      required: true,
      min: 18,
      max: 40,
      // required: true,
    }
  },
];

  submit() {
    console.log('submit')
  }

  onClick (text) {
    switch (text) {
      case 'primary': {
        this.isVisible1 = false;
        setTimeout(() => {
          this.zIndex = this.zIndex + 100;
          this.modal1['container']['overlayElement'].style.zIndex= this.zIndex; 
          this.isVisible1 = true
        },100)
        break;
      }

      case 'default': {
        this.isVisible2 = false;
        setTimeout(() => {
          this.zIndex = this.zIndex + 100;
          this.modal2['container']['overlayElement'].style.zIndex= this.zIndex; 
          this.isVisible2 = true
        },100)
        break;
      }

      case 'dashed': {
        this.isVisible3 = false;
        setTimeout(() => {
          this.zIndex = this.zIndex + 100;
          this.modal3['container']['overlayElement'].style.zIndex= this.zIndex; 
          this.isVisible3 = true
        },100)
        break;
      }

      case 'danger': {
        this.isVisible4 = false;
        setTimeout(() => {
          this.zIndex = this.zIndex + 100;
          this.modal4['container']['overlayElement'].style.zIndex= this.zIndex; 
          this.isVisible4 = true
        },100)
        break;
      }

    }

    // this.modal3['container']['overlayElement'].style.zIndex= 10000

    // this.modal3['container
  }

  toShow (isVisible) {
    isVisible = false
    this.zIndex = this.zIndex + 100
    this.modal1['container']['overlayElement'].style.zIndex= this.zIndex;
  }


  handleCancel1() {
    this.isVisible1 = false
  }
  handleCancel2() {
    this.isVisible2 = false
  }
  handleCancel3() {
    this.isVisible3 = false
  }
  handleCancel4() {
    this.isVisible4 = false
  }


  handleOk1() {
    this.isVisible1 = false
  }
  handleOk2() {
    this.isVisible2 = false
  }
  handleOk3() {
    this.isVisible4 = false
  }
  handleOk4() {
    this.isVisible4 = false
  }
}
