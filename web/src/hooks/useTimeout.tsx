import React from 'react';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
}

const todos: Todo[] = [
  { id: 1, title: 'Buy nachos', completed: false },
  { id: 2, title: 'Buy avocado', completed: true },
  { id: 3, title: 'Buy ground beef', completed: false },
];

let completedAll = true;

for (let i = 0; i < todos.length; i++) {
  if (!todos[i].completed) {
    completedAll = false;
    break;
  }
}
