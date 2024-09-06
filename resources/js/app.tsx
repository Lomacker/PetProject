import "./bootstrap";
import "../css/app.css";

import ReactDOM from "react-dom/client";
import Home from "./components/Home";

ReactDOM.createRoot(document.getElementById("app")).render(<Home test1={'test11'} test2={12} />);
