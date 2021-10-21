package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TUnitParam;
import com.riskman.backserver.pojo.TUnit;
import com.riskman.backserver.service.TUnitService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tUnit")
public class TUnitController {
    @Resource
    private TUnitService tUnitService;

    @RequestMapping("/list")
    public @ResponseBody CustomResponse list(){
        TUnitParam params = new TUnitParam();
        List<TUnit> tAuthorities = tUnitService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tUnitService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TUnit record){
        int state = tUnitService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TUnit record){
        int state = tUnitService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tUnitService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
