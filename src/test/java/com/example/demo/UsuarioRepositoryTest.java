package com.example.demo;

import com.example.demo.entity.Usuario;
import com.example.demo.repository.UsuarioRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class UsuarioRepositoryTest {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Test
    public void testSalvarUsuario() {
        Usuario usuario = new Usuario();
        usuario.setNome("Caue de Oliveira");
        usuario.setEmail("caue.obm@gmail.com");
        usuario.setSenha("123");
        usuario.setTipo("Professor");
        usuario.setStatus("ativo");

        Usuario savedUsuario = usuarioRepository.save(usuario);
        assertNotNull(savedUsuario.getId());
    }
}
