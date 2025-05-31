import React, { useState, useEffect, useRef } from 'react';

type TaskInputProps = {
  onAdd: (task: string) => void;
};

const TaskInput = ({ onAdd }: TaskInputProps) => {
  const [task, setTask] = useState('');

  const inputRef = useRef<HTMLInputElement>();
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        placeholder="Add new Task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskInput;
