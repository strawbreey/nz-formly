import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-textarea-component',
    templateUrl: './textarea-component.html',
})

export class NzTextareaComponent extends FieldType {
    ngOnInit() {
        // console.log('NzTextareaComponent')
    }
}
