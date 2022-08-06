import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import RoutesManager from './routes';

function App() {
  return (
    <div className="App">
      <Router>
      <main className="AppBody">
          <RoutesManager/>
        </main>
      </Router>
    </div>
  );
}

export default App;
