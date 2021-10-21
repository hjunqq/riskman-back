package com.riskman.backserver.service.Impl;

import com.riskman.backserver.dao.TAuthorityDao;
import com.riskman.backserver.dao.TRoleDao;
import com.riskman.backserver.pojo.TAuthority;
import com.riskman.backserver.pojo.TAuthorityExample;
import com.riskman.backserver.pojo.TRole;
import com.riskman.backserver.pojo.TRoleExample;
import com.riskman.backserver.service.TRoleService;
import io.swagger.models.auth.In;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service("tRoleService")
public class TRoleServiceImpl implements TRoleService {

    @Resource
    private TRoleDao tRoleDao;

    @Resource
    private TAuthorityDao tAuthorityDao;

    @Override
    public long countByExample(TRoleExample example) {
        return tRoleDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TRoleExample example) {
        return tRoleDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tRoleDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TRole record) {
        return tRoleDao.insert(record);
    }

    @Override
    public int insertSelective(TRole record) {
        return tRoleDao.insertSelective(record);
    }

    @Override
    public List<TRole> selectByExample(TRoleExample example) {
        return tRoleDao.selectByExample(example);
    }

    @Override
    public TRole selectByPrimaryKey(Integer id) {
        return tRoleDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TRole record, TRoleExample example) {
        return tRoleDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TRole record, TRoleExample example) {
        return tRoleDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TRole record) {
        return tRoleDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TRole record) {
        return tRoleDao.updateByPrimaryKey(record);
    }

    @Override
    public List<String> getRoleByUser(Integer id) {
        TRoleExample tRoleExample = new TRoleExample();
        tRoleExample.createCriteria().andPersonidEqualTo(id);
        List<TRole> tRoles = tRoleDao.selectByExample(tRoleExample);

        List<Integer> ids = new ArrayList<>();

        if (tRoles.size()>0){
            for (TRole tRole:
                 tRoles) {
                ids.add(tRole.getAuthorityid());
            }
        }

        if(ids.size()==0){
            return new ArrayList<>();
        }

        TAuthorityExample tAuthorityExample = new TAuthorityExample();
        tAuthorityExample.createCriteria().andIdIn(ids);
        List<TAuthority> tAuthorities = tAuthorityDao.selectByExample(tAuthorityExample);

        List<String> aus = new ArrayList<>();

        for (TAuthority tAuthority:
             tAuthorities) {
            aus.add(tAuthority.getName());
        }
        return aus;
    }
}
