import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifdetailsComponent } from './gifdetails.component';

describe('GifdetailsComponent', () => {
  let component: GifdetailsComponent;
  let fixture: ComponentFixture<GifdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GifdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
