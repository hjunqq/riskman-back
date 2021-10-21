package com.riskman.backserver.service;

import com.riskman.backserver.dto.TSuppliesStorageParam;
import com.riskman.backserver.pojo.TSuppliesStorage;
import com.riskman.backserver.pojo.TSuppliesStorageExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TSuppliesStorageService {
    long countByExample(TSuppliesStorageExample example);

    int deleteByExample(TSuppliesStorageExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TSuppliesStorage record);

    int insertSelective(TSuppliesStorage record);

    List<TSuppliesStorage> selectByExample(TSuppliesStorageExample example);

    TSuppliesStorage selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TSuppliesStorage record, TSuppliesStorageExample example);

    int updateByExample(TSuppliesStorage record, TSuppliesStorageExample example);

    int updateByPrimaryKeySelective(TSuppliesStorage record);

    int updateByPrimaryKey(TSuppliesStorage record);

    List<TSuppliesStorage> selectByParam(TSuppliesStorageParam params);
}
