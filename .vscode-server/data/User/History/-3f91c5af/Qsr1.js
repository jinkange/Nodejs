import logo from './logo.svg';
import './App.css';

function App() {

  let post = {
    title : "성서 맛집",
    desc : "덴코쿠"
  }

  return (
    <div className="App">
      <div className = "black-nav">
        <h4 style={{color : 'red'}}> 진민강 </h4>
      </div>
      <div className='list'>
    <h4>
      글제목
    </h4>
    <p>
      내용
    </p>
      </div>
      <h4>{post.title}</h4>
    </div>
  );
}

export default App;
