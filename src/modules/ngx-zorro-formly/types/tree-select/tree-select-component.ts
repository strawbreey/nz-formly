import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-tree-select-component',
    templateUrl: './tree-select-component.html'
})
export class NzTreeSelectComponent extends FieldType {

    ngOnInit(): void {
        console.log('ngOnInit')
    }

    // 展开
    onExpandChange($event: string): void {
        if (this.to['nzExpandChange']) {
            console.log(this.to['nzExpandChange'])
        }
    }

}
