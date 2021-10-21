package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TSettlement;
import com.riskman.backserver.pojo.TSettlementExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TSettlementDao {
    long countByExample(TSettlementExample example);

    int deleteByExample(TSettlementExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TSettlement record);

    int insertSelective(TSettlement record);

    List<TSettlement> selectByExample(TSettlementExample example);

    TSettlement selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TSettlement record, @Param("example") TSettlementExample example);

    int updateByExample(@Param("record") TSettlement record, @Param("example") TSettlementExample example);

    int updateByPrimaryKeySelective(TSettlement record);

    int updateByPrimaryKey(TSettlement record);
}