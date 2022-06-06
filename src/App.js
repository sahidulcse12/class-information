
import './App.css';
import Home from './component/Home/Home';
import Subscription from './component/Subscription/Subscription';
import NotFound from './component/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignIn from './component/SignIn/SignIn';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <Route path="/subscription">
            <Subscription />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
