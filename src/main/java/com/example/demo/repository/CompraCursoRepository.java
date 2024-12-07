package com.example.demo.repository;

import com.example.demo.entity.CompraCurso;
import com.example.demo.entity.Curso;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CompraCursoRepository extends JpaRepository<CompraCurso, Long> {
    // Métodos personalizados, se necessário
        @Query("SELECT cc.curso FROM CompraCurso cc WHERE cc.compra.usuario.id = :usuarioId")
            List<Curso> findCursosByUsuarioId(@Param("usuarioId") Long usuarioId);
    
}
