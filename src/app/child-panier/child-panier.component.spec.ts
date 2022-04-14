import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPanierComponent } from './child-panier.component';

describe('ChildPanierComponent', () => {
  let component: ChildPanierComponent;
  let fixture: ComponentFixture<ChildPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
