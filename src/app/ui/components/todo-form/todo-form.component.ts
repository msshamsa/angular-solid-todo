import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../../../core/application/services/todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  template: `
    <div class="form">
      <input
        #input
        [value]="title()"
        (input)="title.set(input.value)"
        (keyup.enter)="add()"
        placeholder="چه کاری داری؟"
        class="input"
      />
      <button (click)="add()" class="btn">اضافه کن</button>
    </div>
  `,
  styles: [`
    .form { display: flex; gap: 10px; margin: 20px 0; }
    .input { flex: 1; padding: 12px; font-size: 16px; border: 2px solid #ddd; border-radius: 8px; }
    .btn { padding: 12px 24px; background: #0066cc; color: white; border: none; border-radius: 8px; cursor: pointer; }
    .btn:hover { background: #0052a3; }
  `]
})
export class TodoFormComponent {
  private service = inject(TodoService);
  title = signal('');

  add() {
    if (this.title().trim()) {
      this.service.add(this.title());
      this.title.set('');
    }
  }
}