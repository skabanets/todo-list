export interface Todo {
  id: string;
  text: string;
  complited: boolean;
  isEdit: boolean;
}

export type Filter = 'All' | 'Active' | 'Completed';

export interface TodoIdText extends Pick<Todo, 'id' | 'text'> {}
