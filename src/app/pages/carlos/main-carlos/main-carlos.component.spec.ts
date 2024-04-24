import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarlosComponent } from './main-carlos.component';

describe('MainCarlosComponent', () => {
  let component: MainCarlosComponent;
  let fixture: ComponentFixture<MainCarlosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainCarlosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCarlosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
