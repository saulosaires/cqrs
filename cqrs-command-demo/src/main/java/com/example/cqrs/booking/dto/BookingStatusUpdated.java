package com.example.cqrs.booking.dto;

import com.example.cqrs.booking.model.BookingStatus;

public record BookingStatusUpdated(Long id, BookingStatus status) { }
