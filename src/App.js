import logo from './devour_logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming soon, tools for devour speedrunning.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/@Affinity001/videos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Speedy Runs
        </a>
      </header>
    </div>
  );
}

export default App;
