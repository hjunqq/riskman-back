package com.riskman.backserver.service;

import com.riskman.backserver.dto.TDownstreamVillageParam;
import com.riskman.backserver.pojo.TDownstreamVillage;
import com.riskman.backserver.pojo.TDownstreamVillageExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TDownstreamVillageService {
    long countByExample(TDownstreamVillageExample example);

    int deleteByExample(TDownstreamVillageExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TDownstreamVillage record);

    int insertSelective(TDownstreamVillage record);

    List<TDownstreamVillage> selectByExample(TDownstreamVillageExample example);

    TDownstreamVillage selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TDownstreamVillage record, TDownstreamVillageExample example);

    int updateByExample(TDownstreamVillage record, TDownstreamVillageExample example);

    int updateByPrimaryKeySelective(TDownstreamVillage record);

    int updateByPrimaryKey(TDownstreamVillage record);

    List<TDownstreamVillage> selectByParam(TDownstreamVillageParam params);
}
