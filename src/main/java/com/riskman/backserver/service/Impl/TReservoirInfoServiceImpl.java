package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TReservoirInfoDao;
import com.riskman.backserver.dto.TReservoirInfoParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TReservoirInfoExample;
import com.riskman.backserver.pojo.TReservoirInfo;
import com.riskman.backserver.pojo.TReservoirInfoExample;
import com.riskman.backserver.service.TReservoirInfoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tReservoirInfoService")
public class TReservoirInfoServiceImpl implements TReservoirInfoService {
    @Resource
    private TReservoirInfoDao tReservoirInfoDao;
    @Override
    public long countByExample(TReservoirInfoExample example) {
        return tReservoirInfoDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TReservoirInfoExample example) {
        return tReservoirInfoDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tReservoirInfoDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TReservoirInfo record) {
        return tReservoirInfoDao.insert(record);
    }

    @Override
    public int insertSelective(TReservoirInfo record) {
        return tReservoirInfoDao.insertSelective(record);
    }

    @Override
    public List<TReservoirInfo> selectByExample(TReservoirInfoExample example) {
        return tReservoirInfoDao.selectByExample(example);
    }

    @Override
    public TReservoirInfo selectByPrimaryKey(Integer id) {
        return tReservoirInfoDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TReservoirInfo record, TReservoirInfoExample example) {
        return tReservoirInfoDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TReservoirInfo record, TReservoirInfoExample example) {
        return tReservoirInfoDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TReservoirInfo record) {
        return tReservoirInfoDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TReservoirInfo record) {
        return tReservoirInfoDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TReservoirInfo> selectByParam(TReservoirInfoParam params) {
        TReservoirInfoExample example = new TReservoirInfoExample();
        if (params != null) {
            TReservoirInfoExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tReservoirInfoDao.selectByExample(example);
    }
}
