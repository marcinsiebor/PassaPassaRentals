import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAvailableCarsComponent } from './my-available-cars.component';

describe('MyAvailableCarsComponent', () => {
  let component: MyAvailableCarsComponent;
  let fixture: ComponentFixture<MyAvailableCarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAvailableCarsComponent]
    });
    fixture = TestBed.createComponent(MyAvailableCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
