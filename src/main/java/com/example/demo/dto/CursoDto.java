package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CursoDto {
    private Long id;
    private String nome;
    private String descricao;
    private String descricaoDetalhada;
    private int cargaHoraria;
    private String categoria;
    private double preco;
    private String status;
    private String fotoUrl;
}
