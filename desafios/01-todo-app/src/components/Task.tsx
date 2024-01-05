import { CheckCircle, Circle, Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';

interface TaskProps {
  id?: number;
  title: string;
  isCompleted: boolean;
}

export function Task({title, isCompleted}: TaskProps) {
  return (
    <article
      className={
          isCompleted
          ? `${styles.task} ${styles.done}`
          : `${styles.task} ${styles.notDone}`
      }
    >
      <button title="Marcar como feito">
        {
          isCompleted
            ? <div className={styles.checked}>
                <span className={styles.checkedCircle}/>
                <CheckCircle weight="fill"/>
              </div>
            : <div className={styles.unchecked}>
                <span className={styles.uncheckedCircle}/>
                <Circle weight='bold'/>
              </div>
        }
      </button>
      <p>{title}</p>
      <button title="Deletar tarefa" className='trashButton'>
        <Trash onClick={() => {}} className={styles.trashIcon}/>
      </button>
    </article>
  )
}