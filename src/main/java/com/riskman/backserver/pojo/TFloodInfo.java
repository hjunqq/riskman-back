package com.riskman.backserver.pojo;

import java.util.Date;

public class TFloodInfo {
    private Integer id;

    private Integer villageid;

    private Double waterdepth;

    private Date arrivedtime;

    private Integer reservoirid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getVillageid() {
        return villageid;
    }

    public void setVillageid(Integer villageid) {
        this.villageid = villageid;
    }

    public Double getWaterdepth() {
        return waterdepth;
    }

    public void setWaterdepth(Double waterdepth) {
        this.waterdepth = waterdepth;
    }

    public Date getArrivedtime() {
        return arrivedtime;
    }

    public void setArrivedtime(Date arrivedtime) {
        this.arrivedtime = arrivedtime;
    }

    public Integer getReservoirid() {
        return reservoirid;
    }

    public void setReservoirid(Integer reservoirid) {
        this.reservoirid = reservoirid;
    }
}