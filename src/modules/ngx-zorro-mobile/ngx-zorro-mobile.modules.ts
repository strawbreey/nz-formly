// angular 核心库
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NzmButtonComponent } from './types/button/button.component';


// 引入继承的多选框
export const ForRootFormlyModule = FormlyModule.forRoot({
    types: [
        {
            name: 'nzm-button',
            component: NzmButtonComponent
        },
        // {
        //     name: 'nzm-drawer',
        //     component: NzButtonComponent
        // },
        // {
        //     name: 'nzm-menu',
        //     component: NzButtonGroupComponent
        // },
        // {
        //     name: 'nzm-navbar',
        //     wrappers: ['field-wrapper'],
        //     component: NzInputComponent,
        // },
        // {
        //     name: 'nzm-pagination',
        //     wrappers: ['field-wrapper'],
        //     component: NzButtonGroupComponent
        // },
        // {
        //     name: 'nzm-popover',
        //     wrappers: ['field-wrapper'],
        //     component: NzTextareaComponent
        // },
        // {
        //     name: 'nzm-segmentedcontrol',
        //     wrappers: ['field-wrapper'],
        //     component: NzCheckboxComponent
        // },
        // {
        //     name: 'nzm-tabbar',
        //     wrappers: ['field-wrapper'],
        //     component: NzCheckboxGroupComponent
        // },
        // {
        //     name: 'nzm-tabs',
        //     wrappers: ['field-wrapper'],
        //     component: FormlyFieldAutocompleteComponent
        // },
        // {
        //     name: 'nzm-button',
        //     wrappers: ['field-wrapper'],
        //     component: FormlyFieldCascaderComponent
        // },

        // {
        //     name: 'nzm-calendar',
        //     wrappers: ['field-wrapper'],
        //     component: FormlyFieldDatePickerComponent
        // },
        // {
        //     name: 'nzm-checkbox',
        //     wrappers: ['field-wrapper'],
        //     component: FormlyFieldDateRangePickerComponent
        // },
        // {
        //     name: 'nzm-datepicker',
        //     wrappers: ['field-wrapper'],
        //     component: FormlyFieldNumberComponent
        // },
        // {
        //     name: 'nzm-datepickerview',
        //     wrappers: ['field-wrapper'],
        //     component: NzRadioComponent
        // },
        // {
        //     name: 'nzm-imagepicker',
        //     wrappers: ['field-wrapper'],
        //     component: NzRadioGroupComponent
        // },
        // {
        //     name: 'nzm-inputitem',
        //     component: NzTagComponent,
        // },
        // {
        //     name: 'nzm-picker',
        //     component: NzTagGroupComponent
        // },
        // {
        //     name: 'nzm-pickerview',
        //     wrappers: ['field-wrapper'],
        //     component: NzRateComponent
        // },
        // {
        //     name: 'nzm-radio',
        //     wrappers: ['field-wrapper'],
        //     component: FormlyFieldSelectComponent
        // },
        // {
        //     name: 'nzm-range',
        //     wrappers: ['field-wrapper'],
        //     component: FormlyFieldSliderComponent
        // },
        // {
        //     name: 'nzm-searchbar',
        //     wrappers: ['field-wrapper'],
        //     component: FormlyFieldSwitchComponent
        // },
        // {
        //     name: 'nzm-slider',
        //     wrappers: ['field-wrapper'],
        //     component: FormlyFieldTimePickerComponent
        // },
        // {
        //     name: 'nzm-stepper',
        //     wrappers: ['field-wrapper'],
        //     component: NzTreeSelectComponent
        // },
        // {
        //     name: 'nzm-switch',
        //     wrappers: ['field-wrapper'],
        //     component: FormlyFieldSingleFileComponent
        // }, 
        // {
        //     name: 'nzm-textarelitem',
        //     wrappers: ['field-wrapper'],
        //     component: FormlyFieldTooltipComponent
        // },
        // {
        //     name: 'nzm-accordion',
        //     component: TableSectionComponent
        // },
        // {
        //     name: 'nzm-badge',
        //     component: FormlyFieldTitleComponent
        // }, 
        // {
        //     name: 'nzm-card',
        //     component: TabsSectionComponent
        // },
        // {
        //     name: 'nzm-carousel',
        //     component: FormlyFieldGridComponent
        // }, 
        // {
        //     name: 'nzm-grid',
        //     component: FormlyFieldRepeatComponent
        // }, 
        // {
        //     name: 'nzm-noticebar',
        //     component: TabSectionComponent
        // }, 
        // {
        //     name: 'nzm-steps',
        //     component: FormlyFieldLabelComponent
        // },

        // {
        //     name: 'nzm-tag',
        //     component: FormlyFieldTemplateComponent
        // },
        // {
        //     name: 'nzm-actionsheet',
        //     component: FormlyFieldTableComponent
        // },
        // {
        //     name: 'nzm-activityindicator',
        //     component: FormlyFieldModelComponent
        // },
        // {
        //     name: 'mzm-progress',
        //     component: DropListComponent
        // },
        // {
        //     name: 'nzm-swipeaction',
        //     component: MonacoEditorComponent
        // },
        // {
        //     name: 'nzm-result',
        //     component: NzAvatarComponent
        // }
    ],
    wrappers: [
        // {name: 'field-wrapper', component: FormlyFieldWrapperComponent},
    ]
});

@NgModule({
    imports: [
        ReactiveFormsModule, 
        FormsModule, 
        CommonModule, 
        ForRootFormlyModule,
    ],
    declarations: [
        NzmButtonComponent,
    ],
    exports: [
        ReactiveFormsModule,
        FormlyModule,
    ]
})

export class FormlyNgxZorroMobileModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: FormlyNgxZorroMobileModule,
            providers: []
        };
    }
}
