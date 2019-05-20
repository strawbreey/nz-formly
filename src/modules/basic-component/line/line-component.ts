import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-line-component',
    templateUrl: 'line-component.html'
    // changeDetection: ChangeDetectionStrategy.OnPush

})
export class AppLineComponent extends FieldType {

    // width: 80px;
    // height: 10px;
    // line-height: 10px;
    // opacity: 1;
    // transform: rotate(0deg);
    // font-size: 12px;
    // background-color: transparent;

    get Styles () {
			return {
                'display': this.to['style'] && this.to['style']['display']            ?     this.to['style']['display'] : 'inline-block',
				'width':  this.to['style'] && this.to['style']['width']               ?     this.to['style']['width'] : '80px',
				'opacity':  this.to['style'] && this.to['style']['opacity']           ?     this.to['style']['opacity'] : '1',
				'font-style':  this.to['style'] && this.to['style']['fontStyle']      ?     this.to['style']['fontStyle'] : 'normal',
				'font-weight': this.to['style'] && this.to['style']['fontWeight']     ?     this.to['style']['fontWeight']   : 'normal',
                'font-size':   this.to['style'] && this.to['style']['fontSize']       ?     this.to['style']['fontSize']   : '12px',
                'border-bottom': this.to['style'] && this.to['style']['borderBottom'] ?     this.to['style']['borderBottom']  : '1px solid #ccc'
			}
    }

    onClick ($event) {
        if (this.to.click) {
            this.to.click(this.field, $event)
        }
    }

    ngOnInit(): void {
        console.log(this.Styles)
    }
}
