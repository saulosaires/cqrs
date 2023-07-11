package com.example.cqrs.booking.controller.query;

import com.example.cqrs.booking.dto.response.BookingResponse;
import com.example.cqrs.facade.BookingQueryFacade;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/booking")
public class BookingQueryController {
    Logger log = LoggerFactory.getLogger(BookingQueryController.class);

    private final BookingQueryFacade bookingQueryFacade;

    public BookingQueryController(BookingQueryFacade bookingQueryFacade) {
        this.bookingQueryFacade = bookingQueryFacade;
    }

    @GetMapping("/{id}")
    public BookingResponse getById(@PathVariable(name = "id") Long id) {
        return bookingQueryFacade.getById(id);
    }

}
