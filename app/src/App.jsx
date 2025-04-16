import "./App.css";
import { Link, Outlet } from "react-router";

function App() {
  return (
    <div className="test">
      <nav className="nav-wrapper">
        <Link to="/unlayer">Go to "Unlayer" template</Link>
        <Link to="/grapes">Go to "GrapesJS" template</Link>
        <Link to="/other">Go to other email builders</Link>
      </nav>

      <div style={{ margin: "0 520px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
