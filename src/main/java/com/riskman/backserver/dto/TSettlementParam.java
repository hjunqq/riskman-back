package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TSettlementParam {
    private Integer id;

    private Double longitude;

    private Double lantitude;

    private Integer indexnumber;

    private Integer capacity;

    private Integer reservoirid;


    private Integer curPage;

    private Integer pageSize;
}