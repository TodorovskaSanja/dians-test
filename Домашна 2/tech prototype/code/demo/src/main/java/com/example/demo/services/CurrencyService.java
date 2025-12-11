package com.example.demo.services;

import com.example.demo.exception.CurrencyNotFoundException;
import com.example.demo.model.Currency;

import java.util.List;

public interface CurrencyService {

    List<Currency> getAllCurrencies();

    Currency getCurrencyBySymbol(String symbol) throws CurrencyNotFoundException;

    Currency getCurrencyByName(String name) throws CurrencyNotFoundException;
}
