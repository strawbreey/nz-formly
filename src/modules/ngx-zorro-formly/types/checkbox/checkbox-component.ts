import { Component, OnChanges, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { filter, map } from 'rxjs/operators';
import { pipe, from } from 'rxjs';

@Component({
    selector: 'nz-checkbox-component',
    templateUrl: './checkbox-component.html'
})

export class NzCheckboxComponent extends FieldType implements OnChanges {


    get type () {
        return 'boolean'
    }

    ngOnInit() {

    }

    onChange (event) {
        if (this.to.change) {
            this.to.change(this.field, event)
        }
    }
}
