import React, { useState, useMemo } from 'react'
import PostList from './components/PostList'
import PostForm from './components/PostForm'
import MySelect from './components/select/MySelect'
import MyInput from './components/input/MyInput'
import './styles/App.css'


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'BBBbbbb', body: 'Description' },
    { id: 2, title: 'ZZzzzzzz 2', body: 'Description' },
    { id: 3, title: 'AAAA 3', body: 'Description' },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className='App'>
      <PostForm createPost={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          placeholder='Поиск'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}

        />
        <MySelect
          value={selectedSort}
          sortPosts={sortPosts}
          defaultValue='Сортировка'
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length
        ?
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS' />
        :
        <h1 style={{ textAlign: 'center' }}>Оёёй, а постов то и нет  о_О</h1>
      }
    </div>
  )
}

export default App;
