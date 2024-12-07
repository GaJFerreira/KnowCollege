package com.example.demo.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.CompraDto;
import com.example.demo.entity.Compra;
import com.example.demo.entity.CompraCurso;
import com.example.demo.entity.Curso;
import com.example.demo.entity.Usuario;
import com.example.demo.repository.CompraCursoRepository;
import com.example.demo.repository.CompraRepository;
import com.example.demo.repository.CursoRepository; // Adicionando repositório de Curso
import com.example.demo.repository.UsuarioRepository;

@Service
public class CompraService {

    private static final Logger log = LoggerFactory.getLogger(CompraService.class);

    @Autowired
    private CompraRepository compraRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private CursoRepository cursoRepository;

    @Autowired
    private CompraCursoRepository compraCursoRepository;

    public void finalizarCompra(CompraDto compraDTO) {
        // Criando a entidade Compra
        Compra compra = new Compra();
        Usuario usuario = usuarioRepository.findById(compraDTO.getUsuarioId())
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        log.info("Usuário encontrado: {}", usuario);

        compra.setUsuario(usuario);
        compra.setStatus(compraDTO.getStatus());
        compra.setValorTotal(compraDTO.getValorTotal());
        compra.setDataCompra(compraDTO.getDataCompra());

        // Salvando a Compra primeiro
        compra = compraRepository.save(compra);

        log.info("Compra salva com ID: {}", compra.getId());

        // Processando os cursos e criando os objetos CompraCurso
        for (Long cursoId : compraDTO.getCursosIds()) {
            Curso curso = cursoRepository.findById(cursoId)
                    .orElseThrow(() -> new RuntimeException("Curso não encontrado com ID: " + cursoId));

            log.info("Curso encontrado: {}", curso);

            CompraCurso compraCurso = new CompraCurso();
            compraCurso.setCompra(compra); // Relacionando com a compra salva
            compraCurso.setCurso(curso);
            compraCurso.setPrecoPago(curso.getPreco());

            // Salvando cada CompraCurso
            compraCursoRepository.save(compraCurso);

            log.info("CompraCurso salvo: {}", compraCurso);
        }

        log.info("Compra finalizada com sucesso para ID: {}", compra.getId());
    }
}
