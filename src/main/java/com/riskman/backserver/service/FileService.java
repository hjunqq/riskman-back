package com.riskman.backserver.service;

import com.riskman.backserver.pojo.TFilePath;
import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    TFilePath save(MultipartFile file);

    Resource load(String filename);
}
