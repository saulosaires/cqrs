package com.example.cqrs.booking.service;

import com.example.cqrs.booking.model.BookingEntity;
import com.example.cqrs.booking.model.BookingStatus;
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

    public void create(BookingEntity bookingEntity) {
        log.info("BookingService.create booking:{}", bookingEntity);
        bookingRepository.save(bookingEntity);
    }

    public void start(Long id) {
        log.info("BookingService.start id:{}", id);
        bookingRepository.updateStatus(id, BookingStatus.STARTED);
    }

    public void end(Long id) {
        log.info("BookingService.end id:{}", id);
        bookingRepository.updateStatus(id, BookingStatus.ENDED);
    }
}
