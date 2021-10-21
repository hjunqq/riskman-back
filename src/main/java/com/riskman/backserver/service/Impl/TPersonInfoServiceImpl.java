package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TPersonInfoDao;
import com.riskman.backserver.dto.TPersonInfoParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TPersonInfoExample;
import com.riskman.backserver.pojo.TPersonInfo;
import com.riskman.backserver.pojo.TPersonInfoExample;
import com.riskman.backserver.service.TPersonInfoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tPersonInfoService")
public class TPersonInfoServiceImpl implements TPersonInfoService {
    @Resource
    private TPersonInfoDao tPersonInfoDao;
    @Override
    public long countByExample(TPersonInfoExample example) {
        return tPersonInfoDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TPersonInfoExample example) {
        return tPersonInfoDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tPersonInfoDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TPersonInfo record) {
        return tPersonInfoDao.insert(record);
    }

    @Override
    public int insertSelective(TPersonInfo record) {
        return tPersonInfoDao.insertSelective(record);
    }

    @Override
    public List<TPersonInfo> selectByExample(TPersonInfoExample example) {
        return tPersonInfoDao.selectByExample(example);
    }

    @Override
    public TPersonInfo selectByPrimaryKey(Integer id) {
        return tPersonInfoDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TPersonInfo record, TPersonInfoExample example) {
        return tPersonInfoDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TPersonInfo record, TPersonInfoExample example) {
        return tPersonInfoDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TPersonInfo record) {
        return tPersonInfoDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TPersonInfo record) {
        return tPersonInfoDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TPersonInfo> selectByParam(TPersonInfoParam params) {
        TPersonInfoExample example = new TPersonInfoExample();
        if (params != null) {
            TPersonInfoExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tPersonInfoDao.selectByExample(example);
    }
}
