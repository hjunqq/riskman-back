package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TEvacuationInfoParam;
import com.riskman.backserver.dto.TEvacuationInfoParam;
import com.riskman.backserver.pojo.TEvacuationInfo;
import com.riskman.backserver.pojo.TEvacuationInfo;
import com.riskman.backserver.service.TEvacuationInfoService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tEvacuationInfo")
public class TEvacuationInfoController {
    @Resource
    private TEvacuationInfoService tEvacuationInfoService;

    @PostMapping("/list")
    public @ResponseBody CustomResponse list(@RequestBody(required = false) TEvacuationInfoParam params){
        List<TEvacuationInfo> tAuthorities = tEvacuationInfoService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tEvacuationInfoService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TEvacuationInfo record){
        int state = tEvacuationInfoService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TEvacuationInfo record){
        int state = tEvacuationInfoService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tEvacuationInfoService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }
}
