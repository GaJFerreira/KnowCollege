package com.example.demo.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import com.example.demo.entity.Curso;
import com.example.demo.dto.CursoCardDto;

import java.util.List;

@Mapper
public interface CursoCardMapper {
    CursoCardMapper INSTANCE = Mappers.getMapper(CursoCardMapper.class);

    CursoCardDto cursoToCursoCardDTO(Curso curso);

    List<CursoCardDto> cursoToCursoCardDTOList(List<Curso> cursos);
}
