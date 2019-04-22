import {Component, EventEmitter, OnInit, Output, ViewChild, Input, ElementRef} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragModalService } from './drag-modal.service';
import { HttpClient } from '@angular/common/http';



let red = 'green'


@Component({
  selector: 'app-drag-modal',
  templateUrl: './drag-modal.component.html',
  host: {'class': 'mat-card'},
  styleUrls: ['./drag-modal.component.css']
})


export class DragModalComponent implements OnInit {

  isVisible = true

  nzZIndex = 1000

  constructor(private route: ActivatedRoute, private dragService: DragModalService, private http: HttpClient,private el:ElementRef ) {

  }

  @Input() hero;

  ngOnInit() {
    red = 'red'
    console.log(this.el);
    this.dragService.bulletlin$.subscribe(item => {
      this.isVisible = true
      // red = 'red'
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
