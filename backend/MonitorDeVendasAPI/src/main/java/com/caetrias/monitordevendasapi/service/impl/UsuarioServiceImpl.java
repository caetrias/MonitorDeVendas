package com.caetrias.monitordevendasapi.service.impl;

import com.caetrias.monitordevendasapi.model.Usuario;
import com.caetrias.monitordevendasapi.repository.UsuarioRepository;
import com.caetrias.monitordevendasapi.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioServiceImpl implements UsuarioService {
    @Autowired
    private UsuarioRepository usuarioRepository;

    // todo: melhorar implementacao do cadastro (+seguranca ao armazenar senha)
    /*@Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Override
    public Usuario cadastrarUsuario(Usuario usuario) {
        usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));
        return usuarioRepository.save(usuario);
    }*/

    @Override
    public Usuario cadastrarUsuario(Usuario usuario){
        return usuarioRepository.save(usuario);
    }

    @Override
    public Usuario buscarUsuarioPorId(Long id) {
        Optional<Usuario> usuario = usuarioRepository.findById(id); //optional pois pode nao retornar a entidade
        return usuario.orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }

    @Override
    public List<Usuario> listarUsuarios() {
        return usuarioRepository.findAll();
    }
}
