package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TPersonInfoParam;
import com.riskman.backserver.pojo.TPersonInfo;
import com.riskman.backserver.service.TPersonInfoService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tPersonInfo")
public class TPersonInfoController {
    @Resource
    private TPersonInfoService tPersonInfoService;

    @PostMapping("/list")
    public @ResponseBody CustomResponse list(@RequestBody(required = false) TPersonInfoParam params){
        List<TPersonInfo> tAuthorities = tPersonInfoService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tPersonInfoService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TPersonInfo record){
        int state = tPersonInfoService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TPersonInfo record){
        int state = tPersonInfoService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tPersonInfoService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
