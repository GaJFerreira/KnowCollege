package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "compra")
@Data // Gera getters, setters, toString, equals e hashCode
@NoArgsConstructor // Construtor sem argumentos, necessário para o JPA
@AllArgsConstructor // Construtor com todos os campos
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
}
