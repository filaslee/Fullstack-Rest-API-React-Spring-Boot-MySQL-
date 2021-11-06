
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import AddNewBlog from './components/AddNewBlog';
import Update from './components/Update';
import EachBlog from './components/EachBlog';
import PageNotFound from './components/PageNotFound';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/create">
              <AddNewBlog />
            </Route>
            <Route path="/blog/:id">
              <EachBlog />
            </Route>
            <Route path="/blogupdate/:id">
              <Update />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
