package com.example.cqrs.booking.model;

import com.example.cqrs.booking.dto.CustomerDto;
import com.example.cqrs.booking.dto.VehicleDto;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Document(value = "Booking")
public class BookingEntity {

    private Long id;
    private Instant startDate;
    private Instant enDate;
    private BookingStatus status;
    private VehicleDto vehicle;
    private CustomerDto customer;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Instant getStartDate() {
        return startDate;
    }

    public void setStartDate(Instant startDate) {
        this.startDate = startDate;
    }

    public Instant getEnDate() {
        return enDate;
    }

    public void setEnDate(Instant enDate) {
        this.enDate = enDate;
    }

    public BookingStatus getStatus() {
        return status;
    }

    public void setStatus(BookingStatus status) {
        this.status = status;
    }

    public VehicleDto getVehicle() {
        return vehicle;
    }

    public void setVehicle(VehicleDto vehicle) {
        this.vehicle = vehicle;
    }

    public CustomerDto getCustomer() {
        return customer;
    }

    public void setCustomer(CustomerDto customer) {
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "BookingEntity{" +
                "id='" + id + '\'' +
                ", startDate=" + startDate +
                ", enDate=" + enDate +
                ", status=" + status +
                ", vehicle=" + vehicle +
                ", customer=" + customer +
                '}';
    }
}
