package com.riskman.backserver.service.Impl;

import com.riskman.backserver.pojo.TRole;
import com.riskman.backserver.pojo.TUser;
import com.riskman.backserver.pojo.TUserExample;
import com.riskman.backserver.service.TRoleService;
import com.riskman.backserver.service.TUserService;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;

/**
 * The type Jwt user details service.
 *
 * @author qhjun
 */
@Service
public class JwtUserDetailsServiceImpl implements UserDetailsService {

    @Resource
    private TUserService tUserService;

    @Resource
    private TRoleService tRoleService;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        TUser tUser = tUserService.getUserByUserName(userName);

        User user = null;
        if(tUser!=null){

            List<String> authStrs = tRoleService.getRoleByUser(tUser.getId());

            Collection<SimpleGrantedAuthority> authorities = new HashSet<SimpleGrantedAuthority>();
            for (String au : authStrs) {
                authorities.add(new SimpleGrantedAuthority(au));
            }

            user = new User(tUser.getUsername(),tUser.getPassword(),authorities);
        }

        return user;
    }

}