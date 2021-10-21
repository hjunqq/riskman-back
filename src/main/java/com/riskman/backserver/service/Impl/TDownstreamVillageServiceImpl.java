package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TDownstreamVillageDao;
import com.riskman.backserver.dto.TDownstreamVillageParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TAuthorityExample;
import com.riskman.backserver.pojo.TDownstreamVillage;
import com.riskman.backserver.pojo.TDownstreamVillageExample;
import com.riskman.backserver.service.TDownstreamVillageService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tDownstreamVillageService")
public class TDownstreamVillageServiceImpl implements TDownstreamVillageService {

    @Resource
    private TDownstreamVillageDao tDownstreamVillageDao;

    @Override
    public long countByExample(TDownstreamVillageExample example) {
        return tDownstreamVillageDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TDownstreamVillageExample example) {
        return tDownstreamVillageDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tDownstreamVillageDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TDownstreamVillage record) {
        return tDownstreamVillageDao.insert(record);
    }

    @Override
    public int insertSelective(TDownstreamVillage record) {
        return tDownstreamVillageDao.insertSelective(record);
    }

    @Override
    public List<TDownstreamVillage> selectByExample(TDownstreamVillageExample example) {
        return tDownstreamVillageDao.selectByExample(example);
    }

    @Override
    public TDownstreamVillage selectByPrimaryKey(Integer id) {
        return tDownstreamVillageDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TDownstreamVillage record, TDownstreamVillageExample example) {
        return tDownstreamVillageDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TDownstreamVillage record, TDownstreamVillageExample example) {
        return tDownstreamVillageDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TDownstreamVillage record) {
        return tDownstreamVillageDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TDownstreamVillage record) {
        return tDownstreamVillageDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TDownstreamVillage> selectByParam(TDownstreamVillageParam params) {
        TDownstreamVillageExample example = new TDownstreamVillageExample();
        if (params != null) {
            TDownstreamVillageExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tDownstreamVillageDao.selectByExample(example);
    }
}
