import { Component, OnChanges, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { filter, map } from 'rxjs/operators';
import { pipe, from } from 'rxjs';

@Component({
    selector: 'nz-formly-field-checkbox-component',
    templateUrl: './checkbox-component.html'
})


// checkbox的用法
// 1. 绑定一个boolean对方, 返回一个boolean值
// 2. 绑定一个对象, 返回一个对象{id: xx, value: xx, label: xx}
// 3. 绑定一个对象数组， 返回数组
// 4. 绑定一个对象数组， 返回对象数组

export class FormlyFieldCheckboxComponent extends FieldType implements OnChanges {

    ngOnInit() {
        if (this.to.type === 'checkbox-group') {
            let options : any = this.to.options
            for(let item of options){
                if (this.model[this.key]) {
                    for(let option of this.model[this.key]) {
                        if (item.value === option.value) {
                            Object.assign(item, option)
                        }
                    }
                }
            }
        } else if (this.to.type === 'basic-checkbox') {
            this.to.options = this.model[this.key]
            this.formControl.patchValue(this.to.options);
        }
        // console.log(this)
    }

    OnChange (event, item) {

        switch(this.to.type)
        {
            case 'checkbox-group':
                this.model[this.key]=event.filter(item => {
                    return item.checked === true
                })
                break;

            case 'basic-checkbox':
                this.model[this.key] = this.to.options
                break;

            case 'isBoolean':
                // 默认响应式表单
                break;

            case 'isObject':
                // 模板驱动表单
                this.model[this.key].value = event
                break;

            case 'isArrayObject': break;

            case 'isArray': break;

            default: 
        }
    }
}
