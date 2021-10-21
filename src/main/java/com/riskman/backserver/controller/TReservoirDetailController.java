package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TReservoirDetailParam;
import com.riskman.backserver.pojo.TReservoirDetail;
import com.riskman.backserver.pojo.TReservoirDetailWithBLOBs;
import com.riskman.backserver.service.TReservoirDetailService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.websocket.server.PathParam;
import java.util.List;

@RestController
@RequestMapping("/api/tReservoirDetail")
public class TReservoirDetailController {
    @Resource
    private TReservoirDetailService tReservoirDetailService;

    @PostMapping("/list")
    public @ResponseBody
    CustomResponse list(@RequestBody(required = false) TReservoirDetailParam params){
        List<TReservoirDetail> tAuthorities = tReservoirDetailService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tReservoirDetailService.selectByPrimaryKey(id));
    }

    @GetMapping("/reservoir={id}")
    public @ResponseBody CustomResponse listByReservoirId(@PathVariable int id){
        return new CustomResponse().success().add(tReservoirDetailService.selectByReservoir(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TReservoirDetailWithBLOBs record){
        int state = tReservoirDetailService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TReservoirDetailWithBLOBs record){
        int state = tReservoirDetailService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tReservoirDetailService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }
}
