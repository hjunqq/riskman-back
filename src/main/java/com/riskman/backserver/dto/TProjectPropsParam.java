package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TProjectPropsParam {
    private Integer id;

    private String location;

    private String propname;

    private String propvalue;

    private Integer reservoirid;

    private Integer curPage;

    private Integer pageSize;
}
