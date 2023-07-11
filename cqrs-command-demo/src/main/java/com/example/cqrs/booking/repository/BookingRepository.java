package com.example.cqrs.booking.repository;

import com.example.cqrs.booking.model.BookingEntity;
import com.example.cqrs.booking.model.BookingStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface BookingRepository extends JpaRepository<BookingEntity, Long> {

    @Transactional
    @Modifying
    @Query("update BookingEntity b set b.status = :status where b.id = :id")
    void updateStatus(@Param(value = "id") long id, @Param(value = "status") BookingStatus status);

}
