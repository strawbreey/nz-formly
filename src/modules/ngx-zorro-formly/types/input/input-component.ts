import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-field-input',
    templateUrl: './input-component.html'

})
export class FormlyFieldInputComponent extends FieldType {
    ngOnInit() {
        // console.log(this)
    }
}
