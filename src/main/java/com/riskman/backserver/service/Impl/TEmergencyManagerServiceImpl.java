package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TEmergencyManagerDao;
import com.riskman.backserver.dto.TEmergencyManagerParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TEmergencyManager;
import com.riskman.backserver.pojo.TEmergencyManagerExample;
import com.riskman.backserver.service.TEmergencyManagerService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tEmergencyManagerService")
public class TEmergencyManagerServiceImpl implements TEmergencyManagerService {
    @Resource
    private TEmergencyManagerDao tEmergencyManagerDao;
    @Override
    public long countByExample(TEmergencyManagerExample example) {
        return tEmergencyManagerDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TEmergencyManagerExample example) {
        return tEmergencyManagerDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tEmergencyManagerDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TEmergencyManager record) {
        return tEmergencyManagerDao.insert(record);
    }

    @Override
    public int insertSelective(TEmergencyManager record) {
        return tEmergencyManagerDao.insertSelective(record);
    }

    @Override
    public List<TEmergencyManager> selectByExample(TEmergencyManagerExample example) {
        return tEmergencyManagerDao.selectByExample(example);
    }

    @Override
    public TEmergencyManager selectByPrimaryKey(Integer id) {
        return tEmergencyManagerDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TEmergencyManager record, TEmergencyManagerExample example) {
        return tEmergencyManagerDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TEmergencyManager record, TEmergencyManagerExample example) {
        return tEmergencyManagerDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TEmergencyManager record) {
        return tEmergencyManagerDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TEmergencyManager record) {
        return tEmergencyManagerDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TEmergencyManager> selectByParam(TEmergencyManagerParam params) {
        TEmergencyManagerExample example = new TEmergencyManagerExample();
        if (params != null) {
            TEmergencyManagerExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tEmergencyManagerDao.selectByExample(example);
    }
}
