package com.riskman.backserver.service;

import com.riskman.backserver.dto.TReservoirDetailParam;
import com.riskman.backserver.pojo.TReservoirDetail;
import com.riskman.backserver.pojo.TReservoirDetailExample;
import com.riskman.backserver.pojo.TReservoirDetailWithBLOBs;

import java.util.List;

public interface TReservoirDetailService {

    long countByExample(TReservoirDetailExample example);

    int deleteByExample(TReservoirDetailExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TReservoirDetailWithBLOBs record);

    int insertSelective(TReservoirDetailWithBLOBs record);

    List<TReservoirDetailWithBLOBs> selectByExampleWithBLOBs(TReservoirDetailExample example);

    List<TReservoirDetail> selectByExample(TReservoirDetailExample example);

    TReservoirDetailWithBLOBs selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TReservoirDetailWithBLOBs record, TReservoirDetailExample example);

    int updateByExampleWithBLOBs(TReservoirDetailWithBLOBs record,  TReservoirDetailExample example);

    int updateByExample(TReservoirDetail record, TReservoirDetailExample example);

    int updateByPrimaryKeySelective(TReservoirDetailWithBLOBs record);

    int updateByPrimaryKeyWithBLOBs(TReservoirDetailWithBLOBs record);

    int updateByPrimaryKey(TReservoirDetail record);

    List<TReservoirDetail> selectByParam(TReservoirDetailParam params);

    TReservoirDetailWithBLOBs selectByReservoir(int id);
}
