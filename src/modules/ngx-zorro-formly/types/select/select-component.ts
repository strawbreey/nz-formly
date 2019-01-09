import { Component, OnInit, Input } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { map, debounceTime, switchMap, skipWhile, skip } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { isArray } from 'util';

@Component({
    selector: 'nz-formly-field-select-component',
    templateUrl: './select-component.html'
})

export class FormlyFieldSelectComponent extends FieldType implements OnInit {

    searchValue = '';
    searchChange$ = new BehaviorSubject('');
    isLoading = false;
    option = [];
    optionsCache = {};

    // 判断是否是异步
    isAsyn = false

    // 判断是否是多选
    isTags = false
    isMultiple = false

    constructor(
        private http: HttpClient,
    ) {
        super();
    }

    compareFn = (o1: any, o2: any) => {
        return o1 && o2 ? o1.value === o2.value : o1 === o2;
    }

    OnSearch (value) {
        console.log(value)
        // 判断是否是异步搜索
        if (this.isAsyn && value) {
            this.searchValue = value
            // 判断是搜索关键字是否有缓存
            if (this.optionsCache[value]) {
                this.isLoading = false
                this.to['options'] = this.optionsCache[value]
            } else {
                this.isLoading = true
                this.searchChange$.next(value)
            }
        }
    }

    ngOnInit() {
        this.isAsyn = this.to['callback'] ? true : false
        this.isTags = this.to['nzMode'] === 'tags' ? true : false
        this.isMultiple =  this.to['nzMode'] === 'multiple' ? true : false

        // 如果是异步，则搜索
        if (this.isAsyn) {
            // 当前是异步搜索
            if (this.model[this.key]) {
                if (isArray(this.model[this.key])) {
                    // 如果不是单选
                    this.to['options'] = this.model[this.key]
                } else {
                    // 如果不是多选
                    let list = []
                    list.push(this.model[this.key])
                    this.to['options'] = list
                }
            }
            this.getOptionsBySearchUrl()
        } else {
            // 当前不是异步搜索
            // console.log('222')
        }

        // nzValue 默认值是id
        // if (!this.to['nzValue'] && typeof(this.to['nzValue'])!="undefined" && this.to['nzValue']!=0) { 
        //     this.to['nzValue'] = 'id'
        // }　else {

        // }
        // this.searchChange$.next('')
    }

    getOptionsBySearchUrl () {
        const optionsList$ = this.searchChange$.asObservable().pipe(skip(1)).pipe(debounceTime(100)).pipe(switchMap(this.to.callback)).pipe(map((list: any) => {
            return list.map(item => item);
          }));
          
        optionsList$.subscribe(list => {
            console.log(list)
            if (list) {
                this.to['options'] = list
                this.optionsCache[this.searchValue] = this.to['options']
            }
            this.isLoading = false;
        });
    }

    onOpenChange ($event) {
        if (!this.optionsCache['0']) {
            this.searchValue = '0'
            this.searchChange$.next('0')
        }

    }
}
