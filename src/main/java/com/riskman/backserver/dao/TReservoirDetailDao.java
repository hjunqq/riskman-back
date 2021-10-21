package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TReservoirDetail;
import com.riskman.backserver.pojo.TReservoirDetailExample;
import com.riskman.backserver.pojo.TReservoirDetailWithBLOBs;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TReservoirDetailDao {
    long countByExample(TReservoirDetailExample example);

    int deleteByExample(TReservoirDetailExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TReservoirDetailWithBLOBs record);

    int insertSelective(TReservoirDetailWithBLOBs record);

    List<TReservoirDetailWithBLOBs> selectByExampleWithBLOBs(TReservoirDetailExample example);

    List<TReservoirDetail> selectByExample(TReservoirDetailExample example);

    TReservoirDetailWithBLOBs selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TReservoirDetailWithBLOBs record, @Param("example") TReservoirDetailExample example);

    int updateByExampleWithBLOBs(@Param("record") TReservoirDetailWithBLOBs record, @Param("example") TReservoirDetailExample example);

    int updateByExample(@Param("record") TReservoirDetail record, @Param("example") TReservoirDetailExample example);

    int updateByPrimaryKeySelective(TReservoirDetailWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(TReservoirDetailWithBLOBs record);

    int updateByPrimaryKey(TReservoirDetail record);
}