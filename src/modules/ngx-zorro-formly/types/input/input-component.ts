import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-input-component',
    templateUrl: './input-component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzInputComponent extends FieldType {
    get type() {
        return this.to.type || 'text';
    }

    ngOnInit() {
        console.log(this)
    }
}
