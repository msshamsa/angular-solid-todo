// src/app/core/application/services/todo.service.ts
import { Injectable, signal, computed, inject } from '@angular/core';
import { Todo, TodoFilter } from '../../domain/entities/todo.entity';
import { TODO_REPOSITORY} from '../../domain/ports/todo.repsitory';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private repo = inject(TODO_REPOSITORY);

  private _todos = signal<Todo[]>([]);
  private _filter = signal<TodoFilter>('all');

  readonly todos = this._todos.asReadonly();
  readonly filter = this._filter.asReadonly();

  readonly filteredTodos = computed(() => {
    const todos = this._todos();
    const f = this._filter();
    switch (f) {
      case 'active': return todos.filter(t => !t.completed);
      case 'completed': return todos.filter(t => t.completed);
      default: return todos;
    }
  });

  constructor() {
    this.repo.getAll().subscribe(todos => this._todos.set(todos));
  }

  add(title: string) {
    if (!title.trim()) return;
    const newTodo: Todo = { id: Date.now(), title: title.trim(), completed: false };
    this._todos.update(t => [...t, newTodo]);
    this.repo.add(newTodo);
  }

  toggle(id: number) {
    this._todos.update(todos =>
      todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
    this.repo.toggle(id);
  }

  setFilter(filter: TodoFilter) {
    this._filter.set(filter);
  }

  refresh() {
    this.repo.getAll().subscribe(todos => this._todos.set(todos));
  }
}