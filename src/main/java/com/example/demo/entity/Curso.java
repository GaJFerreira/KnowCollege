package com.example.demo.entity;

import javax.persistence.*;
import java.util.Set;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Entity
@Table(name = "curso")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String descricao;
    private int cargaHoraria;
    private String categoria;
    private double preco;
    private String status; // ativo ou inativo

    @ManyToOne
    @JoinColumn(name = "professor_id")
    private Usuario professor;

    @OneToMany(mappedBy = "curso")
    private Set<CarrinhoCurso> carrinhoCursos;

    @OneToMany(mappedBy = "curso")
    private Set<CompraCurso> compraCursos;
}
