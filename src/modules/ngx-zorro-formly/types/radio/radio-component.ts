import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-field-radio-component',
    templateUrl: './radio-component.html'
})
export class FormlyFieldRadioComponent extends FieldType {
    ngOnInit () {
        // console.log('ngOnInit')
    }

    blur () {
        // console.log('blur')
    }

    focus () {
        // console.log('focus')
    }

    modelChange () {
        console.log('modelChange')
    }
}
