package com.riskman.backserver.pojo;

import java.util.ArrayList;
import java.util.List;

public class TEvacuationInfoExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TEvacuationInfoExample() {
        oredCriteria = new ArrayList<>();
    }

    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    public String getOrderByClause() {
        return orderByClause;
    }

    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    public boolean isDistinct() {
        return distinct;
    }

    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("Id is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("Id is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("Id =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("Id <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("Id >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("Id >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("Id <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("Id <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("Id in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("Id not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("Id between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("Id not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andRoutepointIsNull() {
            addCriterion("RoutePoint is null");
            return (Criteria) this;
        }

        public Criteria andRoutepointIsNotNull() {
            addCriterion("RoutePoint is not null");
            return (Criteria) this;
        }

        public Criteria andRoutepointEqualTo(String value) {
            addCriterion("RoutePoint =", value, "routepoint");
            return (Criteria) this;
        }

        public Criteria andRoutepointNotEqualTo(String value) {
            addCriterion("RoutePoint <>", value, "routepoint");
            return (Criteria) this;
        }

        public Criteria andRoutepointGreaterThan(String value) {
            addCriterion("RoutePoint >", value, "routepoint");
            return (Criteria) this;
        }

        public Criteria andRoutepointGreaterThanOrEqualTo(String value) {
            addCriterion("RoutePoint >=", value, "routepoint");
            return (Criteria) this;
        }

        public Criteria andRoutepointLessThan(String value) {
            addCriterion("RoutePoint <", value, "routepoint");
            return (Criteria) this;
        }

        public Criteria andRoutepointLessThanOrEqualTo(String value) {
            addCriterion("RoutePoint <=", value, "routepoint");
            return (Criteria) this;
        }

        public Criteria andRoutepointLike(String value) {
            addCriterion("RoutePoint like", value, "routepoint");
            return (Criteria) this;
        }

        public Criteria andRoutepointNotLike(String value) {
            addCriterion("RoutePoint not like", value, "routepoint");
            return (Criteria) this;
        }

        public Criteria andRoutepointIn(List<String> values) {
            addCriterion("RoutePoint in", values, "routepoint");
            return (Criteria) this;
        }

        public Criteria andRoutepointNotIn(List<String> values) {
            addCriterion("RoutePoint not in", values, "routepoint");
            return (Criteria) this;
        }

        public Criteria andRoutepointBetween(String value1, String value2) {
            addCriterion("RoutePoint between", value1, value2, "routepoint");
            return (Criteria) this;
        }

        public Criteria andRoutepointNotBetween(String value1, String value2) {
            addCriterion("RoutePoint not between", value1, value2, "routepoint");
            return (Criteria) this;
        }

        public Criteria andTransportIsNull() {
            addCriterion("Transport is null");
            return (Criteria) this;
        }

        public Criteria andTransportIsNotNull() {
            addCriterion("Transport is not null");
            return (Criteria) this;
        }

        public Criteria andTransportEqualTo(String value) {
            addCriterion("Transport =", value, "transport");
            return (Criteria) this;
        }

        public Criteria andTransportNotEqualTo(String value) {
            addCriterion("Transport <>", value, "transport");
            return (Criteria) this;
        }

        public Criteria andTransportGreaterThan(String value) {
            addCriterion("Transport >", value, "transport");
            return (Criteria) this;
        }

        public Criteria andTransportGreaterThanOrEqualTo(String value) {
            addCriterion("Transport >=", value, "transport");
            return (Criteria) this;
        }

        public Criteria andTransportLessThan(String value) {
            addCriterion("Transport <", value, "transport");
            return (Criteria) this;
        }

        public Criteria andTransportLessThanOrEqualTo(String value) {
            addCriterion("Transport <=", value, "transport");
            return (Criteria) this;
        }

        public Criteria andTransportLike(String value) {
            addCriterion("Transport like", value, "transport");
            return (Criteria) this;
        }

        public Criteria andTransportNotLike(String value) {
            addCriterion("Transport not like", value, "transport");
            return (Criteria) this;
        }

        public Criteria andTransportIn(List<String> values) {
            addCriterion("Transport in", values, "transport");
            return (Criteria) this;
        }

        public Criteria andTransportNotIn(List<String> values) {
            addCriterion("Transport not in", values, "transport");
            return (Criteria) this;
        }

        public Criteria andTransportBetween(String value1, String value2) {
            addCriterion("Transport between", value1, value2, "transport");
            return (Criteria) this;
        }

        public Criteria andTransportNotBetween(String value1, String value2) {
            addCriterion("Transport not between", value1, value2, "transport");
            return (Criteria) this;
        }

        public Criteria andTimeIsNull() {
            addCriterion("Time is null");
            return (Criteria) this;
        }

        public Criteria andTimeIsNotNull() {
            addCriterion("Time is not null");
            return (Criteria) this;
        }

        public Criteria andTimeEqualTo(Float value) {
            addCriterion("Time =", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotEqualTo(Float value) {
            addCriterion("Time <>", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeGreaterThan(Float value) {
            addCriterion("Time >", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeGreaterThanOrEqualTo(Float value) {
            addCriterion("Time >=", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeLessThan(Float value) {
            addCriterion("Time <", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeLessThanOrEqualTo(Float value) {
            addCriterion("Time <=", value, "time");
            return (Criteria) this;
        }

        public Criteria andTimeIn(List<Float> values) {
            addCriterion("Time in", values, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotIn(List<Float> values) {
            addCriterion("Time not in", values, "time");
            return (Criteria) this;
        }

        public Criteria andTimeBetween(Float value1, Float value2) {
            addCriterion("Time between", value1, value2, "time");
            return (Criteria) this;
        }

        public Criteria andTimeNotBetween(Float value1, Float value2) {
            addCriterion("Time not between", value1, value2, "time");
            return (Criteria) this;
        }

        public Criteria andSettlementidIsNull() {
            addCriterion("SettlementId is null");
            return (Criteria) this;
        }

        public Criteria andSettlementidIsNotNull() {
            addCriterion("SettlementId is not null");
            return (Criteria) this;
        }

        public Criteria andSettlementidEqualTo(Integer value) {
            addCriterion("SettlementId =", value, "settlementid");
            return (Criteria) this;
        }

        public Criteria andSettlementidNotEqualTo(Integer value) {
            addCriterion("SettlementId <>", value, "settlementid");
            return (Criteria) this;
        }

        public Criteria andSettlementidGreaterThan(Integer value) {
            addCriterion("SettlementId >", value, "settlementid");
            return (Criteria) this;
        }

        public Criteria andSettlementidGreaterThanOrEqualTo(Integer value) {
            addCriterion("SettlementId >=", value, "settlementid");
            return (Criteria) this;
        }

        public Criteria andSettlementidLessThan(Integer value) {
            addCriterion("SettlementId <", value, "settlementid");
            return (Criteria) this;
        }

        public Criteria andSettlementidLessThanOrEqualTo(Integer value) {
            addCriterion("SettlementId <=", value, "settlementid");
            return (Criteria) this;
        }

        public Criteria andSettlementidIn(List<Integer> values) {
            addCriterion("SettlementId in", values, "settlementid");
            return (Criteria) this;
        }

        public Criteria andSettlementidNotIn(List<Integer> values) {
            addCriterion("SettlementId not in", values, "settlementid");
            return (Criteria) this;
        }

        public Criteria andSettlementidBetween(Integer value1, Integer value2) {
            addCriterion("SettlementId between", value1, value2, "settlementid");
            return (Criteria) this;
        }

        public Criteria andSettlementidNotBetween(Integer value1, Integer value2) {
            addCriterion("SettlementId not between", value1, value2, "settlementid");
            return (Criteria) this;
        }

        public Criteria andReservoiridIsNull() {
            addCriterion("ReservoirId is null");
            return (Criteria) this;
        }

        public Criteria andReservoiridIsNotNull() {
            addCriterion("ReservoirId is not null");
            return (Criteria) this;
        }

        public Criteria andReservoiridEqualTo(Integer value) {
            addCriterion("ReservoirId =", value, "reservoirid");
            return (Criteria) this;
        }

        public Criteria andReservoiridNotEqualTo(Integer value) {
            addCriterion("ReservoirId <>", value, "reservoirid");
            return (Criteria) this;
        }

        public Criteria andReservoiridGreaterThan(Integer value) {
            addCriterion("ReservoirId >", value, "reservoirid");
            return (Criteria) this;
        }

        public Criteria andReservoiridGreaterThanOrEqualTo(Integer value) {
            addCriterion("ReservoirId >=", value, "reservoirid");
            return (Criteria) this;
        }

        public Criteria andReservoiridLessThan(Integer value) {
            addCriterion("ReservoirId <", value, "reservoirid");
            return (Criteria) this;
        }

        public Criteria andReservoiridLessThanOrEqualTo(Integer value) {
            addCriterion("ReservoirId <=", value, "reservoirid");
            return (Criteria) this;
        }

        public Criteria andReservoiridIn(List<Integer> values) {
            addCriterion("ReservoirId in", values, "reservoirid");
            return (Criteria) this;
        }

        public Criteria andReservoiridNotIn(List<Integer> values) {
            addCriterion("ReservoirId not in", values, "reservoirid");
            return (Criteria) this;
        }

        public Criteria andReservoiridBetween(Integer value1, Integer value2) {
            addCriterion("ReservoirId between", value1, value2, "reservoirid");
            return (Criteria) this;
        }

        public Criteria andReservoiridNotBetween(Integer value1, Integer value2) {
            addCriterion("ReservoirId not between", value1, value2, "reservoirid");
            return (Criteria) this;
        }
    }

    public static class Criteria extends GeneratedCriteria {
        protected Criteria() {
            super();
        }
    }

    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}