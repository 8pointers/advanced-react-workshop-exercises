import { useState } from 'react';
import produce from 'immer';

const TODO = () => {
  const [todos, setTodos] = useState([
    { title: 'First', isDone: false },
    { title: 'Second', isDone: true },
    { title: 'Third', isDone: false },
  ]);
  const toggle = (index) =>
    setTodos(
      produce((draft) => {
        draft[index].isDone = !draft[index].isDone;
      })
    );
  return todos.map(({ title, isDone }, i) => (
    <div key={i} onClick={() => toggle(i)}>{`${title} ${isDone}`}</div>
  ));
};

export default TODO;
