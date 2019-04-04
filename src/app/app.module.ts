import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { FormlyNgxZorroModule } from "../modules/ngx-zorro-formly/formly-ngx-zorro.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormlyComponent } from './formly/formly.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { DragComponent } from './components/drag/drag.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ReactiveFormComponent,
    ReactiveComponent,
    FormlyComponent,
    ButtonComponent,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    DragComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormlyNgxZorroModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]

})
export class AppModule { }
