import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragModalComponent } from './drag-modal.component';

describe('DragModalComponent', () => {
  let component: DragModalComponent;
  let fixture: ComponentFixture<DragModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
