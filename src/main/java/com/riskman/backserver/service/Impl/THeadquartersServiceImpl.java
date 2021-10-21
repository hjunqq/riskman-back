package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.THeadquartersDao;
import com.riskman.backserver.dto.THeadquartersParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.THeadquarters;
import com.riskman.backserver.pojo.THeadquartersExample;
import com.riskman.backserver.service.THeadquartersService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tHeadquartersService")
public class THeadquartersServiceImpl implements THeadquartersService {
    @Resource
    private THeadquartersDao tHeadquartersDao;
    @Override
    public long countByExample(THeadquartersExample example) {
        return tHeadquartersDao.countByExample(example);
    }

    @Override
    public int deleteByExample(THeadquartersExample example) {
        return tHeadquartersDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tHeadquartersDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(THeadquarters record) {
        return tHeadquartersDao.insert(record);
    }

    @Override
    public int insertSelective(THeadquarters record) {
        return tHeadquartersDao.insertSelective(record);
    }

    @Override
    public List<THeadquarters> selectByExample(THeadquartersExample example) {
        return tHeadquartersDao.selectByExample(example);
    }

    @Override
    public THeadquarters selectByPrimaryKey(Integer id) {
        return tHeadquartersDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(THeadquarters record, THeadquartersExample example) {
        return tHeadquartersDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(THeadquarters record, THeadquartersExample example) {
        return tHeadquartersDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(THeadquarters record) {
        return tHeadquartersDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(THeadquarters record) {
        return tHeadquartersDao.updateByPrimaryKey(record);
    }

    @Override
    public List<THeadquarters> selectByParam(THeadquartersParam params) {
        THeadquartersExample example = new THeadquartersExample();
        if (params != null) {
            THeadquartersExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tHeadquartersDao.selectByExample(example);
    }
}
