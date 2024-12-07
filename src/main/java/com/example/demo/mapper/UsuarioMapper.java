package com.example.demo.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.example.demo.dto.UsuarioDto;
import com.example.demo.entity.Usuario;

@Mapper
public interface UsuarioMapper {
    UsuarioMapper INSTANCE = Mappers.getMapper(UsuarioMapper.class);

    UsuarioDto toDto(Usuario u);

    Usuario toModel(UsuarioDto u);

    List<UsuarioDto> toModel(List<UsuarioDto> usuarios);
}
