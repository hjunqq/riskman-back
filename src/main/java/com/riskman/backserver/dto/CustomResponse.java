package com.riskman.backserver.dto;

import com.riskman.backserver.pojo.TFilePath;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
@Builder
@AllArgsConstructor
public class CustomResponse {
    private int code;
    private String message;
    private Object data;
    private Map<String, Object> dataSet;

    public CustomResponse() {
        dataSet = new HashMap<>();
    }

    public CustomResponse(int code, String message) {
        this.code = code;
        this.message = message;
    }

    public CustomResponse add(Object value){
        this.data = value;
        return this;
    }

    public CustomResponse add(String key,Object value){
        this.dataSet.put(key,value);
        return this;
    }

    public CustomResponse success(){
        return new CustomResponse(200,"Success");
    }

    public CustomResponse success(String message){
        return new CustomResponse(200, message);
    }

    public CustomResponse error(){
        return new CustomResponse(400,"error");
    }

    public CustomResponse error(String message){
        return new CustomResponse(400,message);
    }

}
