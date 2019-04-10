import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'mt-drop-list-group',
    templateUrl: './drop-list-group-component.html',
    template: `
        <formly-field *ngFor="let f of field.fieldGroup" [field]="f"></formly-field>
        <ng-content></ng-content>
    `,
    // changeDetection: ChangeDetectionStrategy.OnPush

})
export class DropListGroupComponent extends FieldType {
    defaultOptions = {
        defaultValue: {},
    };
    ngOnInit(): void {
        // console.log('NzButtonComponent')
    }
}
