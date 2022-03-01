package com.lucasfelipe.projetofinal.model;
import lombok.*;
import org.springframework.stereotype.Component;
import javax.persistence.*;

@Component

@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@ToString

@Entity
@Table(name="dados")

public class DadosEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column (name = "id_cliente")
    private long id;

    @Column(name = "nome")
    private String nome;

    @Column (name = "sobrenome")
    private  String sobrenome;

    @Column(name = "cpf")
    private String cpf;

    @Column (name= "contato")
    private String contato;

    @Column(name = "email")
    private String email;

    @Column (name = "senha")
    private String senha;

    @Column (name = "rua")
    private String rua;

    @Column (name = "numero")
    private int numero;

    @Column (name = "bairro")
    private String bairro;

    @Column (name = "cidade")
    private String cidade;


    @Column (name = "estado")
    private String estado;
}
