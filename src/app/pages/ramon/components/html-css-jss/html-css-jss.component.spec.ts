import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssJssComponent } from './html-css-jss.component';

describe('HtmlCssJssComponent', () => {
  let component: HtmlCssJssComponent;
  let fixture: ComponentFixture<HtmlCssJssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssJssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssJssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
