import { Component, OnChanges, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { filter, map } from 'rxjs/operators';
import { pipe, from, Observable } from 'rxjs';

@Component({
    selector: 'nz-checkbox-group-component',
    templateUrl: './checkbox-group-component.html'
})

export class NzCheckboxGroupComponent extends FieldType {

    checkOptions

    ngOnInit() {
        this.getCheckboxOptions()
    }

    onChange ($event) {
        if (this.to.options) {
           let value = $event.filter(item => item.checked).map(item => item.value)
           this.field.formControl.patchValue(value)
        } else {
            this.field.formControl.patchValue($event)
        }

        if (this.to.change) {
            this.to.change(this.field, event)
        }
    }

    getCheckboxOptions () {
        if (this.to.options && !(this.to.options instanceof Observable)) {
            let value = this.field.formControl.value
            if (value) {
               this.checkOptions = this.to.options.map(option => {
                    return {
                        ...option,
                        checked: value.some(item => item === option.value)
                    } 
               })
            }
        } else {
            this.checkOptions = this.field.formControl.value
        }
    }
}
