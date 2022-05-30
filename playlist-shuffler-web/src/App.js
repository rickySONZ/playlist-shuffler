import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Login } from './components/Login/Login';

function App(props) {

  const authenticatedUser = !!props.currentUser

  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
