package com.riskman.backserver.controller;

import com.riskman.backserver.dto.CustomResponse;
import com.riskman.backserver.pojo.TFilePath;
import com.riskman.backserver.service.FileService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api/files")
public class FileUploadController {

    @Resource
    private FileService fileService;

    @RequestMapping("/upload")
    public CustomResponse upload(@RequestParam("files[]") MultipartFile file){
        String message = "";
        try {
            TFilePath fileName = fileService.save(file);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            return new CustomResponse().success().add(fileName);
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return new CustomResponse().error(message);
        }
    }



    @GetMapping("/{filename:.+}")
    @ResponseBody
    public ResponseEntity<org.springframework.core.io.Resource> getFile(@PathVariable String filename, HttpServletRequest request) {
        org.springframework.core.io.Resource file = fileService.load(filename);

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(file.getFile().getAbsolutePath());
        } catch (Exception ex) {
//            logger.info("Could not determine file type.");
        }

        // Fallback to the default content type if type could not be determined
        if(contentType == null) {
            contentType = "application/octet-stream";
        }


        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
    }
}
