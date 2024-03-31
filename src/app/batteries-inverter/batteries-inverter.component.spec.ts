import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteriesInverterComponent } from './batteries-inverter.component';

describe('BatteriesInverterComponent', () => {
  let component: BatteriesInverterComponent;
  let fixture: ComponentFixture<BatteriesInverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatteriesInverterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteriesInverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
