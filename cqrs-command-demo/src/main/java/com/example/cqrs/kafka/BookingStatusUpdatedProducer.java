package com.example.cqrs.kafka;

import com.example.cqrs.booking.dto.BookingStatusUpdated;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class BookingStatusUpdatedProducer {

    Logger log = LoggerFactory.getLogger(BookingStatusUpdatedProducer.class);

    @Value(value = "${kafka.topics.booking-status-updated}")
    private String bookingStatusUpdatedTopic;
    @Autowired
    private KafkaTemplate<String, BookingStatusUpdated> kafkaTemplate;

    public void sendMessage(BookingStatusUpdated statusUpdated) {
        log.info("BookingStatusUpdatedProducer.sendMessage message:{}", statusUpdated);
        kafkaTemplate.send(bookingStatusUpdatedTopic, statusUpdated);
    }

}
