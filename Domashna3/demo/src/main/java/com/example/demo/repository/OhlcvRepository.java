package com.example.demo.repository;

import com.example.demo.model.Ohlcv;
import com.example.demo.model.OhlcvId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface OhlcvRepository extends JpaRepository<Ohlcv, OhlcvId> {

    List<Ohlcv> findByIdSymbolOrderByIdDateAsc(String symbol);

    List<Ohlcv> findByIdSymbolAndIdDateAfterOrderByIdDateAsc(String symbol, LocalDate fromDate);
}
