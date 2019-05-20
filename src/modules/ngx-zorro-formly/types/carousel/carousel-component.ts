import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-carousel-component',
    templateUrl: './carousel-component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzCarouselComponent extends FieldType {

    onClick ($event) {
        if (this.to.click) {
            this.to.click(this.field, $event)
        }
    }

    ngOnInit(): void {
        // console.log('NzButtonComponent')
    }

    afterChange ($event) {
        console.log($event)
    }

    beforeChange ($event) {
        console.log($event)
    } 
}
