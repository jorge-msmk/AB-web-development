import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOubaidComponent } from './main-oubaid.component';

describe('MainOubaidComponent', () => {
  let component: MainOubaidComponent;
  let fixture: ComponentFixture<MainOubaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainOubaidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainOubaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
