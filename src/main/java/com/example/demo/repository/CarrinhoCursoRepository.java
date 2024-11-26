package com.example.demo.repository;

import com.example.demo.entity.CarrinhoCurso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarrinhoCursoRepository extends JpaRepository<CarrinhoCurso, Long> {
    // Métodos personalizados, se necessário
}
