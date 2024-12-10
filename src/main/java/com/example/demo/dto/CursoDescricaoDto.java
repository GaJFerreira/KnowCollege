package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CursoDescricaoDto {
    private String nome;
    private String descricao;
    private String descricaoDetalhada;
    private int cargaHoraria;
    private String categoria;
    private double preco;
    private String fotoUrl;
}
