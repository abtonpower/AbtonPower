import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarPanelsComponent } from './solar-panels.component';

describe('SolarPanelsComponent', () => {
  let component: SolarPanelsComponent;
  let fixture: ComponentFixture<SolarPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarPanelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
