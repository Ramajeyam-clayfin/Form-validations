import React,{Component} from 'react';
import { Route,NavLink,Switch,Redirect,withRouter } from "react-router-dom";
import Login, {fakeAuth} from './Login'
import HomePage from './HomePage'
import Products from './Products'
import Admin from './Admin'
import AboutUs from './AboutUs'
import PrivateRoute from './PrivateRoute'


class WithRouterExample extends Component {
    
      componentDidMount() {
        // will trigger the callback function whenever a new Route renders a component(as long as this component stays mounted as routes change)
        this.props.history.listen(() => {
          // URL
          console.log('URL : ', this.props.history.location.pathname);
        });
      }
    
      render() {
        return (
          <div>
              <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
           
                 <li>
                    <NavLink to="/login" activeStyle={{color:'blue'}}> {fakeAuth.isAuthenticated === false?'Login':'Logout'}</NavLink>
               </li>
           
            <li>
              <NavLink to="/" exact activeStyle={{color:'blue'}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/products" activeStyle={{color:'blue'}}>Products</NavLink>
            </li>
            <li>
              <NavLink to="/admin" activeStyle={{color:'blue'}}>Admin</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus" activeStyle={{color:'blue'}}>About Us</NavLink>
            </li>
          </ul>
        </nav>
        

        <Switch>
            <Route  path="/login" component={Login}/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/products" component={Products}/>
            <PrivateRoute path="/admin" component={Admin}/>
            <Route path="/aboutus" render={(props) => <AboutUs {...props}/>} />
            <Route> <Redirect to="/" /> </Route> 
        </Switch>
    </div>
        );
      }
    }
    
export default withRouter(WithRouterExample);
