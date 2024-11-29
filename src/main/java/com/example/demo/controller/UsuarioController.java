package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.UsuarioDto;
import com.example.demo.service.UsuarioService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    UsuarioService service;

    @PostMapping(value = "/cadastro",produces = MediaType.APPLICATION_JSON_VALUE)
    public void save(@RequestBody UsuarioDto usuarioDto){
        service.save(usuarioDto);
    };
    @GetMapping(value ="/login",produces = MediaType.APPLICATION_JSON_VALUE)
    public void login (@RequestParam String nome, @RequestParam String senha) {
        service.login(nome,senha);
    }
    
}
