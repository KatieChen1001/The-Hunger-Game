import React from "react";
import Form from "./Components/Form.jsx";
import Report from "./Components/Report.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Form} />
        <Route path="/hungerReport/:id" component={Report} />
      </div>
    </Router>
  );
}
