package com.riskman.backserver.service;

import com.riskman.backserver.dto.TFloodInfoParam;
import com.riskman.backserver.pojo.TFloodInfo;
import com.riskman.backserver.pojo.TFloodInfoExample;

import java.util.List;

public interface TFloodInfoService {
    long countByExample(TFloodInfoExample example);

    int deleteByExample(TFloodInfoExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TFloodInfo record);

    int insertSelective(TFloodInfo record);

    List<TFloodInfo> selectByExample(TFloodInfoExample example);

    TFloodInfo selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TFloodInfo record, TFloodInfoExample example);

    int updateByExample(TFloodInfo record, TFloodInfoExample example);

    int updateByPrimaryKeySelective(TFloodInfo record);

    int updateByPrimaryKey(TFloodInfo record);

    List<TFloodInfo> selectByParam(TFloodInfoParam params);
}
