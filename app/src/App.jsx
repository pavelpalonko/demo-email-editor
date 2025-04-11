import "./App.css";
import { Link } from "react-router";

function App() {
  return (
    <div className="test">
      <nav className="nav-wrapper">
        <Link to="/test">go to test 1 </Link>
        <Link to="/test">go to test 2</Link>
        <Link to="/test">go to test 3</Link>
      </nav>
    </div>
  );
}

export default App;
