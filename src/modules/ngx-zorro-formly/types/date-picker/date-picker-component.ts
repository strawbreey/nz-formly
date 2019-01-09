import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { DatePipe } from '@angular/common';


@Component({
    selector: 'nz-formly-field-date-picker-component',
    templateUrl: './date-picker-component.html'
})
export class FormlyFieldDatePickerComponent extends FieldType {
    constructor(private datePipe: DatePipe) {
        super();
    }
    onChange(date) {
        let nzFormat = this.to['nzFormat'] ? this.to['nzFormat'] : 'yyyy-MM-dd HH:mm:ss'
        this.model[this.key] = this.datePipe.transform(date, nzFormat);
        this.formControl.setValue(this.model[this.key]);
    }
    onOk (date) {
        // console.log(date)
    }

    modelChange (date) {
        // console.log()
    }

    openChange () {
        console.log()
    }
}
