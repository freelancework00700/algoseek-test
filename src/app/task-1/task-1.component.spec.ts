import { Task1Component } from './task-1.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Task1Component', () => {
  let component: Task1Component;
  let fixture: ComponentFixture<Task1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Task1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
