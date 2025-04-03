package com.caetrias.monitordevendasapi.repository;

import com.caetrias.monitordevendasapi.model.Vendas;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VendasRepository extends JpaRepository<Vendas, Long> {
}
