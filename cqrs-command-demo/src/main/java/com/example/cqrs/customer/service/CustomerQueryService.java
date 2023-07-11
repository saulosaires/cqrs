package com.example.cqrs.customer.service;

import com.example.cqrs.customer.model.CustomerEntity;
import com.example.cqrs.customer.repository.CustomerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class CustomerQueryService {

    Logger log = LoggerFactory.getLogger(CustomerQueryService.class);

    private final CustomerRepository customerRepository;

    public CustomerQueryService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public CustomerEntity findById(Long id) {
        log.info("CustomerQueryService.findById id: {}", id);

        return customerRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("invalid id:" + id));
    }
}
