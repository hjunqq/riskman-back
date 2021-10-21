package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TAtlas;
import com.riskman.backserver.pojo.TAtlasExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TAtlasDao {
    long countByExample(TAtlasExample example);

    int deleteByExample(TAtlasExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TAtlas record);

    int insertSelective(TAtlas record);

    List<TAtlas> selectByExample(TAtlasExample example);

    TAtlas selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TAtlas record, @Param("example") TAtlasExample example);

    int updateByExample(@Param("record") TAtlas record, @Param("example") TAtlasExample example);

    int updateByPrimaryKeySelective(TAtlas record);

    int updateByPrimaryKey(TAtlas record);
}