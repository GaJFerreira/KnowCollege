package com.example.demo.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import com.example.demo.entity.Curso;
import com.example.demo.dto.CursoCardDto;
import com.example.demo.dto.CursoDescricaoDto;

import java.util.List;

@Mapper
public interface CursoDescricaoMapper {
    CursoDescricaoMapper INSTANCE = Mappers.getMapper(CursoDescricaoMapper.class);

    CursoDescricaoDto cursoToCursoDescricaoDTO(Curso curso);

    List<CursoDescricaoDto> cursoToCursoDescricaoDTOList(List<Curso> cursos);
}
