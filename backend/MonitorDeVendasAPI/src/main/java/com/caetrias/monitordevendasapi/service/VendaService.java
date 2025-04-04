package com.caetrias.monitordevendasapi.service;

import com.caetrias.monitordevendasapi.model.Venda;

import java.util.List;
import java.util.Optional;

public interface VendaService {
    List<Venda> listarVendas();
    Optional<Venda> buscarVendaPorId(Long id);
    Venda cadastrarVenda(Venda venda);
    Venda atualizarVenda(Long id, Venda venda);
    void excluirVenda(Long id);
}
