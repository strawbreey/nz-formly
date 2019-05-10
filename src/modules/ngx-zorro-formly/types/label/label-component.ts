import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'label-component',
  templateUrl: './label-component.html'
})
export class FormlyFieldLabelComponent extends FieldType{
    ngOnInit () {
        // console.log('FormlyFieldLabelComponent')
    }
}