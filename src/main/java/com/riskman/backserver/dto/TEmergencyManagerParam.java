package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TEmergencyManagerParam {
    private Integer id;

    private String unit;

    private String position;

    private String chargeperson;

    private String phone;

    private String duty;

    private String remark;

    private Integer reservoirid;

    private Integer curPage;

    private Integer pageSize;
}
