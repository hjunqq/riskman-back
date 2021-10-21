package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.THeadquartersParam;
import com.riskman.backserver.pojo.THeadquarters;
import com.riskman.backserver.service.THeadquartersService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tHeadquarters")
public class THeadquartersController {
    @Resource
    private THeadquartersService tHeadquartersService;

    @PostMapping("/list")
    public @ResponseBody CustomResponse list(@RequestBody(required = false) THeadquartersParam params){
        List<THeadquarters> tAuthorities = tHeadquartersService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tHeadquartersService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody THeadquarters record){
        int state = tHeadquartersService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody THeadquarters record){
        int state = tHeadquartersService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tHeadquartersService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
