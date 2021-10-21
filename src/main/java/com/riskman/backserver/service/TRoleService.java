package com.riskman.backserver.service;

import com.riskman.backserver.pojo.TRole;
import com.riskman.backserver.pojo.TRoleExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TRoleService {
    long countByExample(TRoleExample example);

    int deleteByExample(TRoleExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TRole record);

    int insertSelective(TRole record);

    List<TRole> selectByExample(TRoleExample example);

    TRole selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TRole record, TRoleExample example);

    int updateByExample(TRole record, TRoleExample example);

    int updateByPrimaryKeySelective(TRole record);

    int updateByPrimaryKey(TRole record);

    List<String> getRoleByUser(Integer id);
}
