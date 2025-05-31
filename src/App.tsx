import { useEffect, useState } from 'react';
import './App.css';
import Greeting from './Components/Greeting';
import TaskInput from './Components/TaskInput';

const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (taskToDelete : string) => {
    setTasks(tasks.filter(task => task !== taskToDelete))
  }
  return (
    <div>
      <Greeting name={'amine'} />
      <TaskInput onAdd={handleAddTask} />
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task} <button onClick={()=>{handleDeleteTask(task)}}>x</button></li>
        ))}
      </ul>
    </div>
  );
};

export default App;
