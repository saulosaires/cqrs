package com.example.cqrs.kafka.config;

import org.apache.kafka.clients.admin.NewTopic;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class KafkaTopicConfig {

    @Value(value = "${spring.kafka.bootstrap-servers}")
    private String bootstrapAddress;
    @Value(value = "${kafka.topics.booking-created}")
    private String bookingCreated;

    @Value(value = "${kafka.topics.booking-status-updated}")
    private String bookingStatusUpdated;

    @Bean
    public NewTopic bookingCreated() {
        return new NewTopic(bookingCreated, 1, (short) 1);
    }

    @Bean
    public NewTopic bookingStatusUpdated() {
        return new NewTopic(bookingStatusUpdated, 1, (short) 1);
    }


}
