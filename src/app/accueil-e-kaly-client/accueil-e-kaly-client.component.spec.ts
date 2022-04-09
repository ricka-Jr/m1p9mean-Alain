import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilEKalyClientComponent } from './accueil-e-kaly-client.component';

describe('AccueilEKalyClientComponent', () => {
  let component: AccueilEKalyClientComponent;
  let fixture: ComponentFixture<AccueilEKalyClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccueilEKalyClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilEKalyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
