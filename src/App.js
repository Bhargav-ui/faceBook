import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/global.css';
import Auth from './components/Auth/Auth';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';


function App() {
  return (
    <>

      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Auth} />
            <Route exact path="/home" component={Home} />
          </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
