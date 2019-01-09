import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'formly-tap-section',
  templateUrl: './tabs-section-component.html'
})

export class TabsSectionComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  nzSelectedIndex

  ngOnInit () {
    console.log(this)
  }

  onChange ($event) {
    console.log($event)
  }
}
