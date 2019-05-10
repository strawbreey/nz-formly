import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-avatar-component',
    templateUrl: './nz-avatar-component.html'
})

export class NzAvatarComponent extends FieldType {

    ngOnInit() {
        // console.log('666')
        console.log('NzAvatarComponent')
    }

}
