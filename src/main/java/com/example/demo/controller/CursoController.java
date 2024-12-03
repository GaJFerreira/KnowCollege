package com.example.demo.controller;

import com.example.demo.dto.CursoCardDto;
import com.example.demo.dto.CursoDto;
import com.example.demo.service.CursoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/curso")
public class CursoController {

    @Autowired
    private CursoService cursoService;


    @GetMapping("/biblioteca")
    public List<CursoCardDto> listarCursosResumo() {
        return cursoService.getCursosResumo();
    }

    @PostMapping(value = "/cadastroCurso", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> cadastrarCurso(
            @RequestParam("nome") String nome,
            @RequestParam("descricao") String descricao,
            @RequestParam("categoria") String categoria,
            @RequestParam("cargaHoraria") int cargaHoraria,
            @RequestParam("preco") double preco,
            @RequestParam("foto") MultipartFile foto) {

        // Criação e preenchimento do DTO
        CursoDto cursoDto = new CursoDto();
        cursoDto.setNome(nome);
        cursoDto.setDescricao(descricao);
        cursoDto.setCategoria(categoria);
        cursoDto.setCargaHoraria(cargaHoraria);
        cursoDto.setPreco(preco);

        try {
            cursoService.salvarCurso(cursoDto, foto);
            return ResponseEntity.status(HttpStatus.CREATED).body("Curso cadastrado com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao cadastrar curso: " + e.getMessage());
        }
    }
}

/*
 * @PostMapping(value = "/cadastro", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
public ResponseEntity<?> cadastrarCurso(
        @ModelAttribute CursoDto cursoDto, 
        @RequestParam("foto") MultipartFile foto) {

    // Agora o cursoDto está automaticamente preenchido com os dados da requisição
    try {
        cursoService.salvarCurso(cursoDto, foto);
        return ResponseEntity.status(HttpStatus.CREATED).body("Curso cadastrado com sucesso!");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao cadastrar curso: " + e.getMessage());
    }
}

 */

