import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragModalService } from './drag-modal.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-drag-modal',
  templateUrl: './drag-modal.component.html',
  host: {'class': 'mat-card'},
  styles: [
    `
      .red {
        color: {{this.red}}
      }

      .red {
        color: green
      }
    `
  ]
})
export class DragModalComponent implements OnInit {

  isVisible = true
  red = 'red'

  nzZIndex = 1000

  constructor(private route: ActivatedRoute, private dragService: DragModalService, private http: HttpClient, ) {

  }

  ngOnInit() {
    this.dragService.bulletlin$.subscribe(item => {
      this.isVisible = true
      console.log(this)
    })
  }

  onCancel() {
    this.isVisible = false
  }

  handleCancel () {
    this.isVisible = false
    console.log('handleCancel')
  }

  handleOk () {
    this.isVisible = false
    console.log('handleOk')
  }


}
