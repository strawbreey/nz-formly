import { Component, Input } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'nz-grid-section',
  templateUrl: './grid-component.html',
  host: {
      'nz-row': 'nz-row'
  }
})

export class FormlyFieldGridComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  ngOnInit () {
      console.log('formly-grid-section')
      console.log(this)
  }
}
