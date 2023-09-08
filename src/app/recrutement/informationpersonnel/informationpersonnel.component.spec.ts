import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationpersonnelComponent } from './informationpersonnel.component';

describe('InformationpersonnelComponent', () => {
  let component: InformationpersonnelComponent;
  let fixture: ComponentFixture<InformationpersonnelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationpersonnelComponent]
    });
    fixture = TestBed.createComponent(InformationpersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
