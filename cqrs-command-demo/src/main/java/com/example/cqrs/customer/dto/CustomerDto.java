package com.example.cqrs.customer.dto;

import java.time.Instant;


public record CustomerDto(
        Long id,
        String name,
        Instant birthDate,
        String email) {
}
