package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TProjectPropsParam;
import com.riskman.backserver.pojo.TProjectProps;
import com.riskman.backserver.service.TProjectPropsService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tProjectProps")
public class TProjectPropsController {
    @Resource
    private TProjectPropsService tProjectPropsService;

    @PostMapping("/list")
    public @ResponseBody
    CustomResponse list(@RequestBody(required = false) TProjectPropsParam params){
        List<TProjectProps> tAuthorities = tProjectPropsService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tProjectPropsService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TProjectProps record){
        int state = tProjectPropsService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TProjectProps record){
        int state = tProjectPropsService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tProjectPropsService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
