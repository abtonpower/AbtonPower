import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMFBatteryComponent } from './smf-battery.component';

describe('SMFBatteryComponent', () => {
  let component: SMFBatteryComponent;
  let fixture: ComponentFixture<SMFBatteryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMFBatteryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SMFBatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
