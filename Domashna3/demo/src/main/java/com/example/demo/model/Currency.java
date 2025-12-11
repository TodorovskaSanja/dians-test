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
    @JsonProperty("athDate")
    private String athDate;

    @Column(name = "last_updated")
    @JsonProperty("lastUpdated")
    private String lastUpdated;

    @Column(name = "atl_date")
    @JsonProperty("atlDate")
    private String atlDate;

    @Column(name = "atl")
    @JsonProperty("atl")
    private Double atl;

    @Column(name = "atl_change_percentage")
    @JsonProperty("atlChangePercentage")
    private Double atlChangePercentage;

    @Column(name = "current_price")
    @JsonProperty("currentPrice")
    private Double currentPrice;

    @Column(name = "market_cap")
    @JsonProperty("marketCap")
    private Double marketCap;

    @Column(name = "market_cap_rank")
    @JsonProperty("marketCapRank")
    private Integer marketCapRank;

    @Column(name = "fully_diluted_valuation")
    @JsonProperty("fullyDilutedValuation")
    private Double fullyDilutedValuation;

    @Column(name = "total_volume")
    @JsonProperty("totalVolume")
    private Double totalVolume;

    @Column(name = "high_24h")
    @JsonProperty("high24h")
    private Double high24h;

    @Column(name = "low_24h")
    @JsonProperty("low24h")
    private Double low24h;

    @Column(name = "price_change_24h")
    @JsonProperty("priceChange24h")
    private Double priceChange24h;

    @Column(name = "price_change_percentage_24h")
    @JsonProperty("priceChangePercentage24h")
    private Double priceChangePercentage24h;

    @Column(name = "market_cap_change_24h")
    @JsonProperty("marketCapChange24h")
    private Double marketCapChange24h;

    @Column(name = "market_cap_change_percentage_24h")
    @JsonProperty("marketCapChangePercentage24h")
    private Double marketCapChangePercentage24h;

    @Column(name = "circulating_supply")
    @JsonProperty("circulatingSupply")
    private Double circulatingSupply;

    @Column(name = "total_supply")
    @JsonProperty("totalSupply")
    private Double totalSupply;

    @Column(name = "max_supply")
    @JsonProperty("maxSupply")
    private Double maxSupply;

    @Column(name = "ath")
    @JsonProperty("ath")
    private Double ath;

    @Column(name = "ath_change_percentage")
    @JsonProperty("athChangePercentage")
    private Double athChangePercentage;
}