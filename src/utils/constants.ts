export const TODO_STATES = {
  TODO: 'TODO',
  ONGOING: 'ONGOING',
  DONE: 'DONE'
} as const;

export type TodoState = typeof TODO_STATES[keyof typeof TODO_STATES];

export const STATE_TITLES = {
  [TODO_STATES.TODO]: '📋 To Do',
  [TODO_STATES.ONGOING]: '⚡ In Progress',
  [TODO_STATES.DONE]: '✅ Completed'
} as const;

export interface User {
  id: string;
  name: string;
}

export const USERS: User[] = [
  {
    id: '1',
    name: 'John Smith',
  },
  {
    id: '2',
    name: 'Jane Doe',
  },
  {
    id: '3',
    name: 'Mike Johnson',
  }
];