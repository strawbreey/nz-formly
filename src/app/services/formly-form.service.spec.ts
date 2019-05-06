import { TestBed } from '@angular/core/testing';

import { FormlyFormService } from './formly-form.service';

describe('FormlyFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormlyFormService = TestBed.get(FormlyFormService);
    expect(service).toBeTruthy();
  });
});
