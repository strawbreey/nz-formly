import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesModalComponent } from './pages-modal.component';

describe('PagesModalComponent', () => {
  let component: PagesModalComponent;
  let fixture: ComponentFixture<PagesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
