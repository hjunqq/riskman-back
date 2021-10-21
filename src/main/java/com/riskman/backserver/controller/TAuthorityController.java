package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TAuthorityParam;
import com.riskman.backserver.pojo.TAuthority;
import com.riskman.backserver.pojo.TAuthorityExample;
import com.riskman.backserver.service.TAuthorityService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tAuthority")
public class TAuthorityController {
    @Resource
    private TAuthorityService tAuthorityService;

    @GetMapping("")
    public @ResponseBody CustomResponse list(@RequestBody(required = false) TAuthorityParam params){
        List<TAuthority> tAuthorities = tAuthorityService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TAuthority record){
        int state = tAuthorityService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TAuthority record){
        int state = tAuthorityService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tAuthorityService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
