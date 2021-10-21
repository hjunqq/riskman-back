package com.riskman.backserver.service;

import com.riskman.backserver.dto.TAtlasParam;
import com.riskman.backserver.pojo.TAtlas;
import com.riskman.backserver.pojo.TAtlasExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TAtlasService {
    long countByExample(TAtlasExample example);

    int deleteByExample(TAtlasExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TAtlas record);

    int insertSelective(TAtlas record);

    List<TAtlas> selectByExample(TAtlasExample example);

    TAtlas selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TAtlas record, TAtlasExample example);

    int updateByExample(TAtlas record, TAtlasExample example);

    int updateByPrimaryKeySelective(TAtlas record);

    int updateByPrimaryKey(TAtlas record);

    List<TAtlas> selectByParam(TAtlasParam params);
}
