import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-input-group-component',
    templateUrl: './input-group-component.html'

})
export class NzInputGroupComponent extends FieldType {
    get type() {
        return this.to.type || 'text';
    }

    ngOnInit() {
        // console.log(this)
    }
}
