package com.riskman.backserver.service;

import com.riskman.backserver.dto.TAuthorityParam;
import com.riskman.backserver.pojo.TAuthority;
import com.riskman.backserver.pojo.TAuthorityExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TAuthorityService {
    long countByExample(TAuthorityExample example);

    int deleteByExample(TAuthorityExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TAuthority record);

    int insertSelective(TAuthority record);

    List<TAuthority> selectByExample(TAuthorityExample example);

    TAuthority selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TAuthority record, TAuthorityExample example);

    int updateByExample(TAuthority record, TAuthorityExample example);

    int updateByPrimaryKeySelective(TAuthority record);

    int updateByPrimaryKey(TAuthority record);

    List<TAuthority> selectByParam(TAuthorityParam params);
}
