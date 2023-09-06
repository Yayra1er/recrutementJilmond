import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilCandidatComponent } from './acceuil-candidat.component';

describe('AcceuilCandidatComponent', () => {
  let component: AcceuilCandidatComponent;
  let fixture: ComponentFixture<AcceuilCandidatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AcceuilCandidatComponent]
    });
    fixture = TestBed.createComponent(AcceuilCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
