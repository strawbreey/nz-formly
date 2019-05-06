import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-radio-group-component',
    templateUrl: './radio-group-component.html'
})

export class NzRadioGroupComponent extends FieldType {

    ngOnInit() {
        console.log('666')
    }

}
