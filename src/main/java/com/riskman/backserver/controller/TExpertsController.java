package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TExpertsParam;
import com.riskman.backserver.pojo.TExperts;
import com.riskman.backserver.service.TExpertsService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tExperts")
public class TExpertsController {
    @Resource
    private TExpertsService tExpertsService;

    @PostMapping("/list")
    public @ResponseBody CustomResponse list(@RequestBody(required = false) TExpertsParam params){
        List<TExperts> tAuthorities = tExpertsService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tExpertsService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TExperts record){
        int state = tExpertsService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TExperts record){
        int state = tExpertsService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tExpertsService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
