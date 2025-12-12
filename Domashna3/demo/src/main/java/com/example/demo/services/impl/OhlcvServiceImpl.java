package com.example.demo.services.impl;

import com.example.demo.model.Ohlcv;
import com.example.demo.repository.OhlcvRepository;
import com.example.demo.services.OhlcvService;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class OhlcvServiceImpl implements OhlcvService {

    private final OhlcvRepository ohlcvRepository;

    public OhlcvServiceImpl(OhlcvRepository ohlcvRepository) {
        this.ohlcvRepository = ohlcvRepository;
    }

    @Override
    public List<Ohlcv> getOhlcvBySymbol(String symbol) {
        return ohlcvRepository.findByIdSymbolOrderByIdDateAsc(symbol);
    }

    @Override
    public List<Ohlcv> getOhlcvBySymbolLast3Months(String symbol) {
        LocalDate fromDate = LocalDate.now().minusMonths(3);
        return ohlcvRepository.findByIdSymbolAndIdDateAfterOrderByIdDateAsc(symbol, fromDate);
    }
}
