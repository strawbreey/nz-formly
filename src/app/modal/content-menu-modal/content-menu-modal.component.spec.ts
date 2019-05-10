import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMenuModalComponent } from './content-menu-modal.component';

describe('ContentMenuModalComponent', () => {
  let component: ContentMenuModalComponent;
  let fixture: ComponentFixture<ContentMenuModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMenuModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMenuModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
