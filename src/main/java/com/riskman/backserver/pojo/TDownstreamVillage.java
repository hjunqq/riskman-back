package com.riskman.backserver.pojo;

public class TDownstreamVillage {
    private Integer id;

    private String name;

    private Integer personid;

    private String contactinfo;

    private Double population;

    private Integer settlementid;

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

    public Integer getPersonid() {
        return personid;
    }

    public void setPersonid(Integer personid) {
        this.personid = personid;
    }

    public String getContactinfo() {
        return contactinfo;
    }

    public void setContactinfo(String contactinfo) {
        this.contactinfo = contactinfo == null ? null : contactinfo.trim();
    }

    public Double getPopulation() {
        return population;
    }

    public void setPopulation(Double population) {
        this.population = population;
    }

    public Integer getSettlementid() {
        return settlementid;
    }

    public void setSettlementid(Integer settlementid) {
        this.settlementid = settlementid;
    }

    public Integer getReservoirid() {
        return reservoirid;
    }

    public void setReservoirid(Integer reservoirid) {
        this.reservoirid = reservoirid;
    }
}