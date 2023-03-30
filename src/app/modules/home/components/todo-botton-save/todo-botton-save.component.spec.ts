import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoBottonSaveComponent } from './todo-botton-save.component';

describe('TodoBottonSaveComponent', () => {
  let component: TodoBottonSaveComponent;
  let fixture: ComponentFixture<TodoBottonSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoBottonSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoBottonSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
