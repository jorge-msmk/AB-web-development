import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainIbraComponent } from './main-ibra.component';

describe('MainIbraComponent', () => {
  let component: MainIbraComponent;
  let fixture: ComponentFixture<MainIbraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainIbraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainIbraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
