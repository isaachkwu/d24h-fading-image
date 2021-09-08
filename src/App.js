import logo from './logo.svg';
import './App.css';
import FadingImage from './FadingImage'
import ImageA from './img/a.jpg'
import ImageB from './img/b.jpg'
import ImageC from './img/c.jpg'
import ImageD from './img/d.jpg'

function App() {
  const images = [
    ImageA, ImageB, ImageC, ImageD
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FadingImage 
          style={{
            height: '500px',
            width: '100%'
          }}
          images={images}/>
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
