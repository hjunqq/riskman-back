package com.riskman.backserver.service;

import com.riskman.backserver.dto.TProjectPropsParam;
import com.riskman.backserver.pojo.TProjectProps;
import com.riskman.backserver.pojo.TProjectPropsExample;

import java.util.List;

public interface TProjectPropsService {
    long countByExample(TProjectPropsExample example);

    int deleteByExample(TProjectPropsExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TProjectProps record);

    int insertSelective(TProjectProps record);

    List<TProjectProps> selectByExample(TProjectPropsExample example);

    TProjectProps selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TProjectProps record, TProjectPropsExample example);

    int updateByExample(TProjectProps record, TProjectPropsExample example);

    int updateByPrimaryKeySelective(TProjectProps record);

    int updateByPrimaryKey(TProjectProps record);

    List<TProjectProps> selectByParam(TProjectPropsParam params);
}
