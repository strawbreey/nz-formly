import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutsModalComponent } from './shortcuts-modal.component';

describe('ShortcutsModalComponent', () => {
  let component: ShortcutsModalComponent;
  let fixture: ComponentFixture<ShortcutsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
