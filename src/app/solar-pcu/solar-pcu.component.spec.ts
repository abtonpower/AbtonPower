import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarPcuComponent } from './solar-pcu.component';

describe('SolarPcuComponent', () => {
  let component: SolarPcuComponent;
  let fixture: ComponentFixture<SolarPcuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarPcuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarPcuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
