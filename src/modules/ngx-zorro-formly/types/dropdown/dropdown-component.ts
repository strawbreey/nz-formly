import { Component, OnChanges, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { filter, map } from 'rxjs/operators';
import { pipe, from, Observable } from 'rxjs';

@Component({
    selector: 'nz-dropdown-component',
    templateUrl: './dropdown-component.html'
})

export class NzDropdownComponent extends FieldType {

    onVisibleChange ($event) {
        console.log($event)
    }

    ngOnInit() {

    }
}
