import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nz-tooltip-basic',
  template: `
        <span *ngIf="to['content']"
            [nzOverlayClassName]="to['nzOverlayClassName'] || ''"
            [nzOverlayStyle]="to['nzOverlayStyle'] || {}"
            [nzPlacement]="to['nzPlacement'] || 'top'"
            nz-tooltip 
            [nzTitle]="model[key] || ''">{{to['content']}}
        </span>
  `
})
export class FormlyFieldTooltipComponent extends FieldType{
    ngOnInit () {
        // console.log('ngOnInit')
        // console.log('555')
    }

    OnChange (event) {
        // console.log(event)
    }
}