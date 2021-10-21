package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TDownstreamVillageParam {

    private Integer id;

    private String name;

    private Integer personid;

    private String contactinfo;

    private Double population;

    private Integer settlementid;

    private Integer reservoirid;

    private Integer curPage;

    private Integer pageSize;
}
