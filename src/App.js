import logo from './logo.svg';
import './App.css';
import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: '5FzstLfkTAZbcIq9n5a_3wOibQPoUe0pwXrD51ongIQ'
}); 

console.log(unsplash.photos.get({ 
	photoId: 'mtNweauBsMQ'
}));

let ttt = unsplash.photos.get({ 
	photoId: 'mtNweauBsMQ'
});

console.log(ttt.response);



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
	
      </header>
    </div>
  );
}

export default App;


//	<div><img src={ttt} className="ttt-logo" alt="ttt" />
//		</div>