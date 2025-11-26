// src/app/core/domain/ports/todo.repository.ts

import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../entities/todo.entity';

export interface TodoRepository {
  getAll(): Observable<Todo[]>;
  add(todo: Todo): void;
  toggle(id: number): void;
}

export const TODO_REPOSITORY = new InjectionToken<TodoRepository>('TodoRepository');