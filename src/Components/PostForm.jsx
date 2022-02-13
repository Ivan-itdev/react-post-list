import React, { useState } from 'react'
import MyInput from './input/MyInput'
import MyButton from './button/MyButton'

const PostForm = ({addNewPost}) => {

    const [post, setPost] = useState({
        id: Date.now(),
        title: '',
        body: ''
      })

    const create = (e) => {
        e.preventDefault()
        addNewPost(post)
        setPost({ ...post, title: '', body: ''})
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