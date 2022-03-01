import React, { Component } from "react";
import { Row, Col, Card } from 'react-materialize';
import './home.css';



const Home = () => (

  <Row>
     
    <Col m={12} s={12}>
        <Card>
        <div className="inicio">

        
        </div>
        </Card>
         
    
    </Col>
    <br></br>
    <Col m={22} s={20}>
       <h3>Nossas lojas</h3>
        <Card>
          
          <h5>Região Sul</h5>
            
            <p>Se você mora na região sul da cidade, perto dos grandes comércios, centros culturais e shoppings,
                        temos nossa loja parceira com uma grande variedade de produtos para diversos gostos.</p>
            <br/>
            <div className="meio">
            
            </div>

            <h5>Interior</h5>
            <p>Se você mora afastado da zona central da cidade, fora da metrópole e dos grandes comércios, temos
                        uma loja parceira que pode entregar seus produtos na porta da sua casa.
            </p>
            <br></br>

            <div className="fim">

            </div>
            
            <h5>Bio</h5>
            <p>Com o objetivo de facilitar e agilizar o seu dia-a-dia,
                        oferecemos um serviço online de supermercados, com garantia de qualidade no serviço e entregas
                        em 1 dia.</p>
          <br></br>
        </Card>
        
    </Col>
    <br></br>
    
    <Col m={22} s={20}>

        <Card>
          <div>
            <h5>Sobre o projeto</h5>
            <p>Criamos o projeto My Market com o intuito de facilitar a sua vida no
                        dia-a-dia, agilizando uma das diversas tarefas diárias que temos na nossa vida. Baseado nos
                        modelos atuais de delivery de comida, criamos o serviço visando atender o maior número possível
                        de pessoas dos mais variados perfis que existem, desde crianças a idosos.
                        Por conta do momento de pandemia, muitas vezes temos os horários de mercado restringidos, além
                        do enorme risco de contaminação ao se deslocar de sua casa ao estabelecimento. O MyMarket
                        facilita sua vida para que você tenha mais tempo com o que realmente importa, além de preservar
                        sua saúde nesse momento tão delicado.</p>
            <br/>
          </div>
          <br></br>
        </Card>
        
    </Col>

    <Col m={22} s={20}>
         
       <Card>
       <div class="container">
        <div class="section">

          
            <div class="row">
                <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center red-text"><i class="material-icons">flash_on</i></h2>
                        <h5 class="center">Entregas rápidas em até 1 dia útil</h5>

                        <p class="bold center-align">Ao adquirir sua cesta de produtos, será enviado ao mercado credenciado uma
                            lista com os itens
                            selecionados, e no dia seguinte nossa equipe de entregadores irá levar até sua casa com
                            segurança e agilidade.</p>
                    </div>
                </div>

                <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center red-text"><i class="material-icons">attach_money</i></h2>
                        <h5 class="center">Preço justo</h5>

                        <p class="bold center-align">Ao comprar conosco, você terá 100% de certeza que está pagando o preço mais
                            baixo possível pelos seus produtos. Fazemos um comparativo dos preços de cada item
                            selecionado e indicamos o valor mais baixo para que você possa economizar, além de
                            notificarmos diariamente sobre as ofertas disponíveis.</p>
                    </div>
                </div>

                <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center red-text"><i class="material-icons">add_shopping_cart</i></h2>
                        <h5 class="center">Muita variedade e itens especiais</h5>

                        <p class="bold center-align">Contamos com uma lista de produtos da mais alta qualidade e com muita variedade
                            de marcas, valores e embalagens, além da opção de encomenda de itens que possam
                            estar indisponíveis no momento.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
       </Card>

    </Col>
  </Row>
);

export default Home;