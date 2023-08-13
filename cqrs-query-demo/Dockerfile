FROM eclipse-temurin:17-jdk-alpine
ARG JAR_FILE
COPY ${JAR_FILE} cqrs-query-demo.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "/cqrs-query-demo.jar"]