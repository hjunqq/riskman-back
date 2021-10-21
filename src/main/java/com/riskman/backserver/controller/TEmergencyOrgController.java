package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TEmergencyOrgParam;
import com.riskman.backserver.pojo.TEmergencyOrg;
import com.riskman.backserver.service.TEmergencyOrgService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tEmergencyOrg")
public class TEmergencyOrgController {
    @Resource
    private TEmergencyOrgService tEmergencyOrgService;

    @PostMapping("/list")
    public @ResponseBody CustomResponse list(@RequestBody(required = false) TEmergencyOrgParam params){
        List<TEmergencyOrg> tAuthorities = tEmergencyOrgService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tEmergencyOrgService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TEmergencyOrg record){
        int state = tEmergencyOrgService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TEmergencyOrg record){
        int state = tEmergencyOrgService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tEmergencyOrgService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
