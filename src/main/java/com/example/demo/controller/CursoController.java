package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.dto.CursoCardDto;
import com.example.demo.dto.CursoDescricaoDto;
import com.example.demo.dto.CursoDto;
import com.example.demo.service.CursoService;

@RestController
@RequestMapping("/curso")
public class CursoController {

    @Autowired
    private CursoService cursoService;

    @GetMapping("/biblioteca")
    public List<CursoCardDto> listarCursosCard() {
        return cursoService.getCursosCard();
    };

    @GetMapping("/inicio")
    public List<CursoCardDto> listar4CursosCard() {
        return cursoService.get4CursosCard();
    };

    @PostMapping(value = "/cadastro", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<?> cadastrarCurso(
            @ModelAttribute CursoDto cursoDto,
            @RequestParam("foto") MultipartFile foto) {

        try {
            cursoService.salvarCurso(cursoDto, foto);
            return ResponseEntity.status(HttpStatus.CREATED).body("Curso cadastrado com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao cadastrar curso: " + e.getMessage());
        }
    }

    @GetMapping("/meusCursos")
    public ResponseEntity<List<CursoCardDto>> listarMeusCursos(@RequestParam Long usuarioId) {
        try {
            List<CursoCardDto> meusCursos = cursoService.getMeusCursosCard(usuarioId);
            return ResponseEntity.ok(meusCursos);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> CursoDescricao(@PathVariable Long id) {
        try {
            CursoDescricaoDto cursoDescricao = cursoService.getCursoDescricao(id);
            return ResponseEntity.ok(cursoDescricao);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro ao buscar descrição do curso.");
        }
    }

}
