package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TDuty;
import com.riskman.backserver.pojo.TDutyExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TDutyDao {
    long countByExample(TDutyExample example);

    int deleteByExample(TDutyExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TDuty record);

    int insertSelective(TDuty record);

    List<TDuty> selectByExample(TDutyExample example);

    TDuty selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TDuty record, @Param("example") TDutyExample example);

    int updateByExample(@Param("record") TDuty record, @Param("example") TDutyExample example);

    int updateByPrimaryKeySelective(TDuty record);

    int updateByPrimaryKey(TDuty record);
}