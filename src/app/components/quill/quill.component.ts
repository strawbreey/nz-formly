import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, Field } from '@ngx-formly/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.css']
})
export class QuillComponent implements OnInit {

  constructor() { }

  quillForm = new FormGroup({});
  quillModel: any = {};
  quillOptions: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  quillFields: FormlyFieldConfig[] = [{
    key: 'text',
    type: 'ngx-quill',
    templateOptions: {
      label: '文本框',
    }
  }]

  ngOnInit() {
    console.log('quill')
  }

}


