package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Curso;

public interface CursoRepository extends JpaRepository<Curso, Long> {

    List<Curso> findTop4ByOrderByNomeAsc();

}
