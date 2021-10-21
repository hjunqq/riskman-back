package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TEvacuationInfoDao;
import com.riskman.backserver.dto.TEvacuationInfoParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TEvacuationInfoExample;
import com.riskman.backserver.pojo.TEvacuationInfo;
import com.riskman.backserver.pojo.TEvacuationInfoExample;
import com.riskman.backserver.service.TEvacuationInfoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tEvacuationInfoService")
public class TEvacuationInfoServiceImpl implements TEvacuationInfoService {

    @Resource
    private TEvacuationInfoDao tEvacuationInfoDao;

    @Override
    public long countByExample(TEvacuationInfoExample example) {
        return tEvacuationInfoDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TEvacuationInfoExample example) {
        return tEvacuationInfoDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tEvacuationInfoDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TEvacuationInfo record) {
        return tEvacuationInfoDao.insert(record);
    }

    @Override
    public int insertSelective(TEvacuationInfo record) {
        return tEvacuationInfoDao.insertSelective(record);
    }

    @Override
    public List<TEvacuationInfo> selectByExample(TEvacuationInfoExample example) {
        return tEvacuationInfoDao.selectByExample(example);
    }

    @Override
    public TEvacuationInfo selectByPrimaryKey(Integer id) {
        return tEvacuationInfoDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TEvacuationInfo record, TEvacuationInfoExample example) {
        return tEvacuationInfoDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TEvacuationInfo record, TEvacuationInfoExample example) {
        return tEvacuationInfoDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TEvacuationInfo record) {
        return tEvacuationInfoDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TEvacuationInfo record) {
        return tEvacuationInfoDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TEvacuationInfo> selectByParam(TEvacuationInfoParam params) {
        TEvacuationInfoExample example = new TEvacuationInfoExample();
        if (params != null) {
            TEvacuationInfoExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tEvacuationInfoDao.selectByExample(example);
    }
}
