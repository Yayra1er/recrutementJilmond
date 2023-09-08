import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresNonPostulerComponent } from './offres-non-postuler.component';

describe('OffresNonPostulerComponent', () => {
  let component: OffresNonPostulerComponent;
  let fixture: ComponentFixture<OffresNonPostulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffresNonPostulerComponent]
    });
    fixture = TestBed.createComponent(OffresNonPostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
