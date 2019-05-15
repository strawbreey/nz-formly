// angular 核心库
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// @ant-design 核心库
import { NgZorroAntdModule, NZ_ICONS, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';

import { DragDropModule } from '@angular/cdk/drag-drop';

// 富文本编辑器 ngx-quill
import { QuillModule } from 'ngx-quill'  

// 代码编辑器 monaco-editor
import { MonacoEditorModule } from 'ngx-monaco-editor';


// 基于 ngx-zorro 的扩展库
// import { ExtendNgxZorroModule } from '../extend-ngx-zorro/extend-ngx-zorro.module'

// 基于 ngx-zorro 的 formly 库
// basic
import { NzButtonComponent } from './types/button/button-component';
import { NzButtonGroupComponent } from './types/button-group/button-group-component';
import { NzInputComponent } from './types/input/input-component';
import { NzInputGroupComponent } from './types/input-group/input-group-component';
import { NzTextareaComponent } from './types/textarea/textarea-component';
import { NzCheckboxComponent } from './types/checkbox/checkbox-component';
import { NzCheckboxGroupComponent } from './types/checkbox-group/checkbox-group-component';
import { NzRadioComponent } from './types/radio/radio-component';
import { NzRadioGroupComponent } from './types/radio-group/radio-group-component'
import { NzTagComponent } from './types/tag/tag-component';
import { NzTagGroupComponent} from './types/tag-group/tag-group-compoent';

import { NzMenuComponent } from './types/menu/menu-component'

import { FormlyFieldAutocompleteComponent } from './types/autocomplete/autocomplete-component';
import { FormlyFieldCascaderComponent } from './types/cascader/cascader-component';
import { FormlyFieldDatePickerComponent } from './types/date-picker/date-picker-component';
import { FormlyFieldNumberComponent } from './types/number/number-component';

import { FormlyFieldRateComponent } from './types/rate/rate-component';
import { FormlyFieldSelectComponent } from './types/select/select-component';
import { FormlyFieldSliderComponent } from './types/slider/slider-component';
import { FormlyFieldSwitchComponent } from './types/switch/switch-component';
import { FormlyFieldTimePickerComponent } from './types/time-picker/time-picker-component';
import { NzTreeSelectComponent } from './types/tree-select/tree-select-component';
import { FormlyFieldDateRangePickerComponent } from "./types/date-range-picker/date-range-picker-component";
import { FormlyFieldSingleFileComponent } from "./types/single-file/single-file";
import { FormlyFieldTooltipComponent } from "./types/tool-tip/tool-tip-component";
import { TableSectionComponent } from './types/table-section/table-section-component';
import { FormlyFieldTitleComponent } from './types/title/title-component';
import { FormlyFieldRepeatComponent } from './types/repeat/repeat-component'
import { TabSectionComponent } from './types/tab-section/tab-section-component';
import { TabsSectionComponent } from './types/tabs-section/tabs-section-component';
import { FormlyFieldLabelComponent } from './types/label/label-component';
import { FormlyFieldTemplateComponent } from './types/template/template-component';
import { FormlyFieldGridComponent } from './types/grid/grid-component';
import { FormlyFieldTableComponent } from './types/table/table-component';
import { FormlyFieldModelComponent } from './types/model/model-component';
import { NzAvatarComponent } from './types/nz-avatar/nz-avatar-component'

import { NgxQuillComponent } from '../ngx-quill/ngx-quill-component'

import { MonacoEditorComponent } from '../monaco-editor/monaco-editor-component'
import { NzBreadcrumbComponent } from './types/breadcrumb/breadcrumb-component'

// repeat

// wrapper
import { FormlyFieldWrapperComponent } from './wrappers/formly-field-wrapper/formly-field-wrapper-component';

// drag-drop
import { DropListComponent } from '../drag-drop-formly/drop-list/drop-list-component'

// 服务
// import { formlyService } from '../../services/formly.service'

import { from } from 'rxjs';

const antDesignIcons = AllIcons as {
    [key: string]: IconDefinition;
  };
  const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

// 引入继承的多选框

export const ForRootFormlyModule = FormlyModule.forRoot({
    types: [
        {
            name: 'nz-button',
            component: NzButtonComponent
        },
        {
            name: 'nz-button-group',
            component: NzButtonGroupComponent
        },
        {
            name: 'nz-input',
            wrappers: ['field-wrapper'],
            component: NzInputComponent,
        },
        {
            name: 'nz-input-group',
            wrappers: ['field-wrapper'],
            component: NzButtonGroupComponent
        },
        {
            name: 'nz-textarea',
            wrappers: ['field-wrapper'],
            component: NzTextareaComponent
        },
        {
            name: 'nz-checkbox',
            wrappers: ['field-wrapper'],
            component: NzCheckboxComponent
        },
        {
            name: 'nz-checkbox-group',
            wrappers: ['field-wrapper'],
            component: NzCheckboxGroupComponent
        },
        {
            name: 'nz-autocomplete',
            wrappers: ['field-wrapper'],
            component: FormlyFieldAutocompleteComponent
        },
        {
            name: 'nz-cascader',
            wrappers: ['field-wrapper'],
            component: FormlyFieldCascaderComponent
        },

        {
            name: 'date-picker',
            wrappers: ['field-wrapper'],
            component: FormlyFieldDatePickerComponent
        },
        {
            name: 'date-range-picker',
            wrappers: ['field-wrapper'],
            component: FormlyFieldDateRangePickerComponent
        },
        {
            name: 'nz-number',
            wrappers: ['field-wrapper'],
            component: FormlyFieldNumberComponent
        },
        {
            name: 'nz-radio',
            wrappers: ['field-wrapper'],
            component: NzRadioComponent
        },
        {
            name: 'nz-radio-group',
            wrappers: ['field-wrapper'],
            component: NzRadioGroupComponent
        },
        {
            name: 'nz-tag',
            component: NzTagComponent,
        },
        {
            name: 'nz-tag-group',
            component: NzTagGroupComponent
        },
        {
            name: 'rate',
            wrappers: ['field-wrapper'],
            component: FormlyFieldRateComponent
        },
        {
            name: 'nz-select',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSelectComponent
        },
        {
            name: 'slider',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSliderComponent
        },
        {
            name: 'nz-switch',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSwitchComponent
        },
        {
            name: 'time-picker',
            wrappers: ['field-wrapper'],
            component: FormlyFieldTimePickerComponent
        },
        {
            name: 'nz-tree-select',
            wrappers: ['field-wrapper'],
            component: NzTreeSelectComponent
        },
        {
            name: 'single-file',
            wrappers: ['field-wrapper'],
            component: FormlyFieldSingleFileComponent
        }, 
        {
            name: 'tool-tip',
            wrappers: ['field-wrapper'],
            component: FormlyFieldTooltipComponent
        },
        {
            name: 'table-section',
            component: TableSectionComponent
        },
        {
            name: 'nz-title',
            component: FormlyFieldTitleComponent
        }, 
        {
            name: 'tabs-section',
            component: TabsSectionComponent
        },
        {
            name: 'nz-grid',
            component: FormlyFieldGridComponent
        }, 
        {
            name: 'nz-repeat',
            component: FormlyFieldRepeatComponent
        }, 
        {
            name: 'tab-sections',
            component: TabSectionComponent
        }, 
        {
            name: 'nz-label',
            component: FormlyFieldLabelComponent
        },

        {
            name: 'nz-template',
            component: FormlyFieldTemplateComponent
        },
        {
            name: 'nz-table',
            component: FormlyFieldTableComponent
        },
        {
            name: 'nz-model',
            component: FormlyFieldModelComponent
        },
        {
            name: 'mt-drop-list',
            component: DropListComponent
        },
        {
            name: 'ngx-quill',
            component: NgxQuillComponent
        },
        {
            name: 'monaco-editor',
            component: MonacoEditorComponent
        },
        {
            name: 'nz-avatar',
            component: NzAvatarComponent
        },
        {
            name:'nz-menu',
            component: NzMenuComponent
        },
        {
            name: 'nz-breadcrumb',
            component: NzBreadcrumbComponent
        }
    ],
    wrappers: [
        {name: 'field-wrapper', component: FormlyFieldWrapperComponent},
    ]
});

@NgModule({
    providers: [
        { provide: NZ_I18N, useValue: zh_CN },
        { provide: NZ_ICONS, useValue: icons }
    ],
    imports: [
        NgZorroAntdModule, 
        DragDropModule,
        ReactiveFormsModule, 
        FormsModule, 
        CommonModule, 
        QuillModule,
        MonacoEditorModule.forRoot(),
        ForRootFormlyModule,
    ],
    declarations: [
        NzButtonComponent,
        NzButtonGroupComponent,
        NzInputComponent,
        NzInputGroupComponent,
        NzTextareaComponent,
        NzCheckboxComponent,
        NzCheckboxGroupComponent,
        NzRadioComponent,
        NzRadioGroupComponent,
        NzTagComponent,
        NzTagGroupComponent,
        NzBreadcrumbComponent,
        FormlyFieldAutocompleteComponent,
        FormlyFieldCascaderComponent,
        FormlyFieldDatePickerComponent,
        FormlyFieldDateRangePickerComponent,
        FormlyFieldNumberComponent,
        FormlyFieldRateComponent,
        FormlyFieldSelectComponent,
        FormlyFieldSliderComponent,
        FormlyFieldSwitchComponent,
        FormlyFieldTimePickerComponent,
        NzTreeSelectComponent,
        FormlyFieldSingleFileComponent,
        FormlyFieldWrapperComponent,
        FormlyFieldTooltipComponent,
        TableSectionComponent,
        FormlyFieldTitleComponent,
        TabSectionComponent,
        FormlyFieldGridComponent,
        FormlyFieldRepeatComponent,
        FormlyFieldLabelComponent,
        TabsSectionComponent,
        FormlyFieldTemplateComponent,
        FormlyFieldTableComponent,
        FormlyFieldModelComponent,
        DropListComponent,
        NgxQuillComponent,
        MonacoEditorComponent,
        NzAvatarComponent,
        NzMenuComponent
    ],
    exports: [
        NgZorroAntdModule,
        ReactiveFormsModule,
        FormlyModule,
        QuillModule
    ]
})
export class FormlyNgxZorroModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: FormlyNgxZorroModule,
            providers: []
        };
    }
}
