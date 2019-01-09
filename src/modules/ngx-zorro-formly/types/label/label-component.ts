import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-title',
  templateUrl: './label-component.html'
})
export class FormlyFieldLabelComponent extends FieldType{
    ngOnInit () {
        // console.log('FormlyFieldLabelComponent')
    }
}