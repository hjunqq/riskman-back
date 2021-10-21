package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TFloodInfo;
import com.riskman.backserver.pojo.TFloodInfoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TFloodInfoDao {
    long countByExample(TFloodInfoExample example);

    int deleteByExample(TFloodInfoExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TFloodInfo record);

    int insertSelective(TFloodInfo record);

    List<TFloodInfo> selectByExample(TFloodInfoExample example);

    TFloodInfo selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TFloodInfo record, @Param("example") TFloodInfoExample example);

    int updateByExample(@Param("record") TFloodInfo record, @Param("example") TFloodInfoExample example);

    int updateByPrimaryKeySelective(TFloodInfo record);

    int updateByPrimaryKey(TFloodInfo record);
}