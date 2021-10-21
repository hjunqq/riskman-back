package com.riskman.backserver.service;

import com.riskman.backserver.dto.TEmergencyManagerParam;
import com.riskman.backserver.pojo.TEmergencyManager;
import com.riskman.backserver.pojo.TEmergencyManagerExample;

import java.util.List;

public interface TEmergencyManagerService {
    long countByExample(TEmergencyManagerExample example);

    int deleteByExample(TEmergencyManagerExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TEmergencyManager record);

    int insertSelective(TEmergencyManager record);

    List<TEmergencyManager> selectByExample(TEmergencyManagerExample example);

    TEmergencyManager selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TEmergencyManager record, TEmergencyManagerExample example);

    int updateByExample(TEmergencyManager record, TEmergencyManagerExample example);

    int updateByPrimaryKeySelective(TEmergencyManager record);

    int updateByPrimaryKey(TEmergencyManager record);

    List<TEmergencyManager> selectByParam(TEmergencyManagerParam params);
}
