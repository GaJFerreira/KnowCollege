package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name = "carrinho_curso")
public class CarrinhoCurso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "carrinho_id")
    private Carrinho carrinho;

    @ManyToOne
    @JoinColumn(name = "curso_id")
    private Curso curso;

    private int quantidade;
    private double precoUnitario;

    // Getters e Setters
}
