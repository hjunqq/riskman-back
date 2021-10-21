package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.THeadquarters;
import com.riskman.backserver.pojo.THeadquartersExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface THeadquartersDao {
    long countByExample(THeadquartersExample example);

    int deleteByExample(THeadquartersExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(THeadquarters record);

    int insertSelective(THeadquarters record);

    List<THeadquarters> selectByExample(THeadquartersExample example);

    THeadquarters selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") THeadquarters record, @Param("example") THeadquartersExample example);

    int updateByExample(@Param("record") THeadquarters record, @Param("example") THeadquartersExample example);

    int updateByPrimaryKeySelective(THeadquarters record);

    int updateByPrimaryKey(THeadquarters record);
}