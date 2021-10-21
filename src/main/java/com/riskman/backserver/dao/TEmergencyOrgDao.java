package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TEmergencyOrg;
import com.riskman.backserver.pojo.TEmergencyOrgExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TEmergencyOrgDao {
    long countByExample(TEmergencyOrgExample example);

    int deleteByExample(TEmergencyOrgExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TEmergencyOrg record);

    int insertSelective(TEmergencyOrg record);

    List<TEmergencyOrg> selectByExample(TEmergencyOrgExample example);

    TEmergencyOrg selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TEmergencyOrg record, @Param("example") TEmergencyOrgExample example);

    int updateByExample(@Param("record") TEmergencyOrg record, @Param("example") TEmergencyOrgExample example);

    int updateByPrimaryKeySelective(TEmergencyOrg record);

    int updateByPrimaryKey(TEmergencyOrg record);
}