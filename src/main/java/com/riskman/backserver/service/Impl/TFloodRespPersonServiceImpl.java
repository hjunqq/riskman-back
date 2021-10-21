package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TFloodRespPersonDao;
import com.riskman.backserver.dto.TFloodRespPersonParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TFloodRespPersonExample;
import com.riskman.backserver.pojo.TFloodRespPerson;
import com.riskman.backserver.pojo.TFloodRespPersonExample;
import com.riskman.backserver.service.TFloodRespPersonService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tFloodRespPersonService")
public class TFloodRespPersonServiceImpl implements TFloodRespPersonService {
    @Resource
    private TFloodRespPersonDao tFloodRespPersonDao;
    @Override
    public long countByExample(TFloodRespPersonExample example) {
        return tFloodRespPersonDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TFloodRespPersonExample example) {
        return tFloodRespPersonDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tFloodRespPersonDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TFloodRespPerson record) {
        return tFloodRespPersonDao.insert(record);
    }

    @Override
    public int insertSelective(TFloodRespPerson record) {
        return tFloodRespPersonDao.insertSelective(record);
    }

    @Override
    public List<TFloodRespPerson> selectByExample(TFloodRespPersonExample example) {
        return tFloodRespPersonDao.selectByExample(example);
    }

    @Override
    public TFloodRespPerson selectByPrimaryKey(Integer id) {
        return tFloodRespPersonDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TFloodRespPerson record, TFloodRespPersonExample example) {
        return tFloodRespPersonDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TFloodRespPerson record, TFloodRespPersonExample example) {
        return tFloodRespPersonDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TFloodRespPerson record) {
        return tFloodRespPersonDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TFloodRespPerson record) {
        return tFloodRespPersonDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TFloodRespPerson> selectByParam(TFloodRespPersonParam params) {
        TFloodRespPersonExample example = new TFloodRespPersonExample();
        if (params != null) {
            TFloodRespPersonExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tFloodRespPersonDao.selectByExample(example);
    }
}
