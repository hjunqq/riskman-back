package com.riskman.backserver.service;

import com.riskman.backserver.dto.TDutyParam;
import com.riskman.backserver.pojo.TDuty;
import com.riskman.backserver.pojo.TDutyExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TDutyService {
    long countByExample(TDutyExample example);

    int deleteByExample(TDutyExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TDuty record);

    int insertSelective(TDuty record);

    List<TDuty> selectByExample(TDutyExample example);

    TDuty selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TDuty record, TDutyExample example);

    int updateByExample(TDuty record, TDutyExample example);

    int updateByPrimaryKeySelective(TDuty record);

    int updateByPrimaryKey(TDuty record);

    List<TDuty> selectByParam(TDutyParam params);
}
