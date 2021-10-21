package com.riskman.backserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TUnitParam {
    private Integer id;

    private String name;

    private Integer curPage;

    private Integer pageSize;
}
