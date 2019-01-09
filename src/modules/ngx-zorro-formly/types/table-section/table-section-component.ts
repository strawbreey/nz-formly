import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  templateUrl: './table-section-component.html',
  styles: [`
  :host ::ng-deep .ant-table-wrapper{
    // border: 1px solid #e8e8e8;
  }
  
  :host ::ng-deep .ant-table-row{
    border: 1px solid #e8e8e8;
  }

  :host ::ng-deep .ant-table-thead > tr > th, .ant-table-tbody > tr > td {
    padding: 6px 6px;
    word-break: break-word;
    -ms-word-break: break-all;
  }
  `]
})

export class TableSectionComponent extends FieldArrayType {

  @ViewChild('TitleTemplate') titleTemplate: TemplateRef<any>;

  @ViewChild('FooterTemplate') footerTemplate: TemplateRef<any>;

  nzTitle

  nzFooter

  constructor(
    builder: FormlyFormBuilder,
  ) {
    super(builder);
  }

  dataSet = [
    {
      key    : '1',
      name   : 'John Brown',
      age    : 32,
      address: 'New York No. 1 Lake Park'
    }
  ]

  ngOnInit () {
      // 设置标题
      if (this.to['nzTitleTemplate']) {
        this.nzTitle = this.titleTemplate
      } else {
        this.nzTitle = this.to['nzTitle']
      }

      // 表格尾部
      if (this.to['nzFooterTemplate']) {
        this.nzFooter = this.footerTemplate
      } else {
        this.nzFooter = this.to['nzFooter']
      }
  }

  updateValue (item, index) {
    switch (item.type) {
      case 'copy': 
        this.copy(item, index);
        // console.log(item)
        break;
      case 'remove': 
        super.remove(index);
        break;
      case 'add':
        super.add();
        break;
      default: 
        console.log('default');      
      break;
    }
  }

  copy (item, index) {
    super.add(index, {...this.model[index], id: null});
  }

  ngOnDestroy() {
    // console.log('table ngOnDestroy')
    // console.log(this)
    // this.field.fieldGroup.map((item, index) => {
    //   super.remove(index)
    // })
  }
}
