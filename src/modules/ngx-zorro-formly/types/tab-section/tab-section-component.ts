import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'formly-tap-section',
  templateUrl: './tab-section-component.html'
})

export class TabSectionComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }

  nzSelectedIndex: number = 0;
  // 做缓存，动态

  ngOnInit () {
    console.log('onOnInit')
  }

  onChange(value) {
    this.nzSelectedIndex = value
  }

  ngOnDestroy() {
    // 组件销毁时, 删除循环的列表
    console.log(this)
    this.field.fieldGroup.map((item, index) => {
      super.remove(index)
    })
  }
}
