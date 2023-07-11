package com.example.cqrs.vehicle.dto;

public record VehicleDto(Long id,
                         String name,
                         Integer doorCount,
                         String licensePlate) {
}
