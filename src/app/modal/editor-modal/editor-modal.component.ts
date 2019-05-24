import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ModalService } from '../../../app/services/modal.service'

@Component({
  selector: 'app-editor-modal',
  templateUrl: './editor-modal.component.html',
  styleUrls: ['./editor-modal.component.css']
})
export class EditorModalComponent implements OnInit {

  fields  = null
  constructor(
    private _modalService: ModalService
  ) { }

  ngOnInit() {
    this._modalService.modal$.pipe(filter(item => {
      return item['key'] === 'editor'
    })).subscribe(item => {
      // console.log(item)
      this.fields = item['data']['fields']
      console.log(this.fields)
      this.isModelVisible = true
    })
  }

  isModelVisible = false

  handleCancel () {
    this.isModelVisible = false
  }

  handleOk () {
    this.isModelVisible = false
  }
}
