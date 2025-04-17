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

      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "1400px",
          paddingLeft: "18px",
          paddingRight: "18px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
