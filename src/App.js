import './App.css';
import React from 'react';
import Data from './data';
import Users from './components/Users';
import {BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';

function App() {

  return (
    <Router>
       <div>
        <nav class="navbar navbar-expand navbar-light bg-dark">
            <ul class="nav navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="/img"><Link to="/img">Image</Link><span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/no-img"><Link to="/no-img">No-Image</Link></a>
                </li>
            </ul>
        </nav>
        <Switch>
          <div className="App">
            {Object.keys(Data.results).map((item) => (
              (Data.results[item].picture.large)?
              <Route path="/img">
                <Users name={Data.results[item].name.first+" "+Data.results[item].name.last} email={Data.results[item].email} image={Data.results[item].picture.large} />
              </Route>
              :
              <Route path="/no-img">
                <Users name={Data.results[item].name.first+" "+Data.results[item].name.last} email={Data.results[item].email} image={"d"} />
              </Route>
            ))}
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
