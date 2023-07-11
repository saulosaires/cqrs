package com.example.cqrs.booking.dto.request;

import java.time.Instant;

public record BookingRequest(Instant startDate,
                             Instant endDate,
                             Long vehicleId,
                             Long customerId) {
}
