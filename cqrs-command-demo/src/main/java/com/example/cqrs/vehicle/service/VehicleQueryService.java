package com.example.cqrs.vehicle.service;

import com.example.cqrs.vehicle.model.VehicleEntity;
import com.example.cqrs.vehicle.repository.VehicleRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class VehicleQueryService {

    Logger log = LoggerFactory.getLogger(VehicleQueryService.class);

    private final VehicleRepository vehicleRepository;

    public VehicleQueryService(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    public VehicleEntity findById(Long id) {
        log.info("VehicleQueryService.findById id: {}", id);

        return vehicleRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("invalid vehicle id:" + id));
    }
}
