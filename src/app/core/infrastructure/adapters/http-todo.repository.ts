import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo } from '../../domain/entities/todo.entity';
import { TodoRepository } from '../../domain/ports/todo.repsitory';


@Injectable({ providedIn: 'root' })
export class HttpTodoRepository implements TodoRepository {
  private readonly api = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.api}?_limit=10`);
  }

  add(todo: Todo): void {
    // در دنیای واقعی POST می‌زنی
    console.log('Added to server:', todo);
  }

  toggle(id: number): void {
    console.log('Toggled on server:', id);
  }
}