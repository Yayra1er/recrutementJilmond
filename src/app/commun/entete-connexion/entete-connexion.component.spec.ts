import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteteConnexionComponent } from './entete-connexion.component';

describe('EnteteConnexionComponent', () => {
  let component: EnteteConnexionComponent;
  let fixture: ComponentFixture<EnteteConnexionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnteteConnexionComponent]
    });
    fixture = TestBed.createComponent(EnteteConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
