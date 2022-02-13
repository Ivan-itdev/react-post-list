import React, { useState } from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/select/MySelect'
import './styles/App.css'


function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'Description'},
    {id: 2, title: 'JavaScript 2', body: 'Description'},
    {id: 3, title: 'JavaScript 3', body: 'Description'},
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    console.log(sort)
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{margin:'15px 0'}} />
      <div>
        <MySelect
          value={selectedSort}
          sortPosts={sortPosts}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
        />
      </div>
      {posts.length
        ? 
        <PostList remove={removePost} posts={posts} title='Посты про JS' />
        :
        <h1 style={{textAlign: 'center'}}>Оёёй, а постов то и нет  о_О</h1>
      }

      <select>
        <option disabled>Сортировка</option>
        <option>по времени</option>
        <option>по алфавиту</option>
      </select>
      
    </div>
  )
}

export default App;
