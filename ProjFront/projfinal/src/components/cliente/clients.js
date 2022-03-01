import React, { useEffect, useState } from "react";
import Cliente from "../../services/cliente";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card, Input, Button } from 'react-materialize';

/* componente para  cadastrar e  buscar cliente*/

export default function Client() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [contato, setContato] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  
  const [clientes, setClientes] = useState([]);
  
  useEffect(() => {
    buscar()
  });

  function handleNomeChange(evt) {
    setNome(evt.target.value);
  }

  function handleSobrenomeChange(evt) {
    setSobrenome(evt.target.value);
  }

  function handleCpfChange(evt) {
    setCpf(evt.target.value);
  }

  function handleContatoChange(evt) {
    setContato(evt.target.value);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handleSenhaChange(evt) {
    setSenha(evt.target.value);
  }

  function handleRuaChange(evt) {
    setRua(evt.target.value);
  }

  function handleNumeroChange(evt) {
    setNumero(evt.target.value);
  }

  function handleBairroChange(evt) {
    setBairro(evt.target.value);
  }

  function handleCidadeChange(evt) {
    setCidade(evt.target.value);
  }

  function handleEstadoChange(evt) {
    setEstado(evt.target.value);
  }

  

  function clearFields() {
    setNome('');
    setSobrenome('');
    setCpf('');
    setContato('');
    setEmail('');
    setSenha('');
    setRua('');
    setNumero('');
    setBairro('');
    setCidade('');
    setEstado('');

    
  }

  async function cadastrar() {
    let client = {
      nome: nome,
      sobrenome: sobrenome,
      cpf: cpf,
      contato: contato,
      email: email,
      senha: senha,
      rua: rua,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      estado: estado
    }

    const response = await Cliente.save(client);

    if (response.status === 201) {
      alert('Cadastrado com sucesso !')
      clearFields();
    } else {
      alert('Erro ao cadastrar...')
    }
  }

  async function buscar() {
    const response = await Cliente.findAll();
    setClientes(response.data);
  }

  return (
    <>
      <Row>
        <Col m={12} s={20}>
          <h5>Preencha os campos abaixo:</h5>
          <Card>
            <Row>
                <Input 
                  placeholder="Ana " 
                  type="text" 
                  label="Nome"
                  s={12}
                  value={nome}
                  onChange={handleNomeChange} />
                <Input 
                    placeholder="da Silva" 
                    type="text" 
                    label="Sobrenome:" s={12} 
                    value={sobrenome}
                    onChange={handleSobrenomeChange}
                    
                    /> 

                <Input
                  placeholder="xxx-xxx-xxx/xx"
                  type="text"
                  label="Cpf"
                  s={12}
                  value={cpf}
                  onChange={handleCpfChange} />
                
                <Input 
                  placeholder="987654321" 
                  type="number" 
                  label="Contato" 
                  s={12} 
                  value={contato}
                  onChange={handleContatoChange}/>
              
              <Input
                placeholder="lorem@ipsum.com"
                type="email"
                label="Email"
                s={12}
                value={email}
                onChange={handleEmailChange} />


              <Input id="password" 
                type="password" 
                class="validate" 
                label=" Senha" 
                s={12} 
                value={senha}
                onChange={handleSenhaChange}/>


              

              <h2>Endereço:</h2>

              <Input placeholder="Rua xyz" 
              type="text" 
              label="Rua:" 
              s={12} 
              value={rua}
              onChange={handleRuaChange}/>

              <Input placeholder="Informe o numero da casa" 
              type="text" 
              label="Numero:" 
              s={12} 
              value={numero}
              onChange={handleNumeroChange}/>

              <Input placeholder="Informe seu bairro" 
              type="email" 
              label="Bairro:" 
              s={12} 
              value={bairro}
              onChange={handleBairroChange}/>

            
              <Input placeholder="Informe sua cidade" 
              type="text" 
              label="Cidade:" 
              s={12} 
              value={cidade}
              onChange={handleCidadeChange}/> 

              <Input placeholder="Informe seu estado" 
              type="text" 
              label="Estado:" 
              s={12}
              value={estado}
              onChange={handleEstadoChange}/>
                
              <Col s={12} m={12}>
                <Button waves='light' className="right grey darken-2" onClick={cadastrar}>CADASTRAR</Button>
                <Button waves='light' className="right grey darken-2" onClick={clearFields}>limpar</Button>
              </Col>
            </Row>
          </Card>
          <Card>

        <Card>
          <Row>
           
            <thead>
                <tr>
                  <td>código</td>
                  <td>nome</td>
                  <td>Sobrenome</td>
                  <td>cpf</td>
                  <td>contato</td>
                  <td>email</td>
                  <td>senha</td>
                  <td>rua</td>
                  <td>numero</td>
                  <td>bairro</td>
                  <td>cidade</td>
                  <td>estado</td>
                </tr>
              </thead>
              <tbody>
              { clientes.length > 0
                ? 
                (
                  clientes.map((cliente) =>
                    <tr key={cliente.id}>
                      <td>{cliente.id}</td>
                      <td>{cliente.nome}</td>
                      <td>{cliente.sobrenome}</td>
                      <td>{cliente.cpf}</td>
                      <td>{cliente.contato}</td>
                      <td>{cliente.email}</td>
                      <td>{cliente.senha}</td>
                      <td>{cliente.rua}</td>
                      <td>{cliente.numero}</td>
                      <td>{cliente.bairro}</td>
                      <td>{cliente.cidade}</td>
                      <td>{cliente.estado}</td>
                    </tr>
                  )
                ) 
                : (
                  <div>Não tem nenhum cliente</div>
                )
              }
              </tbody>
            </Row>
        </Card> 
             
               
  </Card>
);
        </Col>
      </Row>   
    </>
  );
}
