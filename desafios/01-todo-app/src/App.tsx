import styles from './App.module.css'
import "./global.css"
import { v4 as uuidv4 } from 'uuid';
import { Task } from './components/Task';
import { Header } from './components/Header';
import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
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
  ])

  const [taskInput, setTaskInput] = useState('');

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    setTasks([
      ...tasks, {
        id: uuidv4(),
        title: taskInput,
        isCompleted: false,   
      }
    ]);
    setTaskInput('');
  }

  function handleTaskInputChanged(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("")
    setTaskInput(event.target.value);
  }

  function deleteTask(id: string) {
    const removedTask = tasks.filter(t=> t.id !== id);
    setTasks(removedTask);
  }

  function changeTaskCompletion(id: string) {
    const tasksUpdated = tasks.map(t=> {
      if (t.id === id) {
        return {
          id: t.id,
          title: t.title,
          isCompleted: !t.isCompleted,   
        }
      } else {
        return t;
      }
    });
    setTasks(tasksUpdated);
  }

  function handleTaskInputInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório.")
  }

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <form
          className={styles.newTask}
          onSubmit={handleCreateTask}
        >
          <input
            placeholder='Adicione uma nova tarefa'
            name='newtask'
            value={taskInput}
            onChange={handleTaskInputChanged}
            onInvalid={handleTaskInputInvalid}
            required
          />
          <button
            type='submit'
          >
            Criar <PlusCircle size={16} />
          </button>
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
                id={t.id}
                title={t.title}
                isCompleted={t.isCompleted}
                onDeleteTask={deleteTask}
                onChangeTaskCompletion={changeTaskCompletion}
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
