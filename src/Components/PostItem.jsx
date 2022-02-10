import React from 'react'
import MyButton from './button/MyButton'

const PostItem = (props) => {

    console.log(props)
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton>Удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem