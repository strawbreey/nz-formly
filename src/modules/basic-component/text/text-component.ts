import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-text-component',
    templateUrl: 'text-component.html'
    // changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppTextComponent extends FieldType {

    get Styles () {
        return  Object.assign({}, this.to['styles'])
    }

    onClick ($event) {
        if (this.to.click) {
            this.to.click(this.field, $event)
        }
    }

    ngOnInit(): void {
    }
}
