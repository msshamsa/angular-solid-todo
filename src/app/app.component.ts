import { Component } from '@angular/core';
import { TodoFormComponent } from './ui/components/todo-form/todo-form.component';
import { TodoListComponent } from './ui/components/todo-list/todo-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoFormComponent, TodoListComponent],
  template: `
    <div class="container">
      <h1>Todo App – SOLID + Clean Architecture</h1>
      <app-todo-form></app-todo-form>
      <app-todo-list></app-todo-list>
    </div>
  `,
  styles: [`
    .container { max-width: 700px; margin: 40px auto; padding: 20px; background: white; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
    h1 { text-align: center; color: #2c3e50; }
  `]
})
export class AppComponent {}