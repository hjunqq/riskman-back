package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TFloodInfoDao;
import com.riskman.backserver.dto.TFloodInfoParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TFloodInfo;
import com.riskman.backserver.pojo.TFloodInfoExample;
import com.riskman.backserver.service.TFloodInfoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tFloodInfoService")
public class TFloodInfoServiceImpl implements TFloodInfoService {
    @Resource
    private TFloodInfoDao tFloodInfoDao;
    @Override
    public long countByExample(TFloodInfoExample example) {
        return tFloodInfoDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TFloodInfoExample example) {
        return tFloodInfoDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tFloodInfoDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TFloodInfo record) {
        return tFloodInfoDao.insert(record);
    }

    @Override
    public int insertSelective(TFloodInfo record) {
        return tFloodInfoDao.insertSelective(record);
    }

    @Override
    public List<TFloodInfo> selectByExample(TFloodInfoExample example) {
        return tFloodInfoDao.selectByExample(example);
    }

    @Override
    public TFloodInfo selectByPrimaryKey(Integer id) {
        return tFloodInfoDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TFloodInfo record, TFloodInfoExample example) {
        return tFloodInfoDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TFloodInfo record, TFloodInfoExample example) {
        return tFloodInfoDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TFloodInfo record) {
        return tFloodInfoDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TFloodInfo record) {
        return tFloodInfoDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TFloodInfo> selectByParam(TFloodInfoParam params) {
        TFloodInfoExample example = new TFloodInfoExample();
        if (params != null) {
            TFloodInfoExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tFloodInfoDao.selectByExample(example);
    }
}
