package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TSuppliesStorageParam {
    private Integer id;

    private String name;

    private Double quantity;

    private String storagepoint;

    private Integer personid;

    private Integer reservoirid;


    private Integer curPage;

    private Integer pageSize;
}