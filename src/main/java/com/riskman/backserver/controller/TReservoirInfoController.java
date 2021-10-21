package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TReservoirInfoParam;
import com.riskman.backserver.pojo.TReservoirInfo;
import com.riskman.backserver.pojo.TReservoirInfoExample;
import com.riskman.backserver.service.TReservoirInfoService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tReservoirInfo")
public class TReservoirInfoController {
    @Resource
    private TReservoirInfoService tReservoirInfoService;

    @RequestMapping("/list")
    public @ResponseBody CustomResponse list(){
        TReservoirInfoParam params = new TReservoirInfoParam();
        List<TReservoirInfo> tAuthorities = tReservoirInfoService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tReservoirInfoService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TReservoirInfo record){
        int state = tReservoirInfoService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TReservoirInfo record){
        int state = tReservoirInfoService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tReservoirInfoService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
