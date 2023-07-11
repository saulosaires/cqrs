package com.example.cqrs.booking.service;

import com.example.cqrs.booking.dto.BookingDto;
import com.example.cqrs.booking.mapper.BookingMapper;
import com.example.cqrs.booking.repository.BookingRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class BookingQueryService {

    Logger log = LoggerFactory.getLogger(BookingQueryService.class);

    private final BookingRepository bookingRepository;

    private final BookingMapper bookingMapper;

    public BookingQueryService(BookingRepository bookingRepository, BookingMapper bookingMapper) {
        this.bookingRepository = bookingRepository;
        this.bookingMapper = bookingMapper;
    }

    public BookingDto getById(Long id) {
        log.info("BookingCommandService.getById id:{}", id);

        return bookingMapper.toDto(bookingRepository.findById(id).orElse(null));
    }

}
