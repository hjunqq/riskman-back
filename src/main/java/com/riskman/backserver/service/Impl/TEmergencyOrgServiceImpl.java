package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TEmergencyOrgDao;
import com.riskman.backserver.dto.TEmergencyOrgParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TEmergencyOrg;
import com.riskman.backserver.pojo.TEmergencyOrgExample;
import com.riskman.backserver.service.TEmergencyOrgService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tEmergencyOrgService")
public class TEmergencyOrgServiceImpl implements TEmergencyOrgService {
    @Resource
    private TEmergencyOrgDao tEmergencyOrgDao;
    @Override
    public long countByExample(TEmergencyOrgExample example) {
        return tEmergencyOrgDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TEmergencyOrgExample example) {
        return tEmergencyOrgDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tEmergencyOrgDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TEmergencyOrg record) {
        return tEmergencyOrgDao.insert(record);
    }

    @Override
    public int insertSelective(TEmergencyOrg record) {
        return tEmergencyOrgDao.insertSelective(record);
    }

    @Override
    public List<TEmergencyOrg> selectByExample(TEmergencyOrgExample example) {
        return tEmergencyOrgDao.selectByExample(example);
    }

    @Override
    public TEmergencyOrg selectByPrimaryKey(Integer id) {
        return tEmergencyOrgDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TEmergencyOrg record, TEmergencyOrgExample example) {
        return tEmergencyOrgDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TEmergencyOrg record, TEmergencyOrgExample example) {
        return tEmergencyOrgDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TEmergencyOrg record) {
        return tEmergencyOrgDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TEmergencyOrg record) {
        return tEmergencyOrgDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TEmergencyOrg> selectByParam(TEmergencyOrgParam params) {
        TEmergencyOrgExample example = new TEmergencyOrgExample();
        if (params != null) {
            TEmergencyOrgExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tEmergencyOrgDao.selectByExample(example);
    }
}
