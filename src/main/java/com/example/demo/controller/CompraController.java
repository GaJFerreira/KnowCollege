package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CompraDto;
import com.example.demo.service.CompraService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/compra")
public class CompraController {

    @Autowired
    CompraService compraService;

    @PostMapping(value = "/finalizarCompra")
    public ResponseEntity<?> finalizarCompra(@RequestBody CompraDto compraDto) {
        try {
            // Chama o serviço para processar a compra
            compraService.finalizarCompra(compraDto);

            // Retorna a resposta com sucesso
            return ResponseEntity.status(HttpStatus.CREATED).body("Compra finalizada com sucesso!");
        } catch (Exception e) {
            // Em caso de erro, retorna uma resposta de erro
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao finalizar compra: " + e.getMessage());
        }
    }

    @GetMapping(value = "/Minhas Compras")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }

}
