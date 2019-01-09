import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-title',
  template: `<p *ngIf="model[key]" >{{model[key]}}</p>`
})
export class FormlyFieldTitleComponent extends FieldType{
    ngOnInit () {
        console.log(this.model[this.key])
    }
}