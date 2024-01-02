import styles from './Comment.module.css'
import { Trash, ThumbsUp } from "@phosphor-icons/react";
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommmentProps {
  onDeleteComment: (c: string) => void;
  content: string;
}

export function Commment({content, onDeleteComment}: CommmentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {   
    onDeleteComment(content)
  }

  function handleLikeComment() {
    // state is the newest value available
    // react closure makes likeCount have a single value in a moment
    // accessing it and changing its value referencig itself multiple times
    // does not change the state as one would expect
    // using the arrow function as follows fixes this problem
    setLikeCount((state) => { 
      return state + 1;
    })
  }
  
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
              <Trash onClick={handleDeleteComment} size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp onClick={handleLikeComment}/>
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}