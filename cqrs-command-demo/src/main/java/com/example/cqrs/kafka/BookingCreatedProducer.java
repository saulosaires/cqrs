package com.example.cqrs.kafka;

import com.example.cqrs.kafka.dto.BookingMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class BookingCreatedProducer {

    Logger log = LoggerFactory.getLogger(BookingCreatedProducer.class);

    @Value(value = "${kafka.topics.booking-created}")
    private String bookingCreated;
    @Autowired
    private KafkaTemplate<String, BookingMessage> kafkaTemplate;

    public void sendMessage(BookingMessage bookingResponse) {
        log.info("BookingCreatedProducer.sendMessage bookingMessage:{}", bookingResponse);
        kafkaTemplate.send(bookingCreated, bookingResponse);
    }

}
