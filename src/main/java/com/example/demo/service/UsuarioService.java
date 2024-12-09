package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dto.UsuarioDto;
import com.example.demo.entity.Usuario;
import com.example.demo.mapper.UsuarioMapper;
import com.example.demo.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public void save(UsuarioDto usuarioDto) {
        // Converte o DTO para entidade
        Usuario entity = UsuarioMapper.INSTANCE.toModel(usuarioDto);
        usuarioRepository.save(entity);
    }

    public Long login(String email, String senha) {
        Usuario usuario = usuarioRepository.findByEmailAndSenha(email, senha)
                .orElseThrow(() -> new RuntimeException("Credenciais inválidas"));

        // Gerar o token após autenticação bem-sucedida
        return usuario.getId();
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }
}
