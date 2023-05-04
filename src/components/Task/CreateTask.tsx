import { ChangeEvent, FormEvent, useState } from 'react';
import { TaskProps } from '../../App';
import { PlusCircle } from '@phosphor-icons/react';
import { v4 as uuidv4 } from 'uuid';
import styles from './CreateTask.module.css';

interface CreateTaskProps {
  onCreateNewTask: (newTaskData: TaskProps) => void;
}

export function CreateTask({ onCreateNewTask }: CreateTaskProps) {
  const [newTask, setNewTask] = useState('');
  const isDisable = newTask.length === 0;

  function handleNewComment(event: FormEvent) {
    event.preventDefault();
    const newTaskData = { id: uuidv4(), isComplete: false, content: newTask };
    onCreateNewTask(newTaskData);
    setNewTask('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  return (
    <form onSubmit={handleNewComment} className={styles.form}>
      <input
        onChange={handleNewTaskChange}
        className={styles.input}
        name="newTask"
        value={newTask}
        required
        placeholder="Add a new task"
      ></input>
      <button type="submit" disabled={isDisable}>
        Add
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
