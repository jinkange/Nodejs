import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = {
    title : "성서 맛집2",
    desc : "덴코쿠"
  }
  let [title,b] = useState('use State Useing');
  let [title2,b2] = useState('강남우동 맛집');
  let [title3,b3] = useState('파이썬 독학');
  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style={{color : 'red'}}> 진민강 </h4>
      </div>
      <h4>{post.title}</h4>
      <div className='list'>
    <h4>
      {title}
    </h4>
    <p>
      내용
    </p>
    <h4>
      {title2}
    </h4>
    <p>
      내용
    </p>
    <h4>
      {title3}
    </h4>
    <p>
      내용
    </p>
      </div>
      
    </div>
  );
}

export default App;
