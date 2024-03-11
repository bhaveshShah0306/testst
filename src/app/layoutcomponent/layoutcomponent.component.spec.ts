import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutcomponentComponent } from './layoutcomponent.component';

describe('LayoutcomponentComponent', () => {
  let component: LayoutcomponentComponent;
  let fixture: ComponentFixture<LayoutcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutcomponentComponent]
    });
    fixture = TestBed.createComponent(LayoutcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
