package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TAtlasParam {
    private Integer id;

    private Integer reservoirid;

    private String imagepath;

    private String imagetype;

    private Integer curPage;

    private Integer pageSize;
}
