import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

// 第三方组件
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { QuillModule } from 'ngx-quill';

// 路由
import { AppRoutingModule } from './app-routing.module';

// ngx-fromly
import { FormlyNgxZorroModule } from "../modules/ngx-zorro-formly/formly-ngx-zorro.module";

import { AppComponent } from './app.component';
import { DragComponent } from './components/drag/drag.component';
import { DropComponent } from './components/drop/drop.component';

// 全局弹窗
import { OverlayComponent } from './components/overlay/overlay.component';
import { DragModalComponent } from './modal/drag-modal/drag-modal.component';
import { ContentMenuModalComponent } from './modal/content-menu-modal/content-menu-modal.component';
import { EditorModalComponent } from './modal/editor-modal/editor-modal.component';
import { StyleEditorModalComponent } from './modal/style-editor-modal/style-editor-modal.component';
import { ClassEditorModalComponent } from './modal/class-editor-modal/class-editor-modal.component';
import { ShortcutsModalComponent } from './modal/shortcuts-modal/shortcuts-modal.component';
import { PagesModalComponent } from './modal/pages-modal/pages-modal.component';

// 组件
import { LayersComponent } from './components/layers/layers.component';
import { AppContainerComponent } from './components/layers/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { PagesComponent } from './components/pages/pages.component';
import { AppPagesContainerComponent } from './components/pages/container/container.component'

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    DropComponent,
    OverlayComponent,
    DragModalComponent,
    ContentMenuModalComponent,
    EditorModalComponent,
    StyleEditorModalComponent,
    ClassEditorModalComponent,
    ShortcutsModalComponent,
    LayersComponent,
    AppContainerComponent,
    HeaderComponent,
    PagesComponent,
    PagesModalComponent,
    AppPagesContainerComponent,
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
    DragDropModule,
    QuillModule,
    MonacoEditorModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]

})
export class AppModule { }
