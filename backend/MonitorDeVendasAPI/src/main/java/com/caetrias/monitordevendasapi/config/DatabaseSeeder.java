package com.caetrias.monitordevendasapi.config;

import com.caetrias.monitordevendasapi.model.Venda;
import com.caetrias.monitordevendasapi.repository.VendaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.time.LocalDate;

@Configuration
public class DatabaseSeeder {

    @Bean
    CommandLineRunner initDatabase(VendaRepository vendaRepository) {
        return args -> {
            if (vendaRepository.count() == 0) {
                vendaRepository.save(new Venda("Notebook", 3, LocalDate.now().minusDays(1), new BigDecimal("4500.00")));
                vendaRepository.save(new Venda("Monitor", 5, LocalDate.now().minusDays(2), new BigDecimal("1250.00")));
                vendaRepository.save(new Venda("Mouse Gamer", 10, LocalDate.now().minusDays(3), new BigDecimal("750.00")));
            }
        };
    }
}