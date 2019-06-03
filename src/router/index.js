import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from 'src/view/Home';

function MyRouter() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  )
}
export default MyRouter;
