package com.riskman.backserver.pojo;

public class TSuppliesStorage {
    private Integer id;

    private String name;

    private Double quantity;

    private String storagepoint;

    private Integer personid;

    private Integer reservoirid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Double getQuantity() {
        return quantity;
    }

    public void setQuantity(Double quantity) {
        this.quantity = quantity;
    }

    public String getStoragepoint() {
        return storagepoint;
    }

    public void setStoragepoint(String storagepoint) {
        this.storagepoint = storagepoint == null ? null : storagepoint.trim();
    }

    public Integer getPersonid() {
        return personid;
    }

    public void setPersonid(Integer personid) {
        this.personid = personid;
    }

    public Integer getReservoirid() {
        return reservoirid;
    }

    public void setReservoirid(Integer reservoirid) {
        this.reservoirid = reservoirid;
    }
}