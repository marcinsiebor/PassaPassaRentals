import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassaAiComponent } from './passa-ai.component';

describe('PassaAiComponent', () => {
  let component: PassaAiComponent;
  let fixture: ComponentFixture<PassaAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PassaAiComponent]
    });
    fixture = TestBed.createComponent(PassaAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
