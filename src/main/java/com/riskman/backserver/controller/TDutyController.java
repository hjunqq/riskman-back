package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TDutyParam;
import com.riskman.backserver.pojo.TDuty;
import com.riskman.backserver.service.TDutyService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tDuty")
public class TDutyController {
    @Resource
    private TDutyService tDutyService;

    @GetMapping("")
    public @ResponseBody CustomResponse list(@RequestBody(required = false) TDutyParam params){
        List<TDuty> tAuthorities = tDutyService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TDuty record){
        int state = tDutyService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TDuty record){
        int state = tDutyService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tDutyService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
