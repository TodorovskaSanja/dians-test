package com.example.demo.controller;

import com.example.demo.model.Currency;
import com.example.demo.services.CurrencyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@Validated
@CrossOrigin(origins="*")
public class CurrencyController {
    private final CurrencyService currencyService;

    public CurrencyController(CurrencyService currencyService) {
        this.currencyService = currencyService;
    }

    // localhost:8080/api/all
    @GetMapping(value = "/all")
    public ResponseEntity<List<Currency>> getAllCurrencies() {
        List<Currency> currencies = currencyService.getAllCurrencies();
        return new ResponseEntity<>(currencies, HttpStatus.OK);
    }

    // localhost:8080/api/btc
    @GetMapping(value = "/{symbol}")
    public ResponseEntity<Currency> getCurrencyBySymbol(@PathVariable(value = "symbol") String symbol) {
        Currency currency = currencyService.getCurrencyBySymbol(symbol);
        return new ResponseEntity<>(currency, HttpStatus.OK);
    }

    // localhost:8080/api/currency?name=ethereum
    @GetMapping(value = "/currency")
    public ResponseEntity<Currency> getCurrencyByName(@RequestParam(value = "name") String name) {
        Currency currency = currencyService.getCurrencyByName(name);
        return new ResponseEntity<>(currency, HttpStatus.OK);
    }
}
