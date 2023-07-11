package com.example.cqrs.kafka;

import com.example.cqrs.booking.mapper.BookingMapper;
import com.example.cqrs.booking.service.BookingCommandService;
import com.example.cqrs.kafka.dto.BookingMessage;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class BookingCreatedConsumer {

    Logger log = LoggerFactory.getLogger(BookingCreatedConsumer.class);

    private final String bookingCreated = "booking-created";
    private final String groupId = "booking-group-id";
    private final BookingMapper bookingMapper;
    private final BookingCommandService bookingCommandService;
    private final ObjectMapper mapper = new ObjectMapper();

    public BookingCreatedConsumer(BookingMapper bookingMapper, BookingCommandService bookingCommandService) {
        this.bookingMapper = bookingMapper;
        this.bookingCommandService = bookingCommandService;
    }

    @KafkaListener(topics = bookingCreated, groupId = groupId)
    public void consume(String message) throws JsonProcessingException {
        log.info("BookingCreatedConsumer.consume message:{} ", message);

        BookingMessage bookingMessage = mapper.readValue(message, BookingMessage.class);

        bookingCommandService.save(bookingMapper.fromMessage(bookingMessage));
    }

}
