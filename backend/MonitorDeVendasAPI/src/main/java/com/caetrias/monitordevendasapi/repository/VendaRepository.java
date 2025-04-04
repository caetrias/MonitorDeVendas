package com.caetrias.monitordevendasapi.repository;

import com.caetrias.monitordevendasapi.model.Venda;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendaRepository extends JpaRepository<Venda, Long> {
}
