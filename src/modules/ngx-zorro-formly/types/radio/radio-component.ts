import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'nz-radio-component',
    templateUrl: './radio-component.html'
})
export class NzRadioComponent extends FieldType {
    ngOnInit () {
        // console.log('ngOnInit')
        console.log(this)
    }

    blur () {
        // console.log('blur')
    }

    focus () {
        // console.log('focus')
    }

    modelChange () {
        console.log('modelChange')
    }

    // 单选框选择时的回调
    onChange () {
        console.log('onChange')
    }

    // 
    onClick ($event) {
        if ($event.defaultPrevented) {
            console.log('55555')
            /* 事件的默认动作已被取消*/
          }
        $event.preventDefault();
        console.log($event)
    }

    contextmenu ($event) {
        console.log($event)
    }
}
