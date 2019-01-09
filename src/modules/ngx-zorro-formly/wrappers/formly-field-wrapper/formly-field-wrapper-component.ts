import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-wrapper-form-field',
    templateUrl: './formly-field-wrapper-component.html',
    styles: [`
    :host nz-form-item.inline {
        display: inline-block;
        margin-right: 16px;
        margin-bottom: 0;
        min-width: 217px;
    }
    :host nz-form-item.inline::ng-deep .ant-form-item-label {
        display: inline-block;
        vertical-align: top;
    }

    :host nz-form-item.inline::ng-deep .ant-form-item-label label {
        margin-bottom: 0;
    }

    :host nz-form-item.inline::ng-deep .ant-form-item-control-wrapper {
        display: inline-block;
        vertical-align: top;
    }

    :host nz-form-item.vertical {
        padding-bottom: 8px;
    }
    :host nz-form-item.vertical::ng-deep .ant-form-item-label{
        padding: 0 0 8px;
        margin: 0;
        display: block;
        text-align: left;
        line-height: 1.5;
    }
    :host nz-form-item.vertical::ng-deep .ant-form-item-control-wrapper {
        display: flex;
    }

    :host nz-form-item.fixedwidth {
        padding-bottom: 8px;
    }
    :host nz-form-item.fixedwidth::ng-deep .ant-form-item-label{
        width: 120px;
        padding-bottom: 8px;
    }
    :host nz-form-item.fixedwidth::ng-deep .ant-form-item-control-wrapper {
        flex: 1;
        width: calc(100% - 120px);
    }

    :host ::ng-deep .text-danger.invalid-feedback {
        display: none !important;
    }
    `]
})

export class FormlyFieldWrapperComponent extends FieldWrapper {
    @ViewChild('fieldComponent', {read: ViewContainerRef})
    fieldComponent: ViewContainerRef;

    column 
    labelSpan

    ngOnInit() {
        // console.log(this)
        // 判断表单域是否有栅格
        if (this.field.className) {
            if (this.field.className.includes('ant-col-')) {
                let arr = this.field.className.split(" ")
                let className = arr.find(res => res.includes("ant-col-"))
                let col = parseInt(className.split("-").pop())
                this.labelSpan = 72 / col
            } 
        }
    }

    // 判断是否是horizontal
    get isHorizontal(): boolean {
        switch (this.to.nzLayout) {
            case 'horizontal':
                return true
            case 'vertical':
                return false
            case 'inline':
                return false
            default:
                return true
        }
    }
}
