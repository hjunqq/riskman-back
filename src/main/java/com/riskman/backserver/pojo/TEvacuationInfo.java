package com.riskman.backserver.pojo;

public class TEvacuationInfo {
    private Integer id;

    private String routepoint;

    private String transport;

    private Float time;

    private Integer settlementid;

    private Integer reservoirid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getRoutepoint() {
        return routepoint;
    }

    public void setRoutepoint(String routepoint) {
        this.routepoint = routepoint == null ? null : routepoint.trim();
    }

    public String getTransport() {
        return transport;
    }

    public void setTransport(String transport) {
        this.transport = transport == null ? null : transport.trim();
    }

    public Float getTime() {
        return time;
    }

    public void setTime(Float time) {
        this.time = time;
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