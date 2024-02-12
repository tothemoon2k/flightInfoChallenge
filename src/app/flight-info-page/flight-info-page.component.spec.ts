import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightInfoPageComponent } from './flight-info-page.component';

describe('FlightInfoPageComponent', () => {
  let component: FlightInfoPageComponent;
  let fixture: ComponentFixture<FlightInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightInfoPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlightInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
