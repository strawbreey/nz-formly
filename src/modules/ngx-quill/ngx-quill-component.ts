import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'ngx-quill-component',
    templateUrl: './ngx-quill-component.html',
})
export class NgxQuillComponent extends FieldType {
    content: any = '4521425sd涨';

    onInput(query: string): void {
        
    }

    setFocus(event) {
        console.log(event)
        event.focus()
    }

    onContentChanged ($event) {
        console.log($event)
    } 
}
