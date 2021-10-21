package com.riskman.backserver.pojo;

public class TReservoirInfo {
    private Integer id;

    private String name;

    private Double longitude;

    private Double latitude;

    private Double checkfloodlevel;

    private Double designfloodlevel;

    private Double normalstoragelevel;

    private Double floodlimitlevel;

    private Double deadwaterlevel;

    private Integer managementunit;

    private Integer administrator;

    private Integer technicalperson;

    private Integer inspectionperson;

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

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getCheckfloodlevel() {
        return checkfloodlevel;
    }

    public void setCheckfloodlevel(Double checkfloodlevel) {
        this.checkfloodlevel = checkfloodlevel;
    }

    public Double getDesignfloodlevel() {
        return designfloodlevel;
    }

    public void setDesignfloodlevel(Double designfloodlevel) {
        this.designfloodlevel = designfloodlevel;
    }

    public Double getNormalstoragelevel() {
        return normalstoragelevel;
    }

    public void setNormalstoragelevel(Double normalstoragelevel) {
        this.normalstoragelevel = normalstoragelevel;
    }

    public Double getFloodlimitlevel() {
        return floodlimitlevel;
    }

    public void setFloodlimitlevel(Double floodlimitlevel) {
        this.floodlimitlevel = floodlimitlevel;
    }

    public Double getDeadwaterlevel() {
        return deadwaterlevel;
    }

    public void setDeadwaterlevel(Double deadwaterlevel) {
        this.deadwaterlevel = deadwaterlevel;
    }

    public Integer getManagementunit() {
        return managementunit;
    }

    public void setManagementunit(Integer managementunit) {
        this.managementunit = managementunit;
    }

    public Integer getAdministrator() {
        return administrator;
    }

    public void setAdministrator(Integer administrator) {
        this.administrator = administrator;
    }

    public Integer getTechnicalperson() {
        return technicalperson;
    }

    public void setTechnicalperson(Integer technicalperson) {
        this.technicalperson = technicalperson;
    }

    public Integer getInspectionperson() {
        return inspectionperson;
    }

    public void setInspectionperson(Integer inspectionperson) {
        this.inspectionperson = inspectionperson;
    }
}