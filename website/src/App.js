import checkmark1 from './logo2.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={checkmark1} className="App-logo" alt="logo" />
        <h3>Medcalf Software Solutions is under construction</h3>
        <i>
          however ...
        </i>
        <span><a
          className="App-link"
          href="https://www.benmedcalf.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          benmedcalf.com
        </a> might have what you're after.</span>
      </header>
    </div>
  );
}

export default App;
