import { Header } from './components/Header/Header';
import { Task } from './components/Task/Task';
import styles from './App.module.css';
import { TaskList } from './components/TaskList/TaskList';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Task />

        <TaskList />
      </div>
    </>
  );
}

export default App;
