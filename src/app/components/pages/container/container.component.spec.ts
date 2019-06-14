import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPagesContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: AppPagesContainerComponent;
  let fixture: ComponentFixture<AppPagesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPagesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPagesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
