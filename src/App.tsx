import { useState } from 'react';
import { Header } from './components/Header/Header';
import { CreateTask } from './components/Task/CreateTask';
import { TaskList } from './components/TaskList/TaskList';
import styles from './App.module.css';

export interface TaskProps {
  id: string;
  isComplete: boolean;
  content: string;
}

function App() {
  const [tasks, setTasks] = useState([] as TaskProps[]);

  function createNewTask(newTaskData: TaskProps) {
    setTasks([...tasks, newTaskData]);
  }

  function changeTaskStatus(isChecked: boolean, taskId: string) {
    const changeStatusById = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isComplete: isChecked,
        };
      }
      return task;
    });
    setTasks(changeStatusById);
  }

  function deleteTask(id: string) {
    const removedTaskFromList = tasks.filter((task) => task.id !== id);
    setTasks(removedTaskFromList);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <CreateTask onCreateNewTask={createNewTask} />
        <TaskList tasks={tasks} onChangeTaskStatus={changeTaskStatus} onDeleteTask={deleteTask} />
      </div>
    </>
  );
}

export default App;
