package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Entity
@Table(name = "coins")
@NoArgsConstructor
@AllArgsConstructor
public class Currency implements Serializable {
    @Id
    @Column(name = "symbol")
    @JsonProperty("symbol")
    private String symbol;

    @Column(name = "id")
    @JsonProperty("id")
    private String id;

    @Column(name = "name")
    @JsonProperty("name")
    private String name;

    @Column(name = "image")
    @JsonProperty("image")
    private String image;

    @Column(name = "ath_date")
    @JsonProperty("ath_date")
    private String ath_date;

    @Column(name = "last_updated")
    @JsonProperty("last_updated")
    private String last_updated;

    @Column(name = "atl_date")
    @JsonProperty("atl_date")
    private String atl_date;

    @Column(name = "atl")
    @JsonProperty("atl")
    private Double atl;

    @Column(name = "atl_change_percentage")
    @JsonProperty("atl_change_percentage")
    private Double atl_change_percentage;

    @Column(name = "current_price")
    @JsonProperty("current_price")
    private Double current_price;

    @Column(name = "market_cap")
    @JsonProperty("market_cap")
    private Double market_cap;

    @Column(name = "market_cap_rank")
    @JsonProperty("market_cap_rank")
    private Integer market_cap_rank;

    @Column(name = "fully_diluted_valuation")
    @JsonProperty("fully_diluted_valuation")
    private Double fully_diluted_valuation;

    @Column(name = "total_volume")
    @JsonProperty("total_volume")
    private Double total_volume;

    @Column(name = "high_24h")
    @JsonProperty("high_24h")
    private Double high_24h;

    @Column(name = "low_24h")
    @JsonProperty("low_24h")
    private Double low_24h;

    @Column(name = "price_change_24h")
    @JsonProperty("price_change_24h")
    private Double price_change_24h;

    @Column(name = "price_change_percentage_24h")
    @JsonProperty("price_change_percentage_24h")
    private Double price_change_percentage_24h;

    @Column(name = "market_cap_change_24h")
    @JsonProperty("market_cap_change_24h")
    private Double market_cap_change_24h;

    @Column(name = "market_cap_change_percentage_24h")
    @JsonProperty("market_cap_change_percentage_24h")
    private Double market_cap_change_percentage_24h;

    @Column(name = "circulating_supply")
    @JsonProperty("circulating_supply")
    private Double circulating_supply;

    @Column(name = "total_supply")
    @JsonProperty("total_supply")
    private Double total_supply;

    @Column(name = "max_supply")
    @JsonProperty("max_supply")
    private Double max_supply;

    @Column(name = "ath")
    @JsonProperty("ath")
    private Double ath;

    @Column(name = "ath_change_percentage")
    @JsonProperty("ath_change_percentage")
    private Double ath_change_percentage;
}