import React from "react";
import { Row, Form, Input, Card, Col } from 'react-materialize';
import { Route } from "react-router";
import Client from "../cliente/clients";



const Login = () => (
    <Row>
    <Col m={12} s={10}>
        
        <Card>
          
          <Row>
              <h5>Informe seus dados</h5> 
              
              <Input placeholder="lorem@ipsum.com" type="email" label="Email:" s={12} />
              <Input id="password" type="password" class="validate" label="Senha" s={12} />
            
           </Row>

           <div class="footer">
             <Route path='/Cliente' component={Client}/>
             <div class="social-field continuar">
             <a class="waves-effect waves-light btn" href="/dados"><i class="material-icons right">trending_flat</i>Continuar</a>
            
           </div>
            
            
            </div>
        </Card>
    </Col>
  </Row>
    
);

export default Login;