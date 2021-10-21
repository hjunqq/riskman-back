package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TPersonInfoParam {
    private Integer id;

    private String name;

    private String unit;

    private String position;

    private Integer dutyid;

    private Integer reservoirid;

    private Integer role;

    private Integer curPage;

    private Integer pageSize;
}
