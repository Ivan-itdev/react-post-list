import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from './button/MyButton'

const PostItem = (props) => {
    const router = useNavigate()

    return (
        <div className='post'>
            <div className='post__content'>
                <b>{props.post.id}. <span>{props.post.title}.</span></b>
                <p>
                    {props.post.body}.
                </p>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post) }>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}

export default PostItem