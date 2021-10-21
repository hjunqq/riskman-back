package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TEmergencyManager;
import com.riskman.backserver.pojo.TEmergencyManagerExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TEmergencyManagerDao {
    long countByExample(TEmergencyManagerExample example);

    int deleteByExample(TEmergencyManagerExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TEmergencyManager record);

    int insertSelective(TEmergencyManager record);

    List<TEmergencyManager> selectByExample(TEmergencyManagerExample example);

    TEmergencyManager selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TEmergencyManager record, @Param("example") TEmergencyManagerExample example);

    int updateByExample(@Param("record") TEmergencyManager record, @Param("example") TEmergencyManagerExample example);

    int updateByPrimaryKeySelective(TEmergencyManager record);

    int updateByPrimaryKey(TEmergencyManager record);
}