import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-template',
  template: `
    <div [innerHtml]="to['template'] || ''"></div>
  `,
})
export class FormlyFieldTemplateComponent extends FieldType {

}
