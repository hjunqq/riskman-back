package com.riskman.backserver.service;

import com.riskman.backserver.dto.TEvacuationInfoParam;
import com.riskman.backserver.pojo.TEvacuationInfo;
import com.riskman.backserver.pojo.TEvacuationInfoExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TEvacuationInfoService {
    long countByExample(TEvacuationInfoExample example);

    int deleteByExample(TEvacuationInfoExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TEvacuationInfo record);

    int insertSelective(TEvacuationInfo record);

    List<TEvacuationInfo> selectByExample(TEvacuationInfoExample example);

    TEvacuationInfo selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TEvacuationInfo record, TEvacuationInfoExample example);

    int updateByExample(TEvacuationInfo record, TEvacuationInfoExample example);

    int updateByPrimaryKeySelective(TEvacuationInfo record);

    int updateByPrimaryKey(TEvacuationInfo record);

    List<TEvacuationInfo> selectByParam(TEvacuationInfoParam params);
}
