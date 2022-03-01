package com.lucasfelipe.projetofinal.repository;

import com.lucasfelipe.projetofinal.model.DadosEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DadosRepository extends CrudRepository <DadosEntity, Long> {

}
