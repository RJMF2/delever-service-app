import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesMapComponent } from './services-map.component';

describe('ServicesMapComponent', () => {
  let component: ServicesMapComponent;
  let fixture: ComponentFixture<ServicesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
