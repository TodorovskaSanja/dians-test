package com.example.demo.controller;

import com.example.demo.model.Currency;
import com.example.demo.model.Ohlcv;
import com.example.demo.services.OhlcvService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@Validated
@CrossOrigin(origins = "*")
public class OhlcvController {

    private final OhlcvService ohlcvService;

    public OhlcvController(OhlcvService ohlcvService) {
        this.ohlcvService = ohlcvService;
    }

    // localhost:8080/api/btc/ohlcv
    @GetMapping("/{symbol}/ohlcv")
    public ResponseEntity<List<Ohlcv>> getOhlcvBySymbolLast3Months(@PathVariable(value = "symbol") String symbol) {
        List<Ohlcv> ohlcvList = ohlcvService.getOhlcvBySymbolLast3Months(symbol);
        return new ResponseEntity<>(ohlcvList, HttpStatus.OK);
    }
}
