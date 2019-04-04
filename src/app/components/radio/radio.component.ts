import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, Field } from '@ngx-formly/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  constructor() { }

  
  radioForm = new FormGroup({});
  radioModel: any = {};
  radioOptions: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  radioFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'd-flex mb-2',
      fieldGroup: [
        {
          key: 'radio1',
          type: 'nz-radio',
          className: 'px-2',
          templateOptions: {
            text: 'primary',
          },
        }
      ]
    }
  ]

  ngOnInit() {
  }



}
