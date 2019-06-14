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

  constructor(
    private dragService: DragModalService
  ) {}
}
