package com.riskman.backserver.service;

import com.riskman.backserver.dto.TSettlementParam;
import com.riskman.backserver.pojo.TSettlement;
import com.riskman.backserver.pojo.TSettlementExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TSettlementService {
    long countByExample(TSettlementExample example);

    int deleteByExample(TSettlementExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TSettlement record);

    int insertSelective(TSettlement record);

    List<TSettlement> selectByExample(TSettlementExample example);

    TSettlement selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TSettlement record, TSettlementExample example);

    int updateByExample(TSettlement record, TSettlementExample example);

    int updateByPrimaryKeySelective(TSettlement record);

    int updateByPrimaryKey(TSettlement record);

    List<TSettlement> selectByParam(TSettlementParam params);
}
