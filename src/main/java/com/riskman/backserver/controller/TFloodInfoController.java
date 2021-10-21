package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TFloodInfoParam;
import com.riskman.backserver.pojo.TFloodInfo;
import com.riskman.backserver.service.TFloodInfoService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tFloodInfo")
public class TFloodInfoController {
    @Resource
    private TFloodInfoService tFloodInfoService;

    @PostMapping("/list")
    public @ResponseBody CustomResponse list(@RequestBody(required = false) TFloodInfoParam params){
        List<TFloodInfo> tAuthorities = tFloodInfoService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tFloodInfoService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TFloodInfo record){
        int state = tFloodInfoService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TFloodInfo record){
        int state = tFloodInfoService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tFloodInfoService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
