import styles from './App.module.css'
import "./global.css"
import { v4 as uuidv4 } from 'uuid';
import { Task } from './components/Task';
import { Header } from './components/Header';
import { PlusCircle } from '@phosphor-icons/react';

const tasks = [
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isCompleted: false,
  }
]

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <form className={styles.newTask}>
          <textarea
            placeholder='Adicione uma nova tarefa'
            name='newtask'
            required
          />
          <button type='submit' >Criar <PlusCircle size={16} /> </button>
        </form>

        <main className={styles.content}>
          <header className={styles.info}>
            <div className={styles.counter}>Tarefas criadas<span>{tasks.length}</span></div>
            <div className={styles.counter}>Concluídas<span>{tasks.reduce(((acc, curr) => {if(curr.isCompleted) {return acc+1;} return acc;}), 0)} de {tasks.length}</span></div>
          </header>

          <section className={styles.tasks}>
            {
              tasks.map((t) => (
              <Task
                key={t.id}
                title={t.title}
                isCompleted={t.isCompleted}
              />
              ))
            }
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
