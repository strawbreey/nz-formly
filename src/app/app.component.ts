import { Component } from '@angular/core';

import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-formly';

  form = new FormGroup({});
  
  model = { email: 'email@gmail.com' };
  
  fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'nz-input',
    templateOptions: {
      type: 'number',
      // label: 'Email address',
      // placeholder: 'Enter email',
      required: true,
      min: 18,
      max: 40,
      // required: true,
    }
  },
];

  submit() {
    console.log('submit')
  }
}
