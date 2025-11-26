import { Component, inject } from '@angular/core';
import { TodoService } from '../../../core/application/services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  template: `
    <div class="filter">
      <select [value]="service.filter()" (change)="service.setFilter($any($event.target).value)">
        <option value="all">همه</option>
        <option value="active">در حال انجام</option>
        <option value="completed">تمام شده</option>
      </select>
    </div>

    <ul class="list">
      @for (todo of service.filteredTodos(); track todo.id) {
        <li [class.completed]="todo.completed">
          <label>
            <input type="checkbox" [checked]="todo.completed" (change)="service.toggle(todo.id)" />
            {{ todo.title }}
          </label>
        </li>
      } @empty {
        <li class="empty">هیچ تسک‌ای وجود ندارد</li>
      }
    </ul>

    <button (click)="service.refresh()" class="refresh">بارگذاری مجدد</button>
  `,
  styles: [`
    .filter { margin: 20px 0; }
    select { padding: 10px 16px; font-size: 16px; border-radius: 8px; }
    .list { list-style: none; padding: 0; }
    .list li { padding: 14px 0; border-bottom: 1px solid #eee; font-size: 18px; }
    .completed { text-decoration: line-through; color: #888; }
    .empty { text-align: center; color: #aaa; font-style: italic; padding: 40px; }
    .refresh { margin-top: 20px; padding: 12px 24px; background: #28a745; color: white; border: none; border-radius: 8px; cursor: pointer; }
  `]
})
export class TodoListComponent {
  service = inject(TodoService);
}