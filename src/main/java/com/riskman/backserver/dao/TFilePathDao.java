package com.riskman.backserver.dao;

import com.riskman.backserver.pojo.TFilePath;
import com.riskman.backserver.pojo.TFilePathExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TFilePathDao {
    long countByExample(TFilePathExample example);

    int deleteByExample(TFilePathExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TFilePath record);

    int insertSelective(TFilePath record);

    List<TFilePath> selectByExample(TFilePathExample example);

    TFilePath selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") TFilePath record, @Param("example") TFilePathExample example);

    int updateByExample(@Param("record") TFilePath record, @Param("example") TFilePathExample example);

    int updateByPrimaryKeySelective(TFilePath record);

    int updateByPrimaryKey(TFilePath record);
}