package com.example.cqrs.booking.controller.command;

import com.example.cqrs.booking.dto.request.BookingRequest;
import com.example.cqrs.booking.service.BookingCommandService;
import com.example.cqrs.facade.BookingCommandFacade;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/booking")
public class BookingCommandController {

    Logger log = LoggerFactory.getLogger(BookingCommandService.class);

    private final BookingCommandFacade bookingCommandFacade;

    public BookingCommandController(BookingCommandFacade bookingCommandFacade) {
        this.bookingCommandFacade = bookingCommandFacade;
    }

    @PostMapping
    @ResponseBody
    public void create(@RequestBody BookingRequest request) {
        log.info("BookingController.create request: {}", request);
        bookingCommandFacade.create(request);
    }

    @PutMapping("/{id}/start")
    public void start(@PathVariable(name = "id") Long id) {
        log.info("BookingQueryController.start request:{}", id);
        bookingCommandFacade.start(id);
    }

    @PutMapping("/{id}/end")
    public void end(@PathVariable(name = "id") Long id) {
        log.info("BookingQueryController.end request:{}", id);
        bookingCommandFacade.end(id);
    }
}
