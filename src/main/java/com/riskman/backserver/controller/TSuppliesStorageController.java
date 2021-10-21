package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TSuppliesStorageParam;
import com.riskman.backserver.dto.TSuppliesStorageParam;
import com.riskman.backserver.pojo.TSuppliesStorage;
import com.riskman.backserver.pojo.TSuppliesStorage;
import com.riskman.backserver.service.TSuppliesStorageService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tSuppliesStorage")
public class TSuppliesStorageController {
    @Resource
    private TSuppliesStorageService tSuppliesStorageService;

    @PostMapping("/list")
    public @ResponseBody CustomResponse list(){
        TSuppliesStorageParam params = new TSuppliesStorageParam();
        List<TSuppliesStorage> tAuthorities = tSuppliesStorageService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @GetMapping("/{id}")
    public @ResponseBody CustomResponse listById(@PathVariable int id){
        return new CustomResponse().success().add(tSuppliesStorageService.selectByPrimaryKey(id));
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TSuppliesStorage record){
        int state = tSuppliesStorageService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TSuppliesStorage record){
        int state = tSuppliesStorageService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tSuppliesStorageService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
