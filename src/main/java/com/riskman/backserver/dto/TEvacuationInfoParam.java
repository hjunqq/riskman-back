package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TEvacuationInfoParam {
    private Integer id;

    private String routepoint;

    private String transport;

    private Float time;

    private Integer settlementid;

    private Integer reservoirid;

    private Integer curPage;

    private Integer pageSize;
}
