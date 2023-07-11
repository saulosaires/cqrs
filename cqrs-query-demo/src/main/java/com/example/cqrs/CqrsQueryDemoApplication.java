package com.example.cqrs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class CqrsQueryDemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(CqrsQueryDemoApplication.class, args);
    }


}
