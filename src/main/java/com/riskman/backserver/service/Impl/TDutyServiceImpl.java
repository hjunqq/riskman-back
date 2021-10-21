package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TDutyDao;
import com.riskman.backserver.dto.TDutyParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TDutyExample;
import com.riskman.backserver.pojo.TDuty;
import com.riskman.backserver.pojo.TDutyExample;
import com.riskman.backserver.service.TDutyService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tDutyService")
public class TDutyServiceImpl implements TDutyService {

    @Resource
    private TDutyDao tDutyDao;

    @Override
    public long countByExample(TDutyExample example) {
        return tDutyDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TDutyExample example) {
        return tDutyDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tDutyDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TDuty record) {
        return tDutyDao.insert(record);
    }

    @Override
    public int insertSelective(TDuty record) {
        return tDutyDao.insertSelective(record);
    }

    @Override
    public List<TDuty> selectByExample(TDutyExample example) {
        return tDutyDao.selectByExample(example);
    }

    @Override
    public TDuty selectByPrimaryKey(Integer id) {
        return tDutyDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TDuty record, TDutyExample example) {
        return tDutyDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TDuty record, TDutyExample example) {
        return tDutyDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TDuty record) {
        return tDutyDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TDuty record) {
        return tDutyDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TDuty> selectByParam(TDutyParam params) {
        TDutyExample example = new TDutyExample();
        if (params != null) {
            TDutyExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tDutyDao.selectByExample(example);
    }
}
