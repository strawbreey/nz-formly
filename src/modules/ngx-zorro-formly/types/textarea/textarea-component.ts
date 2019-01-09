import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-field-textarea',
    template: `
        <textarea nz-input [id]="id" 
                  [formControl]="formControl" 
                  [formlyAttributes]="field"
                  [rows]="to['rows']"
                  [nzSize]="to['nzSize']"></textarea>
    `
})
export class FormlyFieldTextareaComponent extends FieldType {
}
