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
        Usuario entity = UsuarioMapper.INSTANCE.toModel(usuarioDto);
        usuarioRepository.save(entity);
    }

    public boolean login(String email, String senha) {
        return usuarioRepository.existsByEmailAndSenha(email, senha); // Exemplo de método no repositório
    }

    public List<Usuario> listarUsuarios() {
        List<Usuario> usuarios = usuarioRepository.findAll();
        return usuarios;
    }

}
