import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassEditorModalComponent } from './class-editor-modal.component';

describe('ClassEditorModalComponent', () => {
  let component: ClassEditorModalComponent;
  let fixture: ComponentFixture<ClassEditorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassEditorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassEditorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
