import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-breadcrumb-component',
    templateUrl: './breadcrumb-component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NzBreadcrumbComponent extends FieldType {

    ngOnInit(): void {
        // console.log('NzButtonComponent')
    }

    list = [
      {
        label: 'home',
        link: 'https://www.baidu.com'
      },
      {
        label:'Application List',
      },
      {
        label:' An Application'
      }
    ]
}
