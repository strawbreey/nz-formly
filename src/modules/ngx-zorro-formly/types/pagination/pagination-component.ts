import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-pagination-component',
    templateUrl: './pagination-component.html'
})

export class NzPaginationComponent extends FieldType {

    ngOnInit() {
        console.log('NzPaginationComponent')
    }

    pageIndexChange () {
        console.log('pageSizepageIndexChangeChange')
    }

    pageSizeChange () {
        console.log('pageSizeChange')
    }

}
