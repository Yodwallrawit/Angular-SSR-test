import { TestBed } from '@angular/core/testing';

import { AisShopUserService } from './ais-shop-user.service';

describe('AisShopUserService', () => {
  let service: AisShopUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AisShopUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
