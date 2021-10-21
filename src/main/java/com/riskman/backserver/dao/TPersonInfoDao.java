package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TPersonInfo;
import com.riskman.backserver.pojo.TPersonInfoExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TPersonInfoDao {
    long countByExample(TPersonInfoExample example);

    int deleteByExample(TPersonInfoExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TPersonInfo record);

    int insertSelective(TPersonInfo record);

    List<TPersonInfo> selectByExample(TPersonInfoExample example);

    TPersonInfo selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TPersonInfo record, @Param("example") TPersonInfoExample example);

    int updateByExample(@Param("record") TPersonInfo record, @Param("example") TPersonInfoExample example);

    int updateByPrimaryKeySelective(TPersonInfo record);

    int updateByPrimaryKey(TPersonInfo record);
}