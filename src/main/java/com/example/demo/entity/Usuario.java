package com.example.demo.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String email;
    private String senha;
    private String tipo;  // Aluno ou Professor
    private String status;  // ativo ou inativo

    @OneToMany(mappedBy = "usuario")
    private Set<Carrinho> carrinhos;

    @OneToMany(mappedBy = "usuario")
    private Set<Compra> compras;

    // Getters e Setters
}
