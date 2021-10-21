package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TDownstreamVillageParam;
import com.riskman.backserver.pojo.TDownstreamVillage;
import com.riskman.backserver.service.TDownstreamVillageService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tDownstreamVillage")
public class TDownstreamVillageController {
    @Resource
    private TDownstreamVillageService tDownstreamVillageService;

    @RequestMapping("/list")
    public @ResponseBody CustomResponse list(@RequestBody(required = false) TDownstreamVillageParam params){
        List<TDownstreamVillage> tAuthorities = tDownstreamVillageService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tDownstreamVillageService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TDownstreamVillage record){
        int state = tDownstreamVillageService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TDownstreamVillage record){
        int state = tDownstreamVillageService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tDownstreamVillageService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
