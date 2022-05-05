import { useCallback, useState } from 'react';
import produce from 'immer';

const useImmer = (initialState) => {
  const [state, setState] = useState(initialState);
  return [state, useCallback((updater) => setState(produce(updater)), [])];
};

const TODO = () => {
  const [todos, setTodos] = useImmer([
    { title: 'First', isDone: false },
    { title: 'Second', isDone: true },
    { title: 'Third', isDone: false },
  ]);
  const toggle = (index) =>
    setTodos((draft) => {
      draft[index].isDone = !draft[index].isDone;
    });
  return todos.map(({ title, isDone }, i) => (
    <div key={i} onClick={() => toggle(i)}>{`${title} ${isDone}`}</div>
  ));
};

export default TODO;
