package com.example.cqrs.vehicle.repository;

import com.example.cqrs.vehicle.model.VehicleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<VehicleEntity, Long> {
}
