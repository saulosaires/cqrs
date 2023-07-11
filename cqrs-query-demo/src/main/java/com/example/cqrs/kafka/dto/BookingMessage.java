package com.example.cqrs.kafka.dto;

import com.example.cqrs.booking.model.BookingStatus;

public record BookingMessage(Long id,
                             String startDate,
                             String enDate,
                             BookingStatus status,
                             VehicleMessage vehicle,
                             CustomerMessage customer) {
}
