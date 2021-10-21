package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TExperts;
import com.riskman.backserver.pojo.TExpertsExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TExpertsDao {
    long countByExample(TExpertsExample example);

    int deleteByExample(TExpertsExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TExperts record);

    int insertSelective(TExperts record);

    List<TExperts> selectByExample(TExpertsExample example);

    TExperts selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TExperts record, @Param("example") TExpertsExample example);

    int updateByExample(@Param("record") TExperts record, @Param("example") TExpertsExample example);

    int updateByPrimaryKeySelective(TExperts record);

    int updateByPrimaryKey(TExperts record);
}