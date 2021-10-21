package com.riskman.backserver.pojo;

public class TSettlement {
    private Integer id;

    private Double longitude;

    private Double lantitude;

    private Integer indexnumber;

    private Integer capacity;

    private Integer reservoirid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLantitude() {
        return lantitude;
    }

    public void setLantitude(Double lantitude) {
        this.lantitude = lantitude;
    }

    public Integer getIndexnumber() {
        return indexnumber;
    }

    public void setIndexnumber(Integer indexnumber) {
        this.indexnumber = indexnumber;
    }

    public Integer getCapacity() {
        return capacity;
    }

    public void setCapacity(Integer capacity) {
        this.capacity = capacity;
    }

    public Integer getReservoirid() {
        return reservoirid;
    }

    public void setReservoirid(Integer reservoirid) {
        this.reservoirid = reservoirid;
    }
}