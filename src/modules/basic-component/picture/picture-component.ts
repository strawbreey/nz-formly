import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-picture-component',
    templateUrl: 'picture-component.html'
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppPictureComponent extends FieldType {

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
