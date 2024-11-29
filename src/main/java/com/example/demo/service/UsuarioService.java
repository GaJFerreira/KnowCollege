package com.example.demo.service;

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

    public boolean login(String nome, String senha) {
        return usuarioRepository.existsByNomeAndSenha(nome, senha);  // Exemplo de método no repositório
    }

}
