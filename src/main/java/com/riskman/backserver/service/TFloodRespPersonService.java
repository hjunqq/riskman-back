package com.riskman.backserver.service;

import com.riskman.backserver.dto.TFloodRespPersonParam;
import com.riskman.backserver.pojo.TFloodRespPerson;
import com.riskman.backserver.pojo.TFloodRespPersonExample;

import java.util.List;

public interface TFloodRespPersonService {
    long countByExample(TFloodRespPersonExample example);

    int deleteByExample(TFloodRespPersonExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TFloodRespPerson record);

    int insertSelective(TFloodRespPerson record);

    List<TFloodRespPerson> selectByExample(TFloodRespPersonExample example);

    TFloodRespPerson selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TFloodRespPerson record, TFloodRespPersonExample example);

    int updateByExample(TFloodRespPerson record, TFloodRespPersonExample example);

    int updateByPrimaryKeySelective(TFloodRespPerson record);

    int updateByPrimaryKey(TFloodRespPerson record);

    List<TFloodRespPerson> selectByParam(TFloodRespPersonParam params);
}
