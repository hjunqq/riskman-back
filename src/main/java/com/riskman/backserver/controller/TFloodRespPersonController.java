package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TFloodRespPersonParam;
import com.riskman.backserver.pojo.TFloodRespPerson;
import com.riskman.backserver.service.TFloodRespPersonService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tFloodRespPerson")
public class TFloodRespPersonController {
    @Resource
    private TFloodRespPersonService tFloodRespPersonService;

    @PostMapping("/list")
    public @ResponseBody CustomResponse list(@RequestBody(required = false) TFloodRespPersonParam params){
        List<TFloodRespPerson> tAuthorities = tFloodRespPersonService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tFloodRespPersonService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TFloodRespPerson record){
        int state = tFloodRespPersonService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TFloodRespPerson record){
        int state = tFloodRespPersonService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tFloodRespPersonService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
