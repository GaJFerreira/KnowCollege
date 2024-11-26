package com.example.demo.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "compra")
public class Compra {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "usuario_id")
    private Usuario usuario;

    private String status;  // pago, pendente, falha
    private double valorTotal;
    private String dataCompra;

    @OneToMany(mappedBy = "compra")
    private Set<CompraCurso> compraCursos;

    // Getters e Setters
}
