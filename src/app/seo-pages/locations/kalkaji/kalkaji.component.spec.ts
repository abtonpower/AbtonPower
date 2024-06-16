import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalkajiComponent } from './kalkaji.component';

describe('HomeComponent', () => {
  let component: KalkajiComponent;
  let fixture: ComponentFixture<KalkajiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KalkajiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KalkajiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
