import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffresPostulerComponent } from './offres-postuler.component';

describe('OffresPostulerComponent', () => {
  let component: OffresPostulerComponent;
  let fixture: ComponentFixture<OffresPostulerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffresPostulerComponent]
    });
    fixture = TestBed.createComponent(OffresPostulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
