import { TestBed } from '@angular/core/testing';

import { DragAttributeService } from './drag-attribute.service';

describe('DragAttributeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DragAttributeService = TestBed.get(DragAttributeService);
    expect(service).toBeTruthy();
  });
});
