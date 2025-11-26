
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export type CreateTodo = Pick<Todo, 'title'>;
export type TodoFilter = 'all' | 'active' | 'completed';   