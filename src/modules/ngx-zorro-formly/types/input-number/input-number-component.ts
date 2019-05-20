import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-input-number-component',
    templateUrl: './input-number-component.html'

})
export class NzInputNumberComponent extends FieldType {
    value: string = ''
    Infinity = Infinity
    ngOnInit() {
        // console.log(this)
    }

    change ($event) {
        let value = $event.target.value
        console.log(value)
        console.log(this)
        if (this.model && this.key) {
            this.model[this.key] = value
            this.formControl.setValue(value)
        }
    }

    blur ($event) {
        console.log('blur')
    }

    focus ($event) {
        console.log('focus')
    } 
}
