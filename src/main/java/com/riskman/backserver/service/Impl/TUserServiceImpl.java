package com.riskman.backserver.service.Impl;

import com.riskman.backserver.dao.TUserDao;
import com.riskman.backserver.pojo.TUser;
import com.riskman.backserver.pojo.TUserExample;
import com.riskman.backserver.service.TUserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tUserService")
public class TUserServiceImpl implements TUserService {

    @Resource
    private TUserDao tUserDao;

    @Override
    public long countByExample(TUserExample example) {
        return tUserDao.countByExample(example);
    }

    @Override
    public int deleteByExample(TUserExample example) {
        return tUserDao.deleteByExample(example);
    }

    @Override
    public int deleteByPrimaryKey(Integer id) {
        return tUserDao.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(TUser record) {
        return tUserDao.insert(record);
    }

    @Override
    public int insertSelective(TUser record) {
        return tUserDao.insertSelective(record);
    }

    @Override
    public List<TUser> selectByExample(TUserExample example) {
        return tUserDao.selectByExample(example);
    }

    @Override
    public TUser selectByPrimaryKey(Integer id) {
        return tUserDao.selectByPrimaryKey(id);
    }

    @Override
    public int updateByExampleSelective(TUser record, TUserExample example) {
        return tUserDao.updateByExampleSelective(record, example);
    }

    @Override
    public int updateByExample(TUser record, TUserExample example) {
        return tUserDao.updateByExample(record, example);
    }

    @Override
    public int updateByPrimaryKeySelective(TUser record) {
        return tUserDao.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(TUser record) {
        return tUserDao.updateByPrimaryKey(record);
    }

    @Override
    public TUser getUserByUserName(String userName) {
        TUserExample tUserExample = new TUserExample();
        tUserExample.createCriteria().andUsernameEqualTo(userName);
        List<TUser> tUsers = tUserDao.selectByExample(tUserExample);
        if(tUsers.size()>0){
            return tUsers.get(0);
        }else{
            return null;
        }
    }
}
