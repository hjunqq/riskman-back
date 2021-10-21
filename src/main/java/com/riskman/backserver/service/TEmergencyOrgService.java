package com.riskman.backserver.service;

import com.riskman.backserver.dto.TEmergencyOrgParam;
import com.riskman.backserver.pojo.TEmergencyOrg;
import com.riskman.backserver.pojo.TEmergencyOrgExample;

import java.util.List;

public interface TEmergencyOrgService {
    long countByExample(TEmergencyOrgExample example);

    int deleteByExample(TEmergencyOrgExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TEmergencyOrg record);

    int insertSelective(TEmergencyOrg record);

    List<TEmergencyOrg> selectByExample(TEmergencyOrgExample example);

    TEmergencyOrg selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TEmergencyOrg record, TEmergencyOrgExample example);

    int updateByExample(TEmergencyOrg record, TEmergencyOrgExample example);

    int updateByPrimaryKeySelective(TEmergencyOrg record);

    int updateByPrimaryKey(TEmergencyOrg record);

    List<TEmergencyOrg> selectByParam(TEmergencyOrgParam params);
}
