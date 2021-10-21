package com.riskman.backserver.service;

import com.riskman.backserver.dto.TUnitParam;
import com.riskman.backserver.pojo.TUnit;
import com.riskman.backserver.pojo.TUnitExample;

import java.util.List;

public interface TUnitService {
    long countByExample(TUnitExample example);

    int deleteByExample(TUnitExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TUnit record);

    int insertSelective(TUnit record);

    List<TUnit> selectByExample(TUnitExample example);

    TUnit selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TUnit record, TUnitExample example);

    int updateByExample(TUnit record, TUnitExample example);

    int updateByPrimaryKeySelective(TUnit record);

    int updateByPrimaryKey(TUnit record);

    List<TUnit> selectByParam(TUnitParam params);
}
