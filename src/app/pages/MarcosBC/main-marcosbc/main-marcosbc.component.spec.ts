import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMarcosbcComponent } from './main-marcosbc.component';

describe('MainMarcosbcComponent', () => {
  let component: MainMarcosbcComponent;
  let fixture: ComponentFixture<MainMarcosbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMarcosbcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMarcosbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
