import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'app-text-component',
    templateUrl: 'text-component.html',
    styles: [
        `
            p {
                margin-bottom: 0;
            }
        `
    ]
})
export class AppTextComponent extends FieldType {

    isEdit: boolean = false
    text: string = '这是一个可编辑的段落。'

    ngOnInit(): void {
        console.log('ngOnInit')
    }

    ngAfterViewInit(): void {
        this.isEdit = true
        console.log('ngAfterViewInit')
    }

    blur ($event) {
        this.isEdit = true
        console.log($event)
        this.text = $event.target.innerText

    }

    focus ($event) {  
        this.isEdit = true  
        console.log($event)
    }

    onClick ($event) {
        console.log('click')
        console.log($event)

        this.isEdit = true
    }


}
