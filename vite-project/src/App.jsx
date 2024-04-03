import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    async function fetchData() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts")
      let data = await response.json();
      console.log(data);
      setPosts(data);
      //alternative
      //fetch("https://jsonplaceholder.typicode.com/posts")
      //.then((response)=>{
      //  return response.json()
      //}).then((data)=>{
      //console.log(data);
      //}).catch((err)=>{console.log(err)
      //})
    }
    fetchData()
  })


  return (
    <>
      <h1> Fetch Data </h1>
      <div className="container">
        {posts && posts.map((post) => {
          return (
            <Onepost title={post.title} body={post.body} />
          )
        })}

      </div>
    </>
  )
}

function Onepost({ title, body }) {
  return (
    <>
      <li>post Title{title}

      </li>
    </>
  )
}

export default App
