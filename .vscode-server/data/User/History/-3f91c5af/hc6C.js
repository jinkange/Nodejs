import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = {
    title : "성서 맛집2",
    desc : "덴코쿠"
  }
  let [title,b] = useState('use State Useing');
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
      </div>
      
    </div>
  );
}

export default App;