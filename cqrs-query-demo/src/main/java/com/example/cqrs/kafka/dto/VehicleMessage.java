package com.example.cqrs.kafka.dto;

public record VehicleMessage(Long id,
                             String name,
                             Integer doorCount,
                             String licensePlate) {
}

