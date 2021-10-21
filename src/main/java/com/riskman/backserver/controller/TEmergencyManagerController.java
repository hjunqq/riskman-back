package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TEmergencyManagerParam;
import com.riskman.backserver.pojo.TEmergencyManager;
import com.riskman.backserver.service.TEmergencyManagerService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tEmergencyManager")
public class TEmergencyManagerController {
    @Resource
    private TEmergencyManagerService tEmergencyManagerService;

    @PostMapping("/list")
    public @ResponseBody CustomResponse list(@RequestBody(required = false) TEmergencyManagerParam params){
        List<TEmergencyManager> tAuthorities = tEmergencyManagerService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tEmergencyManagerService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TEmergencyManager record){
        int state = tEmergencyManagerService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TEmergencyManager record){
        int state = tEmergencyManagerService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tEmergencyManagerService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
