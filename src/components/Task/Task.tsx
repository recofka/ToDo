import { PlusCircle } from '@phosphor-icons/react';
import styles from './Task.module.css';

export function Task() {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        name="newTask"
        // value=''
        required
        placeholder="Add a new task"
      ></input>
      <button type="submit" disabled={false}>
        Add
        <PlusCircle size={16} />
      </button>
    </form>
  );
}
