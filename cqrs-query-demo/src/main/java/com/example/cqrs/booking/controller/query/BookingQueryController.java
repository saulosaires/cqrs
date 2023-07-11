package com.example.cqrs.booking.controller.query;

import com.example.cqrs.booking.dto.BookingDto;
import com.example.cqrs.booking.service.BookingQueryService;
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

    private final BookingQueryService service;

    public BookingQueryController(BookingQueryService service) {
        this.service = service;
    }

    @GetMapping("/{id}")
    public BookingDto getById(@PathVariable(name = "id") Long id) {
        log.info("BookingQueryController.getById request: {}", id);
        return service.getById(id);
    }


}
