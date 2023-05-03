import { Trash } from '@phosphor-icons/react';
import style from './TaskList.module.css';

export function TaskList() {
  return (
    <section>
      <div className={style.counters}>
        <p>
          Created Tasks
          <span>5</span>
        </p>
        <p>
          Completed Tasks
          <span>2/5</span>
        </p>
      </div>
      <div className={style.list}>
        <div className={style.listItem}>
          <input type="checkbox" id="TaskName+Id" name="TaskName" />
          <label htmlFor="TaskName">
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
            integer.
          </label>
          <button>
            <Trash size={20} />
          </button>
        </div>
        <div className={style.listItem}>
          <input type="checkbox" id="TaskName+Id" name="TaskName" />
          <label htmlFor="TaskName">
            Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
            integer.
          </label>
          <button>
            <Trash size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
