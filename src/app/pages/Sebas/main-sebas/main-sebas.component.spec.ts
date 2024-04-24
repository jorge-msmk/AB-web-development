import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSebasComponent } from './main-sebas.component';

describe('MainSebasComponent', () => {
  let component: MainSebasComponent;
  let fixture: ComponentFixture<MainSebasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSebasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainSebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
