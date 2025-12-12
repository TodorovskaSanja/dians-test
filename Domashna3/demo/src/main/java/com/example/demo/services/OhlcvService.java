package com.example.demo.services;

import com.example.demo.model.Ohlcv;

import java.time.LocalDate;
import java.util.List;

public interface OhlcvService {

    List<Ohlcv> getOhlcvBySymbol(String symbol);

    List<Ohlcv> getOhlcvBySymbolLast3Months(String symbol);
}
