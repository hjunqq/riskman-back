package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TFilePathParam {
    private Integer id;

    private String filename;

    private String storename;

    private String path;

    private String fileurl;

    private Integer reservoirid;

    private Integer curPage;

    private Integer pageSize;
}
