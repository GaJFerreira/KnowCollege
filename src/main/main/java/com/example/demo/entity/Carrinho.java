package com.example.demo.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "carrinho")
public class Carrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    private String status;  // pendente, confirmado, cancelado

    @OneToMany(mappedBy = "carrinho")
    private Set<CarrinhoCurso> carrinhoCursos;

    // Getters e Setters
}
