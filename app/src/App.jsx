import "./App.css";
import { Link, Outlet } from "react-router";

function App() {
  return (
    <div className="test">
      <nav className="nav-wrapper">
        <Link to="/unlayer">Go to "unlayer" template</Link>
        <Link to="/test">go to test 2</Link>
        <Link to="/test">go to test 3</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
