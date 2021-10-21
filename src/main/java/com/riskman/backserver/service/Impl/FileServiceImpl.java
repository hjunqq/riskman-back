package com.riskman.backserver.service.Impl;

import com.riskman.backserver.pojo.TFilePath;
import com.riskman.backserver.service.FileService;
import com.riskman.backserver.service.TFilePathService;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.apache.commons.io.FilenameUtils;

import javax.annotation.Resource;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;
import java.util.UUID;

import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

@Service("fileService")
public class FileServiceImpl implements FileService {

    @Resource
    private TFilePathService tFilePathService;

    private final Path root = Paths.get("uploads");

    public void init() {
        try {
            if(!Files.exists(root)) {
                Files.createDirectory(root);
            }
        } catch (IOException e) {
            throw new RuntimeException("Could not initialize folder for upload!");
        }
    }

    @Override
    public TFilePath save(MultipartFile file) {

        init();

        UUID uuid = UUID.randomUUID();

        String ext = FilenameUtils.getExtension(file.getOriginalFilename());
        var  fileName = uuid.toString() +"."+ ext;
        try {
            Files.copy(file.getInputStream(), root.resolve(Objects.requireNonNull(fileName)), REPLACE_EXISTING);
        } catch (Exception e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
        }

        TFilePath tFilePath = new TFilePath();
        tFilePath.setFilename(file.getOriginalFilename());
        tFilePath.setStorename(fileName);
        String filePath = "files/"+fileName;
        tFilePath.setPath(filePath);
        tFilePathService.insert(tFilePath);

        return tFilePath;
    }

    @Override
    public org.springframework.core.io.Resource load(String filename) {
        try {
            Path file = root.resolve(filename);
            org.springframework.core.io.Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }
}
