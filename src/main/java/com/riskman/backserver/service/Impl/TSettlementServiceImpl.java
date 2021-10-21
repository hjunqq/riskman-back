package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TSettlementDao;
import com.riskman.backserver.dto.TSettlementParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TSettlementExample;
import com.riskman.backserver.pojo.TSettlement;
import com.riskman.backserver.pojo.TSettlementExample;
import com.riskman.backserver.service.TSettlementService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tSettlementService")
public class TSettlementServiceImpl implements TSettlementService{
    @Resource
    private TSettlementDao tSettlementDao;
    @Override
    public long countByExample(TSettlementExample example) {
        return tSettlementDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TSettlementExample example) {
        return tSettlementDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tSettlementDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TSettlement record) {
        return tSettlementDao.insert(record);
    }

    @Override
    public int insertSelective(TSettlement record) {
        return tSettlementDao.insertSelective(record);
    }

    @Override
    public List<TSettlement> selectByExample(TSettlementExample example) {
        return tSettlementDao.selectByExample(example);
    }

    @Override
    public TSettlement selectByPrimaryKey(Integer id) {
        return tSettlementDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TSettlement record, TSettlementExample example) {
        return tSettlementDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TSettlement record, TSettlementExample example) {
        return tSettlementDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TSettlement record) {
        return tSettlementDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TSettlement record) {
        return tSettlementDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TSettlement> selectByParam(TSettlementParam params) {
        TSettlementExample example = new TSettlementExample();
        if (params != null) {
            TSettlementExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tSettlementDao.selectByExample(example);
    }
}
