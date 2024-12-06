package com.example.demo.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.example.demo.dto.CursoDto;
import com.example.demo.entity.Curso;

@Mapper
public interface CursoMapper {
    CursoMapper INSTANCE = Mappers.getMapper(CursoMapper.class);
    CursoDto toDto(Curso curso);
    Curso toModel(CursoDto cursoDto);
}