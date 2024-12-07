package com.example.demo.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class UsuarioDto {
    private Long id;
    private String nome;
    private String email;
    private String senha;
    private String tipo; // Aluno ou Professor
    private String status; // ativo ou inativo
}
