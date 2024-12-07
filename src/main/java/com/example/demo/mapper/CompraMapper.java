package com.example.demo.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import com.example.demo.dto.CompraDto;
import com.example.demo.entity.Compra;

@Mapper(componentModel = "spring")
public interface CompraMapper {

    CompraMapper INSTANCE = Mappers.getMapper(CompraMapper.class);

    @Mapping(target = "compraCursos", ignore = true) // Ignora a associação automática de compraCursos
    Compra compraDtoToCompra(CompraDto compraDto);

    CompraDto toDto(Compra compra);

    // Se houver necessidade de um método específico para cursos, pode adicionar
    // aqui
}
