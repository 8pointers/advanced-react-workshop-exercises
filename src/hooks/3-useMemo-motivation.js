import { useState } from 'react';
import { someTasksTodo } from '../util';
const filteringStrategies = {
  All: () => true,
  Completed: (t) => t.isComplete,
  Pending: (t) => !t.isComplete,
};
const orderingStrategies = {
  Asc: (t1, t2) => t1.name.localeCompare(t2.name),
  Desc: (t1, t2) => -t1.name.localeCompare(t2.name),
};
const TODO = ({ tasks = someTasksTodo }) => {
  const [filteringStrategy, setFilteringStrategy] = useState('All');
  const [orderingStrategy, setOrderingStrategy] = useState('Asc');
  const [newTask, setNewTask] = useState('');
  return (
    <>
      {Object.keys(filteringStrategies).map((fs, key) => (
        <button key={key} onClick={() => setFilteringStrategy(fs)}>
          {fs}
        </button>
      ))}
      {Object.keys(orderingStrategies).map((os, key) => (
        <button key={key} onClick={() => setOrderingStrategy(os)}>
          {os}
        </button>
      ))}
      <ul>
        {tasks
          .filter(filteringStrategies[filteringStrategy])
          .sort(orderingStrategies[orderingStrategy])
          .map(({ id, name, isComplete }) => (
            <li key={id} style={{ textDecoration: isComplete ? 'line-through' : 'none' }}>
              {name}
            </li>
          ))}
      </ul>
      <input type="text" value={newTask} onChange={(event) => setNewTask(event.target.value)} />
    </>
  );
};
export default TODO;
