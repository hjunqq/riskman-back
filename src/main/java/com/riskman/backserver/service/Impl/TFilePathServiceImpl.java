package com.riskman.backserver.service.Impl;

import com.riskman.backserver.dao.TFilePathDao;
import com.riskman.backserver.pojo.TFilePath;
import com.riskman.backserver.pojo.TFilePathExample;
import com.riskman.backserver.service.TFilePathService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tFilePathService")
public class TFilePathServiceImpl implements TFilePathService {

    @Resource
    private TFilePathDao tFilePathDao;

    @Override
    public long countByExample(TFilePathExample example) {
        return tFilePathDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TFilePathExample example) {
        return tFilePathDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tFilePathDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TFilePath record) {
        return tFilePathDao.insert(record);
    }

    @Override
    public int insertSelective(TFilePath record) {
        return tFilePathDao.insertSelective(record);
    }

    @Override
    public List<TFilePath> selectByExample(TFilePathExample example) {
        return tFilePathDao.selectByExample(example);
    }

    @Override
    public TFilePath selectByPrimaryKey(Integer id) {
        return tFilePathDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TFilePath record, TFilePathExample example) {
        return tFilePathDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TFilePath record, TFilePathExample example) {
        return tFilePathDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TFilePath record) {
        return tFilePathDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TFilePath record) {
        return tFilePathDao.updateByPrimaryKey(record);
    }
}
