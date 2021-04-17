import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css';
import Auth from './components/Auth/Auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Profile from "./components/Profile/Profile";
import RecoverPassword from "./components/Profile/RecoverPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/recover_password" component={RecoverPassword} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
