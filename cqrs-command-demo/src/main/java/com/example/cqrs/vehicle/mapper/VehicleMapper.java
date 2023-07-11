package com.example.cqrs.vehicle.mapper;

import com.example.cqrs.kafka.dto.VehicleMessage;
import com.example.cqrs.vehicle.dto.VehicleDto;
import com.example.cqrs.vehicle.model.VehicleEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface VehicleMapper {
    VehicleDto toDto(VehicleEntity vehicle);

    VehicleMessage toMessage(VehicleEntity vehicle);
}
