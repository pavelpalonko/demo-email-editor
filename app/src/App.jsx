import "./App.css";
import { Link } from "react-router";

function App() {
  return (
    <div className="test">
      <nav className="nav-wrapper">
        <Link to="/test">go to test</Link>
        <Link to="/test">go to test</Link>
        <Link to="/test">go to test</Link>
      </nav>
    </div>
  );
}

export default App;
