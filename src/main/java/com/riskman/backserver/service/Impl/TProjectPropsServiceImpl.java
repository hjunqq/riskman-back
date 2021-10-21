package com.riskman.backserver.service.Impl;

import com.github.pagehelper.PageHelper;
import com.riskman.backserver.dao.TProjectPropsDao;
import com.riskman.backserver.dto.TProjectPropsParam;
import com.riskman.backserver.plugins.Conversion;
import com.riskman.backserver.pojo.TProjectPropsExample;
import com.riskman.backserver.pojo.TProjectProps;
import com.riskman.backserver.pojo.TProjectPropsExample;
import com.riskman.backserver.service.TProjectPropsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tProjectPropsService")
public class TProjectPropsServiceImpl implements TProjectPropsService {
    @Resource
    private TProjectPropsDao tProjectPropsDao;
    @Override
    public long countByExample(TProjectPropsExample example) {
        return tProjectPropsDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TProjectPropsExample example) {
        return tProjectPropsDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tProjectPropsDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TProjectProps record) {
        return tProjectPropsDao.insert(record);
    }

    @Override
    public int insertSelective(TProjectProps record) {
        return tProjectPropsDao.insertSelective(record);
    }

    @Override
    public List<TProjectProps> selectByExample(TProjectPropsExample example) {
        return tProjectPropsDao.selectByExample(example);
    }

    @Override
    public TProjectProps selectByPrimaryKey(Integer id) {
        return tProjectPropsDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TProjectProps record, TProjectPropsExample example) {
        return tProjectPropsDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TProjectProps record, TProjectPropsExample example) {
        return tProjectPropsDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TProjectProps record) {
        return tProjectPropsDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TProjectProps record) {
        return tProjectPropsDao.updateByPrimaryKey(record);
    }

    @Override
    public List<TProjectProps> selectByParam(TProjectPropsParam params) {
        TProjectPropsExample example = new TProjectPropsExample();
        if (params != null) {
            TProjectPropsExample.Criteria criteria = Conversion.CriteraByParms(params, example.createCriteria());
            example.clear();
            example.or(criteria);
            if (params.getCurPage() != null & params.getPageSize() != null) {
                PageHelper.startPage(params.getCurPage(), params.getPageSize(), true);
            } else {
                PageHelper.startPage(1, 50);
            }
        }
        return tProjectPropsDao.selectByExample(example);
    }
}
