package com.example.cqrs.customer.mapper;

import com.example.cqrs.customer.dto.CustomerDto;
import com.example.cqrs.customer.model.CustomerEntity;
import com.example.cqrs.kafka.dto.CustomerMessage;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CustomerMapper {
    CustomerDto toDto(CustomerEntity customerEntity);

    CustomerMessage toMessage(CustomerEntity customerEntity);

}
