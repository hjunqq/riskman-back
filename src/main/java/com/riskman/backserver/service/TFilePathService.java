package com.riskman.backserver.service;

import com.riskman.backserver.pojo.TFilePath;
import com.riskman.backserver.pojo.TFilePathExample;

import java.util.List;

public interface TFilePathService {
    long countByExample(TFilePathExample example);

    int deleteByExample(TFilePathExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(TFilePath record);

    int insertSelective(TFilePath record);

    List<TFilePath> selectByExample(TFilePathExample example);

    TFilePath selectByPrimaryKey(Integer id);

    int updateByExampleSelective(TFilePath record, TFilePathExample example);

    int updateByExample(TFilePath record, TFilePathExample example);

    int updateByPrimaryKeySelective(TFilePath record);

    int updateByPrimaryKey(TFilePath record);
}
