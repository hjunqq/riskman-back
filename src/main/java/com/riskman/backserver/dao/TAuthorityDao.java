package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TAuthority;
import com.riskman.backserver.pojo.TAuthorityExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TAuthorityDao {
    long countByExample(TAuthorityExample example);

    int deleteByExample(TAuthorityExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TAuthority record);

    int insertSelective(TAuthority record);

    List<TAuthority> selectByExample(TAuthorityExample example);

    TAuthority selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TAuthority record, @Param("example") TAuthorityExample example);

    int updateByExample(@Param("record") TAuthority record, @Param("example") TAuthorityExample example);

    int updateByPrimaryKeySelective(TAuthority record);

    int updateByPrimaryKey(TAuthority record);
}