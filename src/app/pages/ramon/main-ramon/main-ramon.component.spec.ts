import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainJorgeComponent } from './main-jorge.component';

describe('MainJorgeComponent', () => {
  let component: MainJorgeComponent;
  let fixture: ComponentFixture<MainJorgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainJorgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainJorgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
