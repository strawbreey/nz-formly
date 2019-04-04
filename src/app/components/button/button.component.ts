import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, Field } from '@ngx-formly/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  buttonForm = new FormGroup({});
  buttonModel: any = {};
  buttonOptions: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  buttonFields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'd-flex mb-2',
      fieldGroup: [
        {
          key: 'primary',
          type: 'nz-button',
          className: 'px-2',
          templateOptions: {
            nzType: 'primary',
            text: 'primary'
          },
        },
        {
          key: 'default',
          className: 'px-2',
          type: 'nz-button',
          templateOptions: {
            nzType: 'default',
            text: 'default'
          },
        },
        {
          key: 'dashed',
          className: 'px-2',
          type: 'nz-button',
          templateOptions: {
            nzType: 'dashed',
            text: 'dashed'
          },
        },
        {
          key: 'danger',
          className: 'px-2',
          type: 'nz-button',
          templateOptions: {
            nzType: 'danger',
            text: 'danger'
          },
        }
      ]
    },
    {
      fieldGroupClassName: 'd-flex flex-column',
      fieldGroup: [
        {
          key: 'primary',
          type: 'nz-button',
          className: 'm-2',
          templateOptions: {
            nzType: 'primary',
            nzBlock: true,
            text: 'primary',
          },
        },
        {
          key: 'default',
          className: 'p-2',
          type: 'nz-button',
          templateOptions: {
            nzType: 'default',
            nzBlock: true,
            text: 'default'
          },
        },
        {
          key: 'dashed',
          className: 'p-2',
          type: 'nz-button',
          templateOptions: {
            nzType: 'dashed',
            nzBlock: true,
            text: 'dashed'
          },
        },
        {
          key: 'danger',
          className: 'p-2',
          type: 'nz-button',
          templateOptions: {
            nzType: 'danger',
            nzBlock: true,
            text: 'danger'
          },
        }
      ]
    },
    {
      fieldGroupClassName: 'd-flex',
      fieldGroup: [
        {
          key: 'large',
          type: 'nz-button',
          className: 'm-2',
          templateOptions: {
            nzType: 'primary',
            text: 'large',
            nzSize: 'large',
          },
        },
        {
          key: 'default',
          className: 'p-2',
          type: 'nz-button',
          templateOptions: {
            nzType: 'primary',
            nzBlock: true,
            text: 'default',
            nzSize: 'default'
          },
        },
        {
          key: 'small',
          className: 'p-2',
          type: 'nz-button',
          templateOptions: {
            nzType: 'primary',
            nzBlock: true,
            text: 'small',
            nzSize: 'small'
          },
        },
      ]
    },
    {
      fieldGroupClassName: 'd-flex bg-dark p-2 mb-2',
      fieldGroup: [
        {
          key: 'primary',
          type: 'nz-button',
          className: 'px-2',
          templateOptions: {
            nzType: 'primary',
            text: 'primary',
            nzGhost: true,
          },
        },
        {
          key: 'default',
          className: 'px-2',
          type: 'nz-button',
          templateOptions: {
            nzType: 'default',
            text: 'default',
            nzGhost: true,
          },
        },
        {
          key: 'dashed',
          className: 'px-2',
          type: 'nz-button',
          templateOptions: {
            nzType: 'dashed',
            text: 'dashed',
            nzGhost: true,
          },
        },
        {
          key: 'danger',
          className: 'px-2',
          type: 'nz-button',
          templateOptions: {
            nzType: 'danger',
            text: 'danger',
            nzGhost: true,
          },
        }
      ]
    },
    {
      fieldGroupClassName: 'd-flex p-2 mb-2',
      fieldGroup: [
        {
          key: 'primary',
          type: 'nz-button',
          className: 'px-2',
          templateOptions: {
            nzType: 'primary',
            text: 'Primary1',
            click: (field: FormlyFieldConfig, event?: any) => {
              if (field.templateOptions.nzType === 'primary') {
                field.templateOptions.nzType = 'default'
              } else {
                field.templateOptions.nzType = 'primary'
              }
            }
          },
        },
        {
          key: 'primary',
          className: 'px-2',
          type: 'nz-button',
          templateOptions: {
            nzLoading: false,            
            nzType: 'primary',
            nzIcon: 'poweroff',
            text: 'Primary',
            click: (field: FormlyFieldConfig, event?: any) => {
              field.templateOptions.nzLoading = true
            }
          },
        },
        {
          key: 'circle',
          className: 'px-2',
          type: 'nz-button',
          templateOptions: {
            nzType: 'primary',
            nzLoading: false,
            nzShape: 'circle',
            click: (field: FormlyFieldConfig, event?: any) => {
              field.templateOptions.nzLoading = true
            }
          },
        },
        {
          key: 'circle',
          className: 'px-2',
          type: 'nz-button',
          templateOptions: {
            nzLoading: true,
            nzShape: 'circle',
          },
        },
        {
          key: 'circle',
          className: 'px-2',
          type: 'nz-button',
          templateOptions: {
            nzShape: 'circle',
            nzIcon: 'search',
          },
        },
        {
          key: 'circle',
          className: 'px-2',
          type: 'nz-button-group',
          templateOptions: {
            options: [{
              nzIcon: 'search',
              click: (field, index, $event ) => {
                console.log(field)
                console.log($event)
              }
            },
            {
              nzIcon: 'search',
              click: (field, $event) => {
                field.templateOptions.options[$event.index].nzType = 'primary'
                field.templateOptions.options[$event.index].text = 'primary'
              }
            }],
          },
        },
      ]
    },
    {
      fieldGroupClassName: 'd-flex p-2 mb-2',
      fieldGroup: [
        {
          key: 'nz-button-group',
          className: 'px-2',
          type: 'nz-button-group',
          templateOptions: {
            options: [{
              nzType: 'primary',
              disabled: true,
              text: 'L'
            }, {
              nzType: 'default',
              disabled: true,
              text: 'M'
            }, {
              nzType: 'default',
              text: 'M'
            }, {
              nzType: 'dashed',
              disabled: true,
              text: 'R'
            }]
          },
        },
        {
          key: 'nz-button-group',
          className: 'px-2',
          type: 'nz-button-group',
          templateOptions: {
            options: [{
              nzType: 'primary',
              nzIcon: 'cloud'
            }, {
              nzType: 'primary',
              nzIcon: 'cloud-download'
            }]
          },
        },
      ]
    },
  ]

  ngOnInit() {

  }

}
