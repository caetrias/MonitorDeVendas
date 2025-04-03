package com.caetrias.monitordevendasapi.repository;

import com.caetrias.monitordevendasapi.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    //Optional<Usuario> findByEmail(String email); todo: implementar cadastro com email
}
