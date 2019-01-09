import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-field-time-picker-component',
    templateUrl: './time-picker-component.html'
})
export class FormlyFieldTimePickerComponent extends FieldType {
    ngOnInit () {
        // console.log('ngOnInit')
    }

    modelChange () {
        // console.log('modelChange')
    }

    openChange () {
        // console.log('openChange')
    }
}
