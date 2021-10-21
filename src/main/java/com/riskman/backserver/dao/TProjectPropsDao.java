package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TProjectProps;
import com.riskman.backserver.pojo.TProjectPropsExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TProjectPropsDao {
    long countByExample(TProjectPropsExample example);

    int deleteByExample(TProjectPropsExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TProjectProps record);

    int insertSelective(TProjectProps record);

    List<TProjectProps> selectByExample(TProjectPropsExample example);

    TProjectProps selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TProjectProps record, @Param("example") TProjectPropsExample example);

    int updateByExample(@Param("record") TProjectProps record, @Param("example") TProjectPropsExample example);

    int updateByPrimaryKeySelective(TProjectProps record);

    int updateByPrimaryKey(TProjectProps record);
}