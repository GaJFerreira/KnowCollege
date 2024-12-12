package com.example.demo.repository;

import com.example.demo.entity.Usuario;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    // Método customizado para verificar se existe um usuário com o email e senha
    // fornecidos
    Optional<Usuario> findByEmailAndSenha(String email, String senha);

    Optional<Usuario> findByEmail(String email);

}
