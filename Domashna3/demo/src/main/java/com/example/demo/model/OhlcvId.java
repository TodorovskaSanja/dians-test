package com.example.demo.model;
import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class OhlcvId implements Serializable {

    @Column(name = "symbol")
    private String symbol;

    @Column(name = "date")
    private LocalDate date;
}
