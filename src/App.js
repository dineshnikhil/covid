import './App.css';
import Nav from './compounents/Nav';
import Home from './compounents/Home';

function App() {
  return (
    <div className="App bg-bgcolor">
      <Nav />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
