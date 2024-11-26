package com.example.demo.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.example.demo.dto.UsuarioDto;
import com.example.demo.entity.Usuario;

@Mapper
public interface UsuarioMapper {
    UsuarioMapper INSTANCE = Mappers.getMapper(UsuarioMapper.class);
    UsuarioDto toDto(Usuario u);
    Usuario toModel(UsuarioDto u);
}
