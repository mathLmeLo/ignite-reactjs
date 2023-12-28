import styles from './Comment.module.css'
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import { Avatar } from './Avatar';

export function Commment() {
  return (
    <div className={styles.comment}>
      
      <Avatar hasBorder={false} src="https://github.com/mathlmelo.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title='27 de Dezembro às 20:11h' dateTime="2023-12-27 20:11:22">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}