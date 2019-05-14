import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nz-tag-group-component',
  templateUrl: './tag-group-component.html'
})

export class NzTagGroupComponent extends FieldType {

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
