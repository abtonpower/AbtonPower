import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineUpsComponent } from './online-ups.component';

describe('OnlineUpsComponent', () => {
  let component: OnlineUpsComponent;
  let fixture: ComponentFixture<OnlineUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineUpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
