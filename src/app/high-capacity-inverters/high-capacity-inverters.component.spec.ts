import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighCapacityInvertorsComponent } from './high-capacity-inverters.component';

describe('HighCapacityInvertorsComponent', () => {
  let component: HighCapacityInvertorsComponent;
  let fixture: ComponentFixture<HighCapacityInvertorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighCapacityInvertorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighCapacityInvertorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
