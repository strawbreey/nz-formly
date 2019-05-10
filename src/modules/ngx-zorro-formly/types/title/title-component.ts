import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'title-component',
  templateUrl: './title-component.html',
})
export class FormlyFieldTitleComponent extends FieldType{
    // label  
    ngOnInit () {
        // console.log(this.model[this.key])

        // 'font-style': this.to['fontStyle'] || null,
        // 'font-weight': this.to['fontWeight'] || null,
        // 'font-size': this.to['font-size'] || null,
        // 'opacity': this.to['opacity'] || null,
        // 'border': this.to['border'] || null,
        // 'border-radius': this.to['border-radius'] || null
        console.log(this.to)
    }

    ngStyle = {

    }
}