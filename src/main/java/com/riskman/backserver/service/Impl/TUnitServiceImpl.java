package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TUnitDao;
import com.riskman.backserver.dto.TUnitParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TUnit;
import com.riskman.backserver.pojo.TUnitExample;
import com.riskman.backserver.service.TUnitService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tUnitService")
public class TUnitServiceImpl implements TUnitService{
    @Resource
    private TUnitDao tUnitDao;
    @Override
    public long countByExample(TUnitExample example) {
        return tUnitDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TUnitExample example) {
        return tUnitDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tUnitDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TUnit record) {
        return tUnitDao.insert(record);
    }

    @Override
    public int insertSelective(TUnit record) {
        return tUnitDao.insertSelective(record);
    }

    @Override
    public List<TUnit> selectByExample(TUnitExample example) {
        return tUnitDao.selectByExample(example);
    }

    @Override
    public TUnit selectByPrimaryKey(Integer id) {
        return tUnitDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TUnit record, TUnitExample example) {
        return tUnitDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TUnit record, TUnitExample example) {
        return tUnitDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TUnit record) {
        return tUnitDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TUnit record) {
        return tUnitDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TUnit> selectByParam(TUnitParam params) {
        TUnitExample example = new TUnitExample();
        if (params != null) {
            TUnitExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tUnitDao.selectByExample(example);
    }
}
