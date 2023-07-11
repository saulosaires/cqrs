package com.example.cqrs.facade;

import com.example.cqrs.booking.dto.BookingStatusUpdated;
import com.example.cqrs.booking.dto.request.BookingRequest;
import com.example.cqrs.booking.model.BookingEntity;
import com.example.cqrs.booking.model.BookingStatus;
import com.example.cqrs.booking.service.BookingCommandService;
import com.example.cqrs.customer.mapper.CustomerMapper;
import com.example.cqrs.customer.model.CustomerEntity;
import com.example.cqrs.customer.service.CustomerQueryService;
import com.example.cqrs.kafka.BookingCreatedProducer;
import com.example.cqrs.kafka.BookingStatusUpdatedProducer;
import com.example.cqrs.kafka.dto.BookingMessage;
import com.example.cqrs.kafka.dto.CustomerMessage;
import com.example.cqrs.kafka.dto.VehicleMessage;
import com.example.cqrs.vehicle.mapper.VehicleMapper;
import com.example.cqrs.vehicle.model.VehicleEntity;
import com.example.cqrs.vehicle.service.VehicleQueryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class BookingCommandFacade {

    Logger log = LoggerFactory.getLogger(BookingCommandFacade.class);

    private final BookingCreatedProducer bookingCreatedProducer;
    private final BookingStatusUpdatedProducer bookingStatusUpdatedProducer;
    private final BookingCommandService bookingCommandService;
    private final VehicleQueryService vehicleQueryService;
    private final CustomerQueryService customerQueryService;
    private final CustomerMapper customerMapper;
    private final VehicleMapper vehicleMapper;

    public BookingCommandFacade(BookingCreatedProducer bookingCreatedProducer,
                                BookingStatusUpdatedProducer bookingStatusUpdatedProducer,
                                BookingCommandService bookingCommandService,
                                VehicleQueryService vehicleQueryService,
                                CustomerQueryService customerQueryService,
                                VehicleMapper vehicleMapper,
                                CustomerMapper customerMapper) {
        this.bookingCreatedProducer = bookingCreatedProducer;
        this.bookingStatusUpdatedProducer = bookingStatusUpdatedProducer;
        this.bookingCommandService = bookingCommandService;
        this.vehicleQueryService = vehicleQueryService;
        this.customerQueryService = customerQueryService;
        this.vehicleMapper = vehicleMapper;
        this.customerMapper = customerMapper;
    }

    public void create(BookingRequest request) {

        VehicleEntity vehicle = vehicleQueryService.findById(request.vehicleId());
        CustomerEntity customer = customerQueryService.findById(request.customerId());

        BookingEntity bookingEntity = new BookingEntity(null, request.startDate(), request.endDate(), BookingStatus.CREATED, vehicle, customer);

        bookingCommandService.create(bookingEntity);
        log.info("BookingCommandFacade.create booking:{}", bookingEntity);

        Long id = bookingEntity.getId();
        String startDate = bookingEntity.getStartDate().toString();
        String enDate = bookingEntity.getStartDate().toString();
        BookingStatus status = bookingEntity.getStatus();
        VehicleMessage vehicleMessage = vehicleMapper.toMessage(bookingEntity.getVehicle());
        CustomerMessage customerMessage = customerMapper.toMessage(bookingEntity.getCustomer());

        bookingCreatedProducer.sendMessage(new BookingMessage(id, startDate, enDate, status, vehicleMessage, customerMessage));
    }

    public void start(Long id) {
        log.info("BookingCommandFacade.start id:{}", id);
        bookingCommandService.start(id);
        bookingStatusUpdatedProducer.sendMessage(new BookingStatusUpdated(id, BookingStatus.STARTED));
    }

    public void end(Long id) {
        log.info("BookingCommandFacade.end id:{}", id);
        bookingCommandService.end(id);
        bookingStatusUpdatedProducer.sendMessage(new BookingStatusUpdated(id, BookingStatus.ENDED));
    }
}
