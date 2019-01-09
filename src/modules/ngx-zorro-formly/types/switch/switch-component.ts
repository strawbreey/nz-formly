import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-field-switch-component',
    templateUrl: './switch-component.html'
})
export class FormlyFieldSwitchComponent extends FieldType {
    ngOnInit () {
        // console.log('ngOnInit')
    }
    
    modelChange () {
        console.log('modelChange')
    }
}
