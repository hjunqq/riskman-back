package com.riskman.backserver.service;

import com.riskman.backserver.dto.TExpertsParam;
import com.riskman.backserver.pojo.TExperts;
import com.riskman.backserver.pojo.TExpertsExample;

import java.util.List;

public interface TExpertsService {
    long countByExample(TExpertsExample example);

    int deleteByExample(TExpertsExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TExperts record);

    int insertSelective(TExperts record);

    List<TExperts> selectByExample(TExpertsExample example);

    TExperts selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TExperts record, TExpertsExample example);

    int updateByExample(TExperts record, TExpertsExample example);

    int updateByPrimaryKeySelective(TExperts record);

    int updateByPrimaryKey(TExperts record);

    List<TExperts> selectByParam(TExpertsParam params);
}
