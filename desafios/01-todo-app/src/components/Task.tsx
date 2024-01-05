import { CheckCircle, Circle, Trash } from '@phosphor-icons/react';
import styles from './Task.module.css';

interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
  onDeleteTask: (id: string) => void;
  onChangeTaskCompletion: (id: string) => void;
}

export function Task({id, title, isCompleted, onDeleteTask, onChangeTaskCompletion}: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleChangeTaskCompletion() {
    onChangeTaskCompletion(id);
  }

  return (
    <article
      className={
          isCompleted
          ? `${styles.task} ${styles.done}`
          : `${styles.task} ${styles.notDone}`
      }
    >
      <button
        title="Marcar como feito/não feito"
        onClick={handleChangeTaskCompletion}
      >
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
      <button
        title="Deletar tarefa"
        className={styles.trashButton}
        onClick={handleDeleteTask}
      >
        <Trash className={styles.trashIcon}/>
      </button>
    </article>
  )
}