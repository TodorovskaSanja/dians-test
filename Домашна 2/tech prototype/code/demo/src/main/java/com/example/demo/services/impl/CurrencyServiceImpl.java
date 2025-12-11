package com.example.demo.services.impl;

import com.example.demo.exception.CurrencyNotFoundException;
import com.example.demo.model.Currency;
import com.example.demo.repository.CurrencyRepository;
import com.example.demo.services.CurrencyService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CurrencyServiceImpl implements CurrencyService {
    private final CurrencyRepository currencyRepository;

    public CurrencyServiceImpl(CurrencyRepository currencyRepository) {
        this.currencyRepository = currencyRepository;
    }

    @Override
    public List<Currency> getAllCurrencies() {
        return currencyRepository.findAll();
    }

    @Override
    public Currency getCurrencyBySymbol(String symbol) throws CurrencyNotFoundException {
        return currencyRepository.findCurrenciesBySymbolIgnoreCase(symbol).orElseThrow(() -> new CurrencyNotFoundException(symbol));
    }

    @Override
    public Currency getCurrencyByName(String name) throws CurrencyNotFoundException {
        return currencyRepository.findCurrenciesByNameIgnoreCase(name).orElseThrow(() -> new CurrencyNotFoundException(name));
    }
}
