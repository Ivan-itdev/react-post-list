import React, { useEffect, useState, useRef } from 'react'
import PostService from '../API/PostService'
import MyButton from '../components/button/MyButton'
import Loader from '../components/Loader/Loader'
import MyModal from '../components/MyModal/MyModal'
import Pagination from '../components/pagination/Pagination'
import PostFilter from '../components/PostFilter'
import PostForm from '../components/PostForm'
import PostList from '../components/PostList'
import MySelect from '../components/select/MySelect'
import { useFetching } from '../hooks/useFetching'
import { usePosts } from '../hooks/usePosts'
import '../styles/App.css'
import { getPageCount } from '../utils/pages'

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [limit])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)

  }

  return (
    <div className='App'>
      <div className='settingsArea'>
        <div>
          <MyButton
            onClick={() => setModal(true)}
          >
            Создать пост
          </MyButton>
        </div>

        <MyModal visible={modal} setVisible={setModal}>
          <PostForm createPost={createPost} />
        </MyModal>
        <PostFilter
          filter={filter}
          setFilter={setFilter}
        />
        <div>
          <MySelect
            value={limit}
            onChange={value => setLimit(value)}
            defaultValue='кол-во постов'
            options={[
              { value: 5, name: '5' },
              { value: 10, name: '10' },
              { value: 25, name: '25' },
              { value: -1, name: 'Показать всё' },
            ]}
          />
        </div>
      </div>

      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      {isPostLoading 
       ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
       : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты' />
      }
      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  )
}

export default Posts;
