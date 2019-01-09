import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'nz-formly-field-single-file-component',
    templateUrl: './single-file.component.html',
})
export class FormlyFieldSingleFileComponent extends FieldType implements OnInit {
    constructor(
        private http: HttpClient
    ) {
        super()
    }

    private _file;
    get file() {
        if (!this._file) {
            if (!this.model[this.key]) {
                this._file = null;
            } else {
                this.loadFile();
            }
        }
        return this._file;
    }

    loadFile() {
        this._file = {
            file_name: 'loading'
        };
        this.http.get('web/file/detail?id=' + this.model[this.key]).subscribe(result => {
            if (result['ret_code'] === 0) {
                this._file = result['data'];
            } else {
                this._file = {
                    file_name: 'file error'
                };
            }
        });
    }

    ngOnInit() {
        this.updateForm();
    }

    onChange($event) {
        if ($event.type === 'success') {
            this.model[this.key] = $event.file.response['data'];
            this.loadFile();
            this.updateForm();
        }
    }

    updateForm() {
        if (this.form.get(this.key)) {
            this.form.get(this.key).setValue(this.model[this.key]);
        }
    }

}
