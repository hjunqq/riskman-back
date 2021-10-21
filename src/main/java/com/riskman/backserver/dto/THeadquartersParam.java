package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class THeadquartersParam {
    private Integer id;

    private String duty;

    private Integer reservoirid;

    private String unit;

    private String position;

    private String name;

    private String phone;

    private String officephone;

    private Integer curPage;

    private Integer pageSize;
}
