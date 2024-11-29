package com.example.demo.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "compra")
@Data
@NoArgsConstructor
@AllArgsConstructor
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

    @ManyToOne
    @JoinColumn(name = "carrinho_id")  // Relaciona a compra ao carrinho
    private Carrinho carrinho;

    @OneToMany(mappedBy = "compra")
    private Set<CompraCurso> compraCursos; // Cursos comprados
}
