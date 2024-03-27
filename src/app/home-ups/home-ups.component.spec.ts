import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeUpsComponent } from './home-ups.component';

describe('HomeUpsComponent', () => {
  let component: HomeUpsComponent;
  let fixture: ComponentFixture<HomeUpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeUpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeUpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
