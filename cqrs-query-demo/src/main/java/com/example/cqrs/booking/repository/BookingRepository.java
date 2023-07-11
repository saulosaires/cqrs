package com.example.cqrs.booking.repository;

import com.example.cqrs.booking.model.BookingEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends MongoRepository<BookingEntity, Long> {
}
