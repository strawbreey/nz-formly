import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'nz-form-wrapper',
    templateUrl: './formly-field-wrapper-component.html',
    styleUrls: ['./formly-field-wrapper-component.css'],
    styles: [`
      host: {
        '[class.ant-form-horizontal]': "to['nzLayout'] === 'horizontal'",
        '[class.ant-form-inline]': "to['nzLayout'] === 'inline'",
        '[class.ant-form-vertical]': "to['nzLayout'] === 'vertical'",
      }
    `]
})

export class FormlyFieldWrapperComponent extends FieldWrapper {
    @ViewChild('fieldComponent', {read: ViewContainerRef})
    fieldComponent: ViewContainerRef;

    get nzSize () {
      return this.to['nzSize'] || 'normal'
    }

    get formItem () {
      let formItem = 'form-item'
      if (this.to['nzSize']) {
        switch  (this.to['nzSize']) {
          case 'small': formItem = 'form-item-sm'; break;
          case 'large': formItem = 'form-item-lg'; break;
          case 'normal': formItem = 'form-item'; break;
        }
      }
      return formItem
    }

    get nzLayout () {
        return this.to['nzLayout'] || 'horizontal'
    }

    get isHorizontal(): boolean {
        return ((this.to['nzLayout'] || 'horizontal' ) === 'horizontal') && !!this.to['label']
    }

    ngOnInit() {
        // console.log('nzLayout')
        // console.log(this.nzLayout)
    }
}
