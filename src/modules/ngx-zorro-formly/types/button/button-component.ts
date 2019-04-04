import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-button-component',
    templateUrl: './button-component.html',
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class NzButtonComponent extends FieldType {

    onClick ($event) {
        if (this.to.click) {
            this.to.click(this.field, $event)
        }
    }

    ngOnInit(): void {
        // console.log('NzButtonComponent')
    }
}
