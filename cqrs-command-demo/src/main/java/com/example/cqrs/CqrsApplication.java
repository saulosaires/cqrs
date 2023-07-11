package com.example.cqrs;

import com.example.cqrs.customer.model.CustomerEntity;
import com.example.cqrs.customer.repository.CustomerRepository;
import com.example.cqrs.vehicle.model.VehicleEntity;
import com.example.cqrs.vehicle.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.Instant;
import java.util.Arrays;

@SpringBootApplication
public class CqrsApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(CqrsApplication.class, args);
    }


    @Autowired
    VehicleRepository vehicleRepository;

    @Autowired
    CustomerRepository customerRepository;

    @Override
    public void run(String... args) {

        if (vehicleRepository.findAll().isEmpty()) {

            vehicleRepository.saveAll(Arrays.asList(
                    new VehicleEntity(null, "vehicle-1", 2, "ABC-123"),
                    new VehicleEntity(null, "vehicle-2", 2, "ABC-456"),
                    new VehicleEntity(null, "vehicle-3", 4, "ABC-789")
            ));
        }

        if (customerRepository.findAll().isEmpty()) {
            customerRepository.saveAll(Arrays.asList(
                    new CustomerEntity(null, "customer-1", Instant.now(), "email1@gmail.com"),
                    new CustomerEntity(null, "customer-2", Instant.now(), "email2@gmail.com"),
                    new CustomerEntity(null, "customer-3", Instant.now(), "email3@gmail.com")
            ));
        }

    }
}
