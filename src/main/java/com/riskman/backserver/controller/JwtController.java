package com.riskman.backserver.controller;

import com.riskman.backserver.config.JwtTokenTemplate;
import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.service.Impl.JwtUserDetailsServiceImpl;
import com.riskman.backserver.dto.JwtParam;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.UUID;

@RestController
@RequestMapping(value = "api/auth")
public class JwtController {
    @Resource
    private JwtTokenTemplate jwtTokenTemplate;

    @Resource
    private AuthenticationManager authenticationManager;

    @Resource
    private JwtUserDetailsServiceImpl userDetailsService;

    @PostMapping(value = "login")
    public CustomResponse login(@RequestBody JwtParam body) throws AuthenticationException {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(body.getUsername(), body.getPassword());
        Authentication authentication = authenticationManager.authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetails userDetails = userDetailsService.loadUserByUsername(body.getUsername());
        String token = jwtTokenTemplate.generateToken(userDetails);
        CustomResponse response = new CustomResponse().success();
        response.add(token);
        return response;
    }

    @GetMapping(value = "hello")
    public String hello() {
        return "Hello Jwt!!!";
    }

    @PostMapping("/resetPassword")
    public CustomResponse resetPassword(@RequestBody JwtParam body) {
        String username = body.getUsername();
        String password = body.getPassword();
        userDetailsService.resetPassword(username, "risk" + password);
        return new CustomResponse().success();
    }
}
