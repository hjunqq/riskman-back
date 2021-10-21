package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TAuthorityDao;
import com.riskman.backserver.dto.TAuthorityParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TAuthority;
import com.riskman.backserver.pojo.TAuthorityExample;
import com.riskman.backserver.service.TAuthorityService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tAuthorityService")
public class TAuthorityServiceImpl implements TAuthorityService {

    @Resource
    private TAuthorityDao tAuthorityDao;

    @Override
    public long countByExample(TAuthorityExample example) {
        return tAuthorityDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TAuthorityExample example) {
        return tAuthorityDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tAuthorityDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TAuthority record) {
        return tAuthorityDao.insert(record);
    }

    @Override
    public int insertSelective(TAuthority record) {
        return tAuthorityDao.insertSelective(record);
    }

    @Override
    public List<TAuthority> selectByExample(TAuthorityExample example) {
        return tAuthorityDao.selectByExample(example);
    }

    @Override
    public TAuthority selectByPrimaryKey(Integer id) {
        return tAuthorityDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TAuthority record, TAuthorityExample example) {
        return tAuthorityDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TAuthority record, TAuthorityExample example) {
        return tAuthorityDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TAuthority record) {
        return tAuthorityDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TAuthority record) {
        return tAuthorityDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TAuthority> selectByParam(TAuthorityParam params) {
        TAuthorityExample example = new TAuthorityExample();
        if(params!=null) {
            TAuthorityExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
        }
        if (params != null) {
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(),true);
            }else{
                PageHelper.startPage(1,50);
            }
        }
        return tAuthorityDao.selectByExample(example);
    }
}
