import React from "react";
import "./App.css";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import DragBox from "./drag-box/DragBox";
import RectangleSelection from "./RectangleSelection";
import RenderItems from "./drag-box/RenderItems";
import TransitionExample from "./react-transition-group/TransitionExample";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/drag-box">Drag Box</Link>
            </li>
            <li>
              <Link to="/rectangle-selection">Rectangle Selection</Link>
            </li>
            <li>
              <Link to="/render-items">Render Items</Link>
            </li>
            <li>
              <Link to="/react-transition-group-transition">Transition</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/box-drag">
            <DragBox />
          </Route>
          <Route path="/rectangle-selection">
            <RectangleSelection />
          </Route>
          <Route path="/react-transition-group-transition">
            <TransitionExample />
          </Route>
          <Route path="/render-items">
            <RenderItems />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
