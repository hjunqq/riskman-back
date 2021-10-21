package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TExpertsDao;
import com.riskman.backserver.dto.TExpertsParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TExperts;
import com.riskman.backserver.pojo.TExpertsExample;
import com.riskman.backserver.service.TExpertsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tExpertsService")
public class TExpertsServiceImpl implements TExpertsService {
    @Resource
    private TExpertsDao tExpertsDao;
    @Override
    public long countByExample(TExpertsExample example) {
        return tExpertsDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TExpertsExample example) {
        return tExpertsDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tExpertsDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TExperts record) {
        return tExpertsDao.insert(record);
    }

    @Override
    public int insertSelective(TExperts record) {
        return tExpertsDao.insertSelective(record);
    }

    @Override
    public List<TExperts> selectByExample(TExpertsExample example) {
        return tExpertsDao.selectByExample(example);
    }

    @Override
    public TExperts selectByPrimaryKey(Integer id) {
        return tExpertsDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TExperts record, TExpertsExample example) {
        return tExpertsDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TExperts record, TExpertsExample example) {
        return tExpertsDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TExperts record) {
        return tExpertsDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TExperts record) {
        return tExpertsDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TExperts> selectByParam(TExpertsParam params) {
        TExpertsExample example = new TExpertsExample();
        if (params != null) {
            TExpertsExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tExpertsDao.selectByExample(example);
    }
}
