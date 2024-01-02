import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';
import { Avatar } from './Avatar'
import { Commment } from './Comment'
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

interface PostProps {
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  }
  publishedAt: Date;
  content: {
    type:  string;
    content: string;
  }[],
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState([
    "Post massa! Good work!"
  ])

  const [commentInput, setCommentInput] = useState('');
  

  const myLang = ptBR;

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
  const publishedDateRelativeToNow =  formatDistanceToNow(publishedAt, {
    locale: myLang,
    addSuffix: true
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, commentInput]);
    setCommentInput('')
  }

  function handleCommentInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("")
    setCommentInput(event.target.value)
  }

  function deleteComment(comment: string) {
    const removedComment = comments.filter(c => c !== comment);
    setComments(removedComment)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório.")
  }

  const isCommentInputEmpty = commentInput.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        Publicado {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(c => {
          switch (c.type) {
            case 'paragraph':
              return <p key={c.content}>{c.content}</p>
            case 'link':
              return <p key={c.content}><a href="#">{c.content}</a></p> 
            default:
              break;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          onChange={handleCommentInputChange}
          onInvalid={handleNewCommentInvalid}
          value={commentInput}
          required
        />

        <footer>
          <button type='submit' disabled={isCommentInputEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Commment
            onDeleteComment={deleteComment}
            key={comment}
            content={comment} 
          />
          ))
        }
      </div>
    </article> 
  )
}