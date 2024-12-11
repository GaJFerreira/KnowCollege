package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
