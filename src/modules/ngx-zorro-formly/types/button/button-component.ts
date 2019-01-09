import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

import { BehaviorSubject, Observable, of  } from  'rxjs'
import { debounceTime, switchMap, map, tap, filter } from 'rxjs/operators';



@Component({
    selector: 'nz-button-component',
    templateUrl: './button-component.html'
})
export class NzButtonComponent extends FieldType {

    // 定义一个点击的观察事件
    searchChange$ = new BehaviorSubject([]);

    onClick ($event) {
        this.searchChange$.next([this.field, this.model]);
    }

    ngOnInit(): void {
        if (this.to.onClick) {
            this.searchChange$.pipe(debounceTime(100), filter(val => !!val)).pipe(switchMap(this.to.onClick)).subscribe(res => {
                // console.log(res)
            });
        }
    }
}
