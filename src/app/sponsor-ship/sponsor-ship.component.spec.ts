import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorShipComponent } from './sponsor-ship.component';

describe('SponsorShipComponent', () => {
  let component: SponsorShipComponent;
  let fixture: ComponentFixture<SponsorShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorShipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsorShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
