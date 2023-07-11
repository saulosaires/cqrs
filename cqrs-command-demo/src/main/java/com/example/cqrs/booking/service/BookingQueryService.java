package com.example.cqrs.booking.service;

import com.example.cqrs.booking.model.BookingEntity;
import com.example.cqrs.booking.repository.BookingRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class BookingQueryService {

    Logger log = LoggerFactory.getLogger(BookingQueryService.class);

    private final BookingRepository bookingRepository;

    public BookingQueryService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }


    public BookingEntity getById(Long id) {
        log.info("BookingService.getById id:{}", id);
        return bookingRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("invalid booking id:" + id));
    }

}
