import {
  Component,
  ViewChild,
  TemplateRef,
  AfterViewInit,
  ViewContainerRef,
  OnDestroy,
} from '@angular/core';

import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal, PortalModule} from '@angular/cdk/portal';

/**
 * @title Drag&Drop with alternate root element
 */
@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css'],
})
export class OverlayComponent implements AfterViewInit, OnDestroy {
  @ViewChild('menu') _dialogTemplate: TemplateRef<any>;
  private _overlayRef: OverlayRef;
  private _overlayRef1: OverlayRef;
  private _portal: TemplatePortal;



  constructor(private _overlay: Overlay, private _viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    // 弹窗内容
    this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);
    this._overlayRef = this._overlay.create({
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true,
    });

    // 点击遮罩层关闭弹窗
    this._overlayRef.backdropClick().subscribe(() => {
      console.log('666')
      this._overlayRef.detach()
    });
  }

  ngOnDestroy() {
    // 弹窗销毁

    this._overlayRef.dispose();
  }

  openDialog($event) {
    let strategy = null
    strategy = this._overlay.position().global().top($event.y + 'px').left( $event.x + 'px')
    this._overlayRef.updatePositionStrategy(strategy)
    this._overlayRef.attach(this._portal);
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */