package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TReservoirInfoParam {
    private Integer id;

    private String name;

    private Double longitude;

    private Double latitude;

    private Double checkfloodlevel;

    private Double designfloodlevel;

    private Double normalstoragelevel;

    private Double floodlimitlevel;

    private Double deadwaterlevel;

    private Integer managementunit;

    private Integer administrator;

    private Integer technicalperson;

    private Integer inspectionperson;

    private Integer curPage;

    private Integer pageSize;
}