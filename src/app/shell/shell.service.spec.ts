import { TestBed } from '@angular/core/testing';

import { ShellService } from '@app/shell/shell.service';

describe('ShellService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShellService = TestBed.get(ShellService);
    expect(service).toBeTruthy();
  });
});
