import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-wrapper-form-field',
    templateUrl: './formly-field-wrapper-component.html',
    styles: [`
    `]
})

export class FormlyFieldWrapperComponent extends FieldWrapper {
    @ViewChild('fieldComponent', {read: ViewContainerRef})
    fieldComponent: ViewContainerRef;

    ngOnInit() {
        // console.log(this)
    }


}
