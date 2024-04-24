import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMarcoComponent } from './main-marco.component';

describe('MainMarcoComponent', () => {
  let component: MainMarcoComponent;
  let fixture: ComponentFixture<MainMarcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMarcoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMarcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
