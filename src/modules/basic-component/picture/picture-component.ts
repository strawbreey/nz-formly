import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-picture-component',
    templateUrl: 'picture-component.html'
    // changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppPictureComponent extends FieldType {

    get Styles () {
			return {
				'font-style':  this.to['style']['font-style']      ? 'italic' : 'normal',
				'font-weight': this.to['style']['font-weight']     ? 'bold'   : 'normal',
				'font-size':   this.to['style']['font-size']       ? '24px'   : '12px'
			}
    }

    onClick ($event) {
        if (this.to.click) {
            this.to.click(this.field, $event)
        }
    }

    ngOnInit(): void {
    }
}
