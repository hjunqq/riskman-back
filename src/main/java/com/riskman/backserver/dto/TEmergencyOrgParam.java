package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TEmergencyOrgParam {

    private Integer id;

    private Integer emergencyorgimage;

    private Integer floodwaterdepthimage;

    private Integer arrivedtimeimage;

    private Integer evacuationimage;

    private Integer emergencyprocessimage;

    private Integer reservoirid;

    private Integer curPage;

    private Integer pageSize;
}
