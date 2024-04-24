import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdrianComponent } from './main-adrian.component';

describe('MainAdrianComponent', () => {
  let component: MainAdrianComponent;
  let fixture: ComponentFixture<MainAdrianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAdrianComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainAdrianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
