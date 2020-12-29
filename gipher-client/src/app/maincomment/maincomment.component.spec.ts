import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincommentComponent } from './maincomment.component';

describe('MaincommentComponent', () => {
  let component: MaincommentComponent;
  let fixture: ComponentFixture<MaincommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
