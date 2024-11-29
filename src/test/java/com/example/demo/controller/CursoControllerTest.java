package com.example.demo.controller;

import com.example.demo.controller.CursoController;
import com.example.demo.dto.CursoDto;
import com.example.demo.service.CursoService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.multipart.MultipartFile;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(CursoController.class)
class CursoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void cadastrarCurso_DeveRetornarSucesso() throws Exception {
        CursoDto cursoDto = new CursoDto();
        cursoDto.setNome("Curso Teste");

        MultipartFile fotoMock = Mockito.mock(MultipartFile.class);

        mockMvc.perform(multipart("/curso/cadastro")
                        .file("foto", "conteudo_da_imagem".getBytes())
                        .param("nome", "Curso Teste")
                        .param("descricao", "Descrição Teste")
                        .param("categoria", "Categoria Teste")
                        .param("cargaHoraria", "10")
                        .param("preco", "100.0")
                        .contentType(MediaType.MULTIPART_FORM_DATA))
                .andExpect(status().isCreated())
                .andExpect(content().string("Curso cadastrado com sucesso!"));
    }
}
