package com.example.cqrs.facade;

import com.example.cqrs.booking.dto.response.BookingResponse;
import com.example.cqrs.booking.model.BookingEntity;
import com.example.cqrs.booking.model.BookingStatus;
import com.example.cqrs.booking.service.BookingQueryService;
import com.example.cqrs.customer.dto.CustomerDto;
import com.example.cqrs.customer.mapper.CustomerMapper;
import com.example.cqrs.vehicle.dto.VehicleDto;
import com.example.cqrs.vehicle.mapper.VehicleMapper;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
public class BookingQueryFacade {

    private final BookingQueryService bookingQueryService;
    private final CustomerMapper customerMapper;
    private final VehicleMapper vehicleMapper;

    public BookingQueryFacade(
            BookingQueryService bookingQueryService,
            VehicleMapper vehicleMapper,
            CustomerMapper customerMapper) {
        this.bookingQueryService = bookingQueryService;
        this.vehicleMapper = vehicleMapper;
        this.customerMapper = customerMapper;
    }

    public BookingResponse getById(Long id) {

        BookingEntity bookingEntity = bookingQueryService.getById(id);

        Instant startDate = bookingEntity.getStartDate();
        Instant enDate = bookingEntity.getStartDate();
        BookingStatus status = bookingEntity.getStatus();
        VehicleDto vehicleDto = vehicleMapper.toDto(bookingEntity.getVehicle());
        CustomerDto customerDto = customerMapper.toDto(bookingEntity.getCustomer());
        return new BookingResponse(id, startDate, enDate, status, vehicleDto, customerDto);
    }

}
