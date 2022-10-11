import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = {
    title : "성서 맛집",
    desc : "덴코쿠"
  }
  let [a,b] = useState('use State Useing');
  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style={{color : 'red'}}> 진민강 </h4>
      </div>
      <div className='list'>
    <h4>
      {a}
    </h4>
    <p>
      {b}
    </p>
      </div>
      <h4>{post.title}</h4>
    </div>
  );
}

export default App;
