package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TExpertsParam {

    private Integer id;

    private String position;

    private String unit;

    private String positioninunit;

    private String name;

    private String subject;

    private String duty;

    private String contact;

    private Integer reservoirid;


    private Integer curPage;

    private Integer pageSize;
}
