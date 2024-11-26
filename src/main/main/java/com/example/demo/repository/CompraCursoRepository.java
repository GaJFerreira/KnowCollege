package com.example.demo.repository;

import com.example.demo.entity.CompraCurso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompraCursoRepository extends JpaRepository<CompraCurso, Long> {
    // Métodos personalizados, se necessário
}
