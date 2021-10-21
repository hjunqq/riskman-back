package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TEvacuationInfo;
import com.riskman.backserver.pojo.TEvacuationInfoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TEvacuationInfoDao {
    long countByExample(TEvacuationInfoExample example);

    int deleteByExample(TEvacuationInfoExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TEvacuationInfo record);

    int insertSelective(TEvacuationInfo record);

    List<TEvacuationInfo> selectByExample(TEvacuationInfoExample example);

    TEvacuationInfo selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TEvacuationInfo record, @Param("example") TEvacuationInfoExample example);

    int updateByExample(@Param("record") TEvacuationInfo record, @Param("example") TEvacuationInfoExample example);

    int updateByPrimaryKeySelective(TEvacuationInfo record);

    int updateByPrimaryKey(TEvacuationInfo record);
}