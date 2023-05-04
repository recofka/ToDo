import { ChangeEvent } from 'react';
import { TaskProps } from '../../App';
import { Trash, ClipboardText } from '@phosphor-icons/react';
import style from './TaskList.module.css';

interface TaskListProps {
  tasks: TaskProps[];
  onDeleteTask: (taskId: string) => void;
  onChangeTaskStatus: (isChecked: boolean, taskId: string) => void;
}

export function TaskList({ tasks, onChangeTaskStatus, onDeleteTask }: TaskListProps) {
  function handleDeleteTask(taskId: string) {
    onDeleteTask(taskId);
  }

  function handleChangeStatus(event: ChangeEvent<HTMLInputElement>) {
    if (event) {
      const isChecked = event.target.checked;
      const taskId = event.target.id;
      onChangeTaskStatus(isChecked, taskId);
    }
  }

  function countCompleteTasks() {
    let count = 0;
    tasks.map((tasks) => {
      if (tasks.isComplete === true) {
        count++;
      }
    });
    return count;
  }

  return (
    <section>
      <div className={style.counters}>
        <p>
          Created Tasks
          <span>{tasks.length}</span>
        </p>
        <p>
          Completed Tasks
          <span>
            {countCompleteTasks()}/{tasks.length}
          </span>
        </p>
      </div>
      {tasks.length === 0 ? (
        <div className={style.listEmpty}>
          <ClipboardText size={56} />
          <p>
            <strong>You don't have tasks registered yet</strong>
          </p>
          <p>Create tasks and organize your to-do items</p>
        </div>
      ) : (
        tasks.map((task: TaskProps) => {
          return (
            <div key={task.id} className={style.list}>
              <div className={style.listItem} data-iscomplete={task.isComplete.toString()}>
                <input onChange={handleChangeStatus} type="checkbox" id={task.id} name="TaskName" />
                <label htmlFor="TaskLabel">{task.content}</label>
                <button onClick={() => handleDeleteTask(task.id)}>
                  <Trash size={20} />
                </button>
              </div>
            </div>
          );
        })
      )}
    </section>
  );
}
