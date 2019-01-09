import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-table-component',
  templateUrl: './table-component.html',
})

export class FormlyFieldTableComponent extends FieldArrayType {

  constructor(
    builder: FormlyFormBuilder,
  ) {
    super(builder);
  }

  ngOnInit () {
    console.log('table component')
    console.log(this)
  }

  ngOnDestroy() {
    this.field.fieldGroup.map((item, index) => {
      super.remove(index)
    })
  }
}



