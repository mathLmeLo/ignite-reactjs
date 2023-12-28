import { Avatar } from './Avatar'
import { Commment } from './Comment'
import styles from './Post.module.css'

/* eslint-disable react/prop-types */
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/mathlmelo.png" />
          <div className={styles.authorInfo}>
            <strong>Matheus Melo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='27 de Dezembro às 20:11h' dateTime="2023-12-27 20:11:22">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 {' '}<a href="">jane.design/doctorcare</a>{' '}</p>
        <p>
        <a href="">#novoprojeto</a>{' '}
        <a href="">#nlw</a>{' '}
        <a href="">#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Commment/>
        <Commment/>
        <Commment/>
      </div>
    </article> 
  )
}