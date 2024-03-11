import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomememberComponent } from './becomemember.component';

describe('BecomememberComponent', () => {
  let component: BecomememberComponent;
  let fixture: ComponentFixture<BecomememberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomememberComponent]
    });
    fixture = TestBed.createComponent(BecomememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
