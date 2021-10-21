package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TSettlementParam;
import com.riskman.backserver.dto.TSettlementParam;
import com.riskman.backserver.pojo.TSettlement;
import com.riskman.backserver.pojo.TSettlement;
import com.riskman.backserver.service.TSettlementService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tSettlement")
public class TSettlementController {
    @Resource
    private TSettlementService tSettlementService;

    @RequestMapping("/list")
    public @ResponseBody CustomResponse list(){
        TSettlementParam params = new TSettlementParam();
        List<TSettlement> tAuthorities = tSettlementService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tSettlementService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TSettlement record){
        int state = tSettlementService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TSettlement record){
        int state = tSettlementService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tSettlementService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
