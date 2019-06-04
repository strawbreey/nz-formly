import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'four-dimensional-component',
    templateUrl: 'four-dimensional-component.html'
    // changeDetection: ChangeDetectionStrategy.OnPushs

})
export class FourDimensionalComponent extends FieldType {


    ngOnInit(): void {
        // console.log(this.Styles)
    }
}
