import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-formly-field-tree-select-component',
    templateUrl: './tree-select-component.html'
})
export class FormlyFieldTreeSelectComponent extends FieldType {

    ngOnInit(): void {
        console.log('ngOnInit')
    }

    onExpandChange($event: string): void {
        if (this.to['nzExpandChange']) {
            // 点击展开树节点图标调用
            console.log(this.to['nzExpandChange'])
        }
    }

}
