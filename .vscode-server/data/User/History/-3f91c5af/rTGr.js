/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = {
    title : "성서 맛집2",
    desc : "덴코쿠"
  }
  let [title,titleState] = useState(['use State Useing','강남우동 맛집','파이썬 독학']);
  let [like,likeState] = useState(0);

function likeClick(){
  console.log("click!")
  likeState(like++)
  
}
function titleClick(){
  console.log("click!")
  title[0]="여자 코트 추천";
  titleState(title);
}


  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style={{color : 'red'}}> 진민강 </h4>
      </div>
      <h4>{post.title}</h4>

      <button onClick={titleClick}>글수정</button>
      <div className='list'>
    <h4>
      {title[0]}
      <span onClick={ likeClick }>♡</span> {like}
    </h4>
    <p>
      내용
    </p>
    </div>
    <div className='list'>
    <h4>
      {title[1]}
    </h4>
    <p>
      내용
    </p>
    </div>
    <div className='list'>
    <h4>
      {title[2]}
    </h4>
    <p>
      내용
    </p>
      </div>
      
    </div>
  );
}

export default App;
