package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TSuppliesStorageDao;
import com.riskman.backserver.dto.TSuppliesStorageParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TSuppliesStorageExample;
import com.riskman.backserver.pojo.TSuppliesStorage;
import com.riskman.backserver.pojo.TSuppliesStorageExample;
import com.riskman.backserver.service.TSuppliesStorageService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tSuppliesStorageService")
public class TSuppliesStorageServiceImpl implements TSuppliesStorageService {
    @Resource
    private TSuppliesStorageDao tSuppliesStorageDao;
    @Override
    public long countByExample(TSuppliesStorageExample example) {
        return tSuppliesStorageDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TSuppliesStorageExample example) {
        return tSuppliesStorageDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tSuppliesStorageDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TSuppliesStorage record) {
        return tSuppliesStorageDao.insert(record);
    }

    @Override
    public int insertSelective(TSuppliesStorage record) {
        return tSuppliesStorageDao.insertSelective(record);
    }

    @Override
    public List<TSuppliesStorage> selectByExample(TSuppliesStorageExample example) {
        return tSuppliesStorageDao.selectByExample(example);
    }

    @Override
    public TSuppliesStorage selectByPrimaryKey(Integer id) {
        return tSuppliesStorageDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TSuppliesStorage record, TSuppliesStorageExample example) {
        return tSuppliesStorageDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TSuppliesStorage record, TSuppliesStorageExample example) {
        return tSuppliesStorageDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TSuppliesStorage record) {
        return tSuppliesStorageDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TSuppliesStorage record) {
        return tSuppliesStorageDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TSuppliesStorage> selectByParam(TSuppliesStorageParam params) {
        TSuppliesStorageExample example = new TSuppliesStorageExample();
        if (params != null) {
            TSuppliesStorageExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tSuppliesStorageDao.selectByExample(example);
    }
}
