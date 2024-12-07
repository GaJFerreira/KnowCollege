package com.example.demo.dto;

import java.util.List;

import lombok.Data;

@Data
public class CompraDto {

    private Long id;
    private Long usuarioId; // ID do usuário que fez a compra
    private String status; // Status da compra (pago, pendente, falha)
    private double valorTotal;
    private String dataCompra;
    private List<Long> cursosIds; // Lista dos IDs dos cursos comprados

}
