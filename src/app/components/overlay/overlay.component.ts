import {
  Component,
  ViewChild,
  TemplateRef,
  AfterViewInit,
  ViewContainerRef,
  OnDestroy,
} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements  AfterViewInit, OnDestroy {

  @ViewChild(TemplateRef) _dialogTemplate: TemplateRef<any>;
  
  private _overlayRef: OverlayRef;
  private _portal: TemplatePortal;

  constructor(private _overlay: Overlay, private _viewContainerRef: ViewContainerRef) {}

  
  ngAfterViewInit() {
    this._portal = new TemplatePortal(this._dialogTemplate, this._viewContainerRef);

    this._overlayRef = this._overlay.create({
      positionStrategy: this._overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true
    });
    this._overlayRef.backdropClick().subscribe(() => this._overlayRef.detach());
  }

  ngOnDestroy() {
    this._overlayRef.dispose();
  }

  openDialog() {
    console.log(this._portal)
    console.log(this._overlayRef)
    this._overlayRef.attach(this._portal);
  }

}
