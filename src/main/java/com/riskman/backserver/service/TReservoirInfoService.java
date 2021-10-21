package com.riskman.backserver.service;

import com.riskman.backserver.dto.TReservoirInfoParam;
import com.riskman.backserver.pojo.TReservoirInfo;
import com.riskman.backserver.pojo.TReservoirInfoExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TReservoirInfoService {
    long countByExample(TReservoirInfoExample example);

    int deleteByExample(TReservoirInfoExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TReservoirInfo record);

    int insertSelective(TReservoirInfo record);

    List<TReservoirInfo> selectByExample(TReservoirInfoExample example);

    TReservoirInfo selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TReservoirInfo record, TReservoirInfoExample example);

    int updateByExample(TReservoirInfo record, TReservoirInfoExample example);

    int updateByPrimaryKeySelective(TReservoirInfo record);

    int updateByPrimaryKey(TReservoirInfo record);

    List<TReservoirInfo> selectByParam(TReservoirInfoParam params);
}
