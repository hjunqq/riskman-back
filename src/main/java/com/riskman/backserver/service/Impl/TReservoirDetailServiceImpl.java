package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TReservoirDetailDao;
import com.riskman.backserver.dto.TReservoirDetailParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TReservoirDetailExample;
import com.riskman.backserver.pojo.TReservoirDetail;
import com.riskman.backserver.pojo.TReservoirDetailWithBLOBs;
import com.riskman.backserver.service.TReservoirDetailService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tReservoirDetailService")
public class TReservoirDetailServiceImpl implements TReservoirDetailService {

    @Resource
    private TReservoirDetailDao tReservoirDetailDao;

    @Override
    public long countByExample(TReservoirDetailExample example) {
        return tReservoirDetailDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TReservoirDetailExample example) {
        return tReservoirDetailDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tReservoirDetailDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TReservoirDetailWithBLOBs record) {
        return tReservoirDetailDao.insert(record);
    }

    @Override
    public int insertSelective(TReservoirDetailWithBLOBs record) {
        return tReservoirDetailDao.insertSelective(record);
    }

    @Override
    public List<TReservoirDetailWithBLOBs> selectByExampleWithBLOBs(TReservoirDetailExample example) {
        return tReservoirDetailDao.selectByExampleWithBLOBs(example);
    }

    @Override
    public List<TReservoirDetail> selectByExample(TReservoirDetailExample example) {
        return tReservoirDetailDao.selectByExample(example);
    }

    @Override
    public TReservoirDetailWithBLOBs selectByPrimaryKey(Integer id) {
        return tReservoirDetailDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TReservoirDetailWithBLOBs record, TReservoirDetailExample example) {
        return tReservoirDetailDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExampleWithBLOBs(TReservoirDetailWithBLOBs record, TReservoirDetailExample example) {
        return tReservoirDetailDao.updateByExampleWithBLOBs(record, example);
    }

    @Override
    public int updateByExample(TReservoirDetail record, TReservoirDetailExample example) {
        return tReservoirDetailDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TReservoirDetailWithBLOBs record) {
        return tReservoirDetailDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKeyWithBLOBs(TReservoirDetailWithBLOBs record) {
        return tReservoirDetailDao.updateByPrimaryKeyWithBLOBs(record);
    }

    @Override
    public int updateByPrimaryKey(TReservoirDetail record) {
        return tReservoirDetailDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TReservoirDetail> selectByParam(TReservoirDetailParam params) {
        TReservoirDetailExample example = new TReservoirDetailExample();
        if (params != null) {
            TReservoirDetailExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tReservoirDetailDao.selectByExample(example);
    }

    @Override
    public TReservoirDetailWithBLOBs selectByReservoir(int id) {
        TReservoirDetailExample example = new TReservoirDetailExample();
        example.createCriteria().andReservoiridEqualTo(id);
        List<TReservoirDetailWithBLOBs> records = tReservoirDetailDao.selectByExampleWithBLOBs(example);
        if(records.size()>0){
            return records.get(0);
        }
        return null;
    }
}
