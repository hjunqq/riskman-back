package com.riskman.backserver.service;

import com.riskman.backserver.dto.THeadquartersParam;
import com.riskman.backserver.pojo.THeadquarters;
import com.riskman.backserver.pojo.THeadquartersExample;

import java.util.List;

public interface THeadquartersService {
    long countByExample(THeadquartersExample example);

    int deleteByExample(THeadquartersExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(THeadquarters record);

    int insertSelective(THeadquarters record);

    List<THeadquarters> selectByExample(THeadquartersExample example);

    THeadquarters selectByPrimaryKey(Integer id);

    int updateByExampleSelective(THeadquarters record, THeadquartersExample example);

    int updateByExample(THeadquarters record, THeadquartersExample example);

    int updateByPrimaryKeySelective(THeadquarters record);

    int updateByPrimaryKey(THeadquarters record);

    List<THeadquarters> selectByParam(THeadquartersParam params);
}
