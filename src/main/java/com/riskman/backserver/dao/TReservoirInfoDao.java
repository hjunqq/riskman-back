package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TReservoirInfo;
import com.riskman.backserver.pojo.TReservoirInfoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TReservoirInfoDao {
    long countByExample(TReservoirInfoExample example);

    int deleteByExample(TReservoirInfoExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TReservoirInfo record);

    int insertSelective(TReservoirInfo record);

    List<TReservoirInfo> selectByExample(TReservoirInfoExample example);

    TReservoirInfo selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TReservoirInfo record, @Param("example") TReservoirInfoExample example);

    int updateByExample(@Param("record") TReservoirInfo record, @Param("example") TReservoirInfoExample example);

    int updateByPrimaryKeySelective(TReservoirInfo record);

    int updateByPrimaryKey(TReservoirInfo record);
}