package com.caetrias.monitordevendasapi.service.impl;

import com.caetrias.monitordevendasapi.model.Venda;
import com.caetrias.monitordevendasapi.repository.VendaRepository;
import com.caetrias.monitordevendasapi.service.VendaService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VendaServiceImpl implements VendaService {
    private final VendaRepository vendaRepository;

    public VendaServiceImpl(VendaRepository vendaRepository) {
        this.vendaRepository = vendaRepository;
    }

    @Override
    public List<Venda> listarVendas(){
        return vendaRepository.findAll();
    }

    @Override
    public Optional<Venda> buscarVendaPorId(Long id){
        return vendaRepository.findById(id);
    }

    @Override
    public Venda cadastrarVenda(Venda venda){
        return vendaRepository.save(venda);
    }

    @Override
    public Venda atualizarVenda(Long id, Venda venda) {
        return vendaRepository.findById(id)
                .map(v -> {
                    v.setNomeProduto(venda.getNomeProduto());
                    v.setQuantidadeVendida(venda.getQuantidadeVendida());
                    v.setDataVenda(venda.getDataVenda());
                    v.setValorTotal(venda.getValorTotal());
                    return vendaRepository.save(v);
                })
                .orElseThrow(() -> new RuntimeException("Venda não encontrada"));
    }

    @Override
    public void excluirVenda(Long id) {
        vendaRepository.deleteById(id);
    }

}
