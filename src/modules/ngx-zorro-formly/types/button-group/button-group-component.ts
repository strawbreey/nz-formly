import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { BehaviorSubject, Observable, of  } from  'rxjs'

@Component({
    selector: 'nz-button-group-component',
    templateUrl: './button-group-component.html'
})
export class NzButtonGroupComponent extends FieldType {

    onClick ($event, index) {
        if (this.to.options && !(this.to.options instanceof Observable)) {
            this.to.options.map((item, i) => {
                if (index === i && item.click) {
                    $event.index = i
                    item.click(this.field, $event)
                }
            })
        }
    }

    ngOnInit(): void {
        // console.log('NzButtonGroupComponent')
    }
}
