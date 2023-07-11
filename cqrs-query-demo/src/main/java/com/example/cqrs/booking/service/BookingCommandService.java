package com.example.cqrs.booking.service;

import com.example.cqrs.booking.model.BookingEntity;
import com.example.cqrs.booking.repository.BookingRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class BookingCommandService {

    Logger log = LoggerFactory.getLogger(BookingCommandService.class);

    private final BookingRepository bookingRepository;

    public BookingCommandService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public BookingEntity save(BookingEntity bookingEntity) {

        log.info("BookingCommandService.create bookingEntity:{}", bookingEntity);
        return bookingRepository.save(bookingEntity);
    }

}
