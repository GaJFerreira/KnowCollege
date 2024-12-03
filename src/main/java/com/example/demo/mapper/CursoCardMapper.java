package com.example.demo.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import com.example.demo.entity.Curso;
import com.example.demo.dto.CursoCardDto;


@Mapper
public interface CursoCardMapper {
    CursoCardMapper INSTANCE = Mappers.getMapper(CursoCardMapper.class);

    // Mapeamento entre a entidade Curso e o DTO CursoCardDTO
    CursoCardDto cursoToCursoCardDTO(Curso curso);
}
