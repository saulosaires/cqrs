package com.example.cqrs.booking.dto.response;

import com.example.cqrs.booking.model.BookingStatus;
import com.example.cqrs.customer.dto.CustomerDto;
import com.example.cqrs.vehicle.dto.VehicleDto;

import java.time.Instant;

public record BookingResponse(Long id,
                              Instant startDate,
                              Instant enDate,
                              BookingStatus status,
                              VehicleDto vehicle,
                              CustomerDto customer) {
}
