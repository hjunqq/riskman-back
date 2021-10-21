package com.riskman.backserver.service;

import com.riskman.backserver.pojo.TUser;
import com.riskman.backserver.pojo.TUserExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TUserService {
    long countByExample(TUserExample example);

    int deleteByExample(TUserExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TUser record);

    int insertSelective(TUser record);

    List<TUser> selectByExample(TUserExample example);

    TUser selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TUser record, TUserExample example);

    int updateByExample(TUser record, TUserExample example);

    int updateByPrimaryKeySelective(TUser record);

    int updateByPrimaryKey(TUser record);

    TUser getUserByUserName(String userName);
}
