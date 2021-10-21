package com.riskman.backserver.pojo;

public class TAtlas {
    private Integer id;

    private Integer reservoirid;

    private String imagepath;

    private String imagetype;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getReservoirid() {
        return reservoirid;
    }

    public void setReservoirid(Integer reservoirid) {
        this.reservoirid = reservoirid;
    }

    public String getImagepath() {
        return imagepath;
    }

    public void setImagepath(String imagepath) {
        this.imagepath = imagepath == null ? null : imagepath.trim();
    }

    public String getImagetype() {
        return imagetype;
    }

    public void setImagetype(String imagetype) {
        this.imagetype = imagetype == null ? null : imagetype.trim();
    }
}