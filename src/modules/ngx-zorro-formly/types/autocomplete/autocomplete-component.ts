import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-field-autocomplete-component',
    templateUrl: './autocomplete-component.html'
})
export class FormlyFieldAutocompleteComponent extends FieldType {
    data: any = [];

    onInput(query: string): void {
        if (Array.isArray(this.to.options)) {
            this.data = this.to.options.filter((item) => {
                return item.value.indexOf(query) > -1;
            });
        } else {
            this.data = [];
        }
    }
}
