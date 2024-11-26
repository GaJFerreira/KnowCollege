package com.example.demo.entity;

import javax.persistence.*;

@Entity
@Table(name = "compra_curso")
public class CompraCurso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "compra_id")
    private Compra compra;

    @ManyToOne
    @JoinColumn(name = "curso_id")
    private Curso curso;

    private double precoPago;

    // Getters e Setters
}
