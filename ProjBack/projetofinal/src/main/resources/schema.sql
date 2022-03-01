CREATE TABLE cliente(
  id_cliente int(11) not null auto_increment,
  nome varchar(20) not null,
  sobrenome varchar(30) not null,
  cpf varchar(20) not null,
  contato int(11) not null,
  email varchar(50) not null,
  senha varchar(3   0) not null,
  rua varchar(50) not null,
  numero varchar(100) not null,
  bairro varchar(50) not null,
  cidade varchar(20) not null,
  estado varchar(20) not null,
  primary key(id_cliente)
);
