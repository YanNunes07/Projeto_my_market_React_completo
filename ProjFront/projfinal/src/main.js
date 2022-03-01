import React from "react";
import Home from "./components/home/home";
import Client from "./components/cliente/clients"
import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom'
import Login from "./components/login/login";

const Main = () => (
  <main>
    <Container>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/client' component={Client}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </Container>
  </main>  
);

export default Main;