import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionnaireDashboardComponent } from './gestionnaire-dashboard.component';

describe('GestionnaireDashboardComponent', () => {
  let component: GestionnaireDashboardComponent;
  let fixture: ComponentFixture<GestionnaireDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionnaireDashboardComponent]
    });
    fixture = TestBed.createComponent(GestionnaireDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
