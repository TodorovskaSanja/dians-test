package com.example.demo.exception;

public class CurrencyNotFoundException extends RuntimeException {
    public CurrencyNotFoundException(String symbol) {
        super(String.format("Currency %s not found", symbol));
    }
}
