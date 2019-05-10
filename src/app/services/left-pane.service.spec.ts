import { TestBed } from '@angular/core/testing';

import { LeftPaneService } from './left-pane.service';

describe('LeftPaneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeftPaneService = TestBed.get(LeftPaneService);
    expect(service).toBeTruthy();
  });
});
