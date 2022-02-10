import React, { useState } from 'react';
import MyButton from './components/button/MyButton';
import MyInput from './components/input/MyInput';
import PostList from './components/PostList';
import Test from './components/Test'
import './styles/App.css'



function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ])

  const addNewPost = () => {
    
  }

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder='Название поста' />
        <MyInput type="text" placeholder='Описание поста' />
        <MyButton onClick={addNewPost} >Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
