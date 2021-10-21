package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TFloodRespPerson;
import com.riskman.backserver.pojo.TFloodRespPersonExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TFloodRespPersonDao {
    long countByExample(TFloodRespPersonExample example);

    int deleteByExample(TFloodRespPersonExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TFloodRespPerson record);

    int insertSelective(TFloodRespPerson record);

    List<TFloodRespPerson> selectByExample(TFloodRespPersonExample example);

    TFloodRespPerson selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TFloodRespPerson record, @Param("example") TFloodRespPersonExample example);

    int updateByExample(@Param("record") TFloodRespPerson record, @Param("example") TFloodRespPersonExample example);

    int updateByPrimaryKeySelective(TFloodRespPerson record);

    int updateByPrimaryKey(TFloodRespPerson record);
}