package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TPersonInfoParam;
import com.riskman.backserver.pojo.TFilePath;
import com.riskman.backserver.pojo.TPersonInfo;
import com.riskman.backserver.service.TFilePathService;
import com.riskman.backserver.service.TPersonInfoService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tfiles")
public class TFilePathController {
    @Resource
    private TFilePathService tFilePathService;

    @GetMapping("/{id}")
    public @ResponseBody
    CustomResponse get(@PathVariable int id){
        TFilePath tAuthorities = tFilePathService.selectByPrimaryKey(id);
        return new CustomResponse().success().add(tAuthorities);
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TFilePath record){
        int state = tFilePathService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TFilePath record){
        int state = tFilePathService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tFilePathService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }
}
