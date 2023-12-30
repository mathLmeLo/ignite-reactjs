import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"
import styles from "./App.module.css"
import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/mathlmelo.png",
      name: "Matheus Melo",
      role: "Web Dev"
    },
    content: [
        { type:  "paragraph", content: "Fala galeraa 👋"},
        { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
        { type: "link", content: `jane.design/doctorcare`},
        { type: "link", content: "#novoprojeto" },
        { type: "link", content: "#nlw" },
        { type: "link", content: "#rocketseat" }
    ],
    publishedAt: new Date("2023-12-27 20:11:22")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/olgarose.png",
      name: "Random Indian",
      role: "Design"
    },
    content: [
        { type:  "paragraph", content: "Fala galeraa 👋"},
        { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
        { type: "link", content: `jane.design/doctorcare`},
        { type: "link", content: "#novoprojeto" },
        { type: "link", content: "#nlw" },
        { type: "link", content: "#rocketseat" }
    ],
    publishedAt: new Date("2023-12-28 20:11:22")
  }
];

function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>

        <Sidebar/>
        <main>
          {posts.map( (post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                key={post.id}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
