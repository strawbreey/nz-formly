import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-input-component',
    templateUrl: './input-component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzInputComponent extends FieldType {
    value: string = ''

    ngOnInit() {
        console.log(this)
    }

    change ($event) {
        let value = $event.target.value
        console.log(value)
        console.log(this)
    }

    blur ($event) {
        console.log('blur')
    }

    focus ($event) {
        console.log('focus')
    } 
}
