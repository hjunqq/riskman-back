package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TFloodRespPersonParam {
    private Integer id;

    private String positionname;

    private String unit;

    private String position;

    private String duty;

    private String personname;

    private String contact;

    private Integer curPage;

    private Integer pageSize;
}
