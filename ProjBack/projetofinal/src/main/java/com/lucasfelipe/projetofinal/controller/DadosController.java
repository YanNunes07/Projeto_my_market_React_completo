package com.lucasfelipe.projetofinal.controller;

import com.lucasfelipe.projetofinal.model.DadosEntity;
import com.lucasfelipe.projetofinal.repository.DadosRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping ("/dados")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class DadosController {

    @Autowired
    private DadosRepository dadosRepository;


    //salvar diversos clientes
   //buscar no banco de dados TODOS os clientes
    @GetMapping
    public ResponseEntity <List<DadosEntity>> findAll (){
        return new ResponseEntity<List<DadosEntity>>(
                (List<DadosEntity>) this.dadosRepository.findAll(),
                new HttpHeaders(), HttpStatus.OK);
    }


    //buscar um cliente no banco de dados
    @GetMapping (path = "/{id}")
    public ResponseEntity<DadosEntity> findById (@PathVariable ("id") long id ){
        if (this.dadosRepository.findById(id).isPresent()){
            return new ResponseEntity<DadosEntity>(
                    this.dadosRepository.findById(id).get(),
                    new HttpHeaders(), HttpStatus.OK);
        }
        return new ResponseEntity<DadosEntity>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<DadosEntity> save (@RequestBody DadosEntity dadosEntity) {
        System.out.println("CHEGOU NA API " + dadosEntity);

        return new ResponseEntity<DadosEntity> (
                this.dadosRepository.save(dadosEntity),
                new HttpHeaders(),
                HttpStatus.CREATED
        );

    }

    //método para salvar
    @PostMapping
    public ResponseEntity<DadosEntity> cadastrar (@RequestBody DadosEntity dadosEntity){
        return new ResponseEntity<DadosEntity>(
                this.dadosRepository.save(dadosEntity), new HttpHeaders(), HttpStatus.CREATED);
    }


    //método para atualizar; analisa se existe e depois salva
    @PutMapping (value = "/{id}")
    public ResponseEntity<DadosEntity> atualizar (@PathVariable("id") long id,
                                                  @RequestBody DadosEntity dadosEntity) throws Exception{

        if (id == 0 || !this.dadosRepository.existsById(id)){
            throw new Exception("O código digitado não foi encontrado ou não existe");
        }
        return new ResponseEntity<DadosEntity>(
                this.dadosRepository.save(dadosEntity),
                new HttpHeaders(), HttpStatus.OK);
    }


    //método para deletar
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<DadosEntity> deletar (@PathVariable("id") long id){
        this.dadosRepository.deleteById(id);
        return new ResponseEntity<DadosEntity>(new HttpHeaders(), HttpStatus.OK);
    }
}
