package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TFloodInfoParam {

    private Integer id;

    private Integer villageid;

    private Double waterdepth;

    private Date arrivedtime;

    private Integer reservoirid;

    private Integer curPage;

    private Integer pageSize;
}
