package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TSuppliesStorage;
import com.riskman.backserver.pojo.TSuppliesStorageExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TSuppliesStorageDao {
    long countByExample(TSuppliesStorageExample example);

    int deleteByExample(TSuppliesStorageExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TSuppliesStorage record);

    int insertSelective(TSuppliesStorage record);

    List<TSuppliesStorage> selectByExample(TSuppliesStorageExample example);

    TSuppliesStorage selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TSuppliesStorage record, @Param("example") TSuppliesStorageExample example);

    int updateByExample(@Param("record") TSuppliesStorage record, @Param("example") TSuppliesStorageExample example);

    int updateByPrimaryKeySelective(TSuppliesStorage record);

    int updateByPrimaryKey(TSuppliesStorage record);
}