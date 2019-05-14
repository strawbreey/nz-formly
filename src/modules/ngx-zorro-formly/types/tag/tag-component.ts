import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nz-tag-component',
  templateUrl: './tag-component.html'
})

export class NzTagComponent extends FieldType {

  ngOnInit () {
    console.log(this)
  }

  checkedChange ($event) {
      console.log($event)
  }

  afterClose ($event) {
      console.log($event)
  }

  onClose ($event) {

    }
}
