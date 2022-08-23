import React, { useEffect, useState } from 'react' 
import {useParams} from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import Loader from '../components/Loader/Loader'
import PostService from '../API/PostService'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comeError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(() => { 
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    
    return (
        <div className='postIdPage'>
            <h2>
                Вы открыли страницу поста с ID = {params.id}
            </h2>
            {isLoading 
                ? <Loader/>
                : <div>
                    <div>{post.id}. {post.title}</div>
                    <div>{post.body}</div>
                  </div>
            }
            <h2>
                Комментарии
            </h2>
            {isComLoading
                ? <Loader/>
                : <div>
                    {comments.map(comm => 
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage