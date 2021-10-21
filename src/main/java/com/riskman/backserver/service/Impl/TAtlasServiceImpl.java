package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TAtlasDao;
import com.riskman.backserver.dto.TAtlasParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TAtlas;
import com.riskman.backserver.pojo.TAtlasExample;
import com.riskman.backserver.service.TAtlasService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tAtlasService")
public class TAtlasServiceImpl implements TAtlasService {

    @Resource
    private TAtlasDao tAtlasDao;

    @Override
    public long countByExample(TAtlasExample example) {
        return tAtlasDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TAtlasExample example) {
        return tAtlasDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tAtlasDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TAtlas record) {
        return tAtlasDao.insert(record);
    }

    @Override
    public int insertSelective(TAtlas record) {
        return tAtlasDao.insertSelective(record);
    }

    @Override
    public List<TAtlas> selectByExample(TAtlasExample example) {
        return tAtlasDao.selectByExample(example);
    }

    @Override
    public TAtlas selectByPrimaryKey(Integer id) {
        return tAtlasDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TAtlas record, TAtlasExample example) {
        return tAtlasDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TAtlas record, TAtlasExample example) {
        return tAtlasDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TAtlas record) {
        return tAtlasDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TAtlas record) {
        return tAtlasDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TAtlas> selectByParam(TAtlasParam params) {
        TAtlasExample example = new TAtlasExample();
        if (params != null) {
            TAtlasExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
        }
        if (params != null) {
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tAtlasDao.selectByExample(example);
    }
}
