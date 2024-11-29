package com.example.demo.service;

import com.example.demo.dto.CursoDto;
import com.example.demo.entity.Curso;
import com.example.demo.repository.CursoRepository;
import com.example.demo.service.CursoService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CursoServiceTest {

    @Mock
    private CursoRepository cursoRepository;

    @InjectMocks
    private CursoService cursoService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void salvarCurso_DeveSalvarComSucesso() throws IOException {
        CursoDto cursoDto = new CursoDto();
        cursoDto.setNome("Curso Teste");
        cursoDto.setDescricao("Descrição Teste");
        cursoDto.setCategoria("Categoria Teste");
        cursoDto.setCargaHoraria(10);
        cursoDto.setPreco(100.0);

        MultipartFile fotoMock = mock(MultipartFile.class);
        when(fotoMock.isEmpty()).thenReturn(false);
        when(fotoMock.getOriginalFilename()).thenReturn("imagem.png");
        when(fotoMock.getContentType()).thenReturn("image/png");

        Curso cursoMock = new Curso();
        when(cursoRepository.save(any(Curso.class))).thenReturn(cursoMock);

        CursoDto resultado = cursoService.salvarCurso(cursoDto, fotoMock);

        assertNotNull(resultado);
        verify(cursoRepository, times(1)).save(any(Curso.class));
    }

    @Test
    void salvarCurso_DeveLancarExcecao_SeFotoInvalida() {
        CursoDto cursoDto = new CursoDto();
        MultipartFile fotoMock = mock(MultipartFile.class);
        when(fotoMock.isEmpty()).thenReturn(true);

        IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> 
                cursoService.salvarCurso(cursoDto, fotoMock));

        assertEquals("A foto é obrigatória.", exception.getMessage());
    }
}
