package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.demo.dto.UsuarioDto;
import com.example.demo.entity.Usuario;
import com.example.demo.mapper.UsuarioMapper;
import com.example.demo.repository.UsuarioRepository;

@Service
public class UsuarioService {

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Long save(UsuarioDto usuarioDto) {
        Usuario entity = UsuarioMapper.INSTANCE.toModel(usuarioDto);

        String hashedPassword = passwordEncoder.encode(usuarioDto.getSenha());
        entity.setSenha(hashedPassword);

        Usuario savedEntity = usuarioRepository.save(entity);
        return savedEntity.getId();
    }

    public Long login(String email, String senha) {
        Usuario usuario = usuarioRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));

        if (!passwordEncoder.matches(senha, usuario.getSenha())) {
            throw new RuntimeException("Credenciais inválidas");
        }

        return usuario.getId();
    }

    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }
}
