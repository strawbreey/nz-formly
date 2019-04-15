import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'nz-form-wrapper',
    templateUrl: './formly-field-wrapper-component.html',
    styles: [`
    host: {
        '[class.ant-form-horizontal]': "to['nzLayout'] === 'horizontal'",
        '[class.ant-form-inline]': "to['nzLayout'] === 'inline'",
      }
    :host {
        display: block;
    }
      `
    
]
})

export class FormlyFieldWrapperComponent extends FieldWrapper {
    @ViewChild('fieldComponent', {read: ViewContainerRef})
    fieldComponent: ViewContainerRef;

    get nzLayout () {
        return this.to['nzLayout']
    }

    ngOnInit() {
        // console.log('nzLayout')
        // console.log(this.nzLayout)
    }
}
