package com.caetrias.monitordevendasapi.service;

import com.caetrias.monitordevendasapi.model.Usuario;

import java.util.List;

public interface UsuarioService {
    Usuario cadastrarUsuario(Usuario usuario);
    Usuario buscarUsuarioPorId(Long id);
    List<Usuario> listarUsuarios();
}
