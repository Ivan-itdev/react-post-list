import React, { useState } from 'react'
import MyInput from './input/MyInput'
import MyButton from './button/MyButton'

const PostForm = ({createPost}) => {

    const [post, setPost] = useState({
        id: Date.now(),
        title: '',
        body: ''
      })

    const create = (e) => {
        e.preventDefault()
        createPost(post)
        setPost({title: '', body: '', id: Date.now()})
    }

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text"
                placeholder='Название поста'
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({ ...post, body: e.target.value })}
                type="text"
                placeholder='Описание поста'
            />
            <MyButton onClick={create}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm