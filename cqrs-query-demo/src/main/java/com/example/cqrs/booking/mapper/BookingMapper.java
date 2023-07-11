package com.example.cqrs.booking.mapper;

import com.example.cqrs.booking.dto.BookingDto;
import com.example.cqrs.booking.model.BookingEntity;
import com.example.cqrs.kafka.dto.BookingMessage;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BookingMapper {
    BookingEntity fromMessage(BookingMessage bookingMessage);

    BookingDto toDto(BookingEntity bookingEntity);


}
