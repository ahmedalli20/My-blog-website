
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
 import BlogDetails from './components/BlogDetails';
import CreateBlogs from "./components/CreateBlogs";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Login from './components/Login';



const App = () => {

  
  return (
    <Router>
      <div>
        <Navbar  />
        <div>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/Login" component={ Login} />
            <Route path="/CreateBlogs" component={CreateBlogs} />
            <Route path="/blogs/:id/" component={BlogDetails}   />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
