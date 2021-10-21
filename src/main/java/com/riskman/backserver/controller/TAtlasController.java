package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.dto.TAtlasParam;
import com.riskman.backserver.dto.TAuthorityParam;
import com.riskman.backserver.pojo.TAtlas;
import com.riskman.backserver.pojo.TAuthority;
import com.riskman.backserver.service.TAtlasService;
import com.riskman.backserver.service.TAuthorityService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/tAtlas")
public class TAtlasController {
    @Resource
    private TAtlasService tAtlasService;

    @GetMapping("")
    public @ResponseBody CustomResponse list(@RequestBody(required = false) TAtlasParam params){
        List<TAtlas> tAuthorities = tAtlasService.selectByParam(params);
        return new CustomResponse().success().add(tAuthorities);
    }

    @PostMapping("")
    public @ResponseBody CustomResponse create(@RequestBody TAtlas record){
        int state = tAtlasService.insert(record);
        return new CustomResponse().success().add(record);
    }

    @PutMapping("")
    public @ResponseBody CustomResponse update(@RequestBody TAtlas record){
        int state = tAtlasService.updateByPrimaryKeySelective(record);
        return new CustomResponse().success().add(record);
    }

    @DeleteMapping("/{id}")
    public @ResponseBody CustomResponse delete(@PathVariable int id){
        int state = tAtlasService.deleteByPrimaryKey(id);
        return new CustomResponse().success().add(id);
    }

}
