package com.riskman.backserver.service;

import com.riskman.backserver.dto.TPersonInfoParam;
import com.riskman.backserver.pojo.TPersonInfo;
import com.riskman.backserver.pojo.TPersonInfoExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TPersonInfoService {
    long countByExample(TPersonInfoExample example);

    int deleteByExample(TPersonInfoExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TPersonInfo record);

    int insertSelective(TPersonInfo record);

    List<TPersonInfo> selectByExample(TPersonInfoExample example);

    TPersonInfo selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TPersonInfo record, TPersonInfoExample example);

    int updateByExample(TPersonInfo record, TPersonInfoExample example);

    int updateByPrimaryKeySelective(TPersonInfo record);

    int updateByPrimaryKey(TPersonInfo record);

    List<TPersonInfo> selectByParam(TPersonInfoParam params);
}
