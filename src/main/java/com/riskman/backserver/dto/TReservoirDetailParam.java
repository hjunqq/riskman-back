package com.riskman.backserver.dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TReservoirDetailParam {
    private Integer id;

    private Integer infonatureimage;

    private Integer infoprojectimage;

    private Integer infoprojectlayoutimage;

    private Integer infosectionimage;

    private Integer reservoirid;

    private Integer curPage;

    private Integer pageSize;
}
