import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRamonComponent } from './main-ramon.component';

describe('MainRamonComponent', () => {
  let component: MainRamonComponent;
  let fixture: ComponentFixture<MainRamonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainRamonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainRamonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
