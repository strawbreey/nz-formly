import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-panel-component',
    templateUrl: 'panel-component.html'
    // changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppPanelComponent extends FieldType {

    get Styles () {
			return {
				'font-style': this.to['style'] && this.to['style']['display']       ? 'italic' : 'normal',
				'font-weight': this.to['style'] && this.to['style']['display']    ? 'bold'   : 'normal',
				'font-size':  this.to['style'] && this.to['style']['display']       ? '24px'   : '12px'
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
