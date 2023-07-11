package com.example.cqrs.kafka.dto;

public record CustomerMessage(Long id,
                              String name,
                              String birthDate,
                              String email) {
}
