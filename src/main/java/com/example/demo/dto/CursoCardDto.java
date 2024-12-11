package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CursoCardDto {
    private Long id;
    private String nome;
    private String descricao;
    private String fotoUrl;
    private double preco;
}
