package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TDownstreamVillage;
import com.riskman.backserver.pojo.TDownstreamVillageExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TDownstreamVillageDao {
    long countByExample(TDownstreamVillageExample example);

    int deleteByExample(TDownstreamVillageExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TDownstreamVillage record);

    int insertSelective(TDownstreamVillage record);

    List<TDownstreamVillage> selectByExample(TDownstreamVillageExample example);

    TDownstreamVillage selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TDownstreamVillage record, @Param("example") TDownstreamVillageExample example);

    int updateByExample(@Param("record") TDownstreamVillage record, @Param("example") TDownstreamVillageExample example);

    int updateByPrimaryKeySelective(TDownstreamVillage record);

    int updateByPrimaryKey(TDownstreamVillage record);
}