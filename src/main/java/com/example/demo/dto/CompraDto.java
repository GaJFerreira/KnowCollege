package com.example.demo.dto;

import java.util.List;

import lombok.Data;

@Data
public class CompraDto {

    private Long id;
    private Long usuarioId;
    private String status;
    private double valorTotal;
    private String dataCompra;
    private List<Long> cursosIds;

}
