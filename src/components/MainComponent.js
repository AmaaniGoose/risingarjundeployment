import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Login from './LoginComponent';

class Main extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const HomePage = () => {
          return(
            <Home
            />
          );
    }
    return (
      <div>
        <Header />
              <Switch location={this.props.location}>
                <Route path='/home' component={HomePage} />
                <Route path='/login' component={Login} />
                <Redirect to="/home" />
              </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
