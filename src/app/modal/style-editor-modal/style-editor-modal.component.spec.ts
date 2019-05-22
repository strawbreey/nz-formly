import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleEditorModalComponent } from './style-editor-modal.component';

describe('StyleEditorModalComponent', () => {
  let component: StyleEditorModalComponent;
  let fixture: ComponentFixture<StyleEditorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleEditorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
