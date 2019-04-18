import { TestBed } from '@angular/core/testing';

import { DragModalService } from './drag-modal.service';

describe('DragModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragModalService = TestBed.get(DragModalService);
    expect(service).toBeTruthy();
  });
});
