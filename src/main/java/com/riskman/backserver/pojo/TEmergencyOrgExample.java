package com.riskman.backserver.pojo;

import java.util.ArrayList;
import java.util.List;

public class TEmergencyOrgExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TEmergencyOrgExample() {
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

        public Criteria andEmergencyorgimageIsNull() {
            addCriterion("EmergencyOrgImage is null");
            return (Criteria) this;
        }

        public Criteria andEmergencyorgimageIsNotNull() {
            addCriterion("EmergencyOrgImage is not null");
            return (Criteria) this;
        }

        public Criteria andEmergencyorgimageEqualTo(Integer value) {
            addCriterion("EmergencyOrgImage =", value, "emergencyorgimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyorgimageNotEqualTo(Integer value) {
            addCriterion("EmergencyOrgImage <>", value, "emergencyorgimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyorgimageGreaterThan(Integer value) {
            addCriterion("EmergencyOrgImage >", value, "emergencyorgimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyorgimageGreaterThanOrEqualTo(Integer value) {
            addCriterion("EmergencyOrgImage >=", value, "emergencyorgimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyorgimageLessThan(Integer value) {
            addCriterion("EmergencyOrgImage <", value, "emergencyorgimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyorgimageLessThanOrEqualTo(Integer value) {
            addCriterion("EmergencyOrgImage <=", value, "emergencyorgimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyorgimageIn(List<Integer> values) {
            addCriterion("EmergencyOrgImage in", values, "emergencyorgimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyorgimageNotIn(List<Integer> values) {
            addCriterion("EmergencyOrgImage not in", values, "emergencyorgimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyorgimageBetween(Integer value1, Integer value2) {
            addCriterion("EmergencyOrgImage between", value1, value2, "emergencyorgimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyorgimageNotBetween(Integer value1, Integer value2) {
            addCriterion("EmergencyOrgImage not between", value1, value2, "emergencyorgimage");
            return (Criteria) this;
        }

        public Criteria andFloodwaterdepthimageIsNull() {
            addCriterion("FloodWaterDepthImage is null");
            return (Criteria) this;
        }

        public Criteria andFloodwaterdepthimageIsNotNull() {
            addCriterion("FloodWaterDepthImage is not null");
            return (Criteria) this;
        }

        public Criteria andFloodwaterdepthimageEqualTo(Integer value) {
            addCriterion("FloodWaterDepthImage =", value, "floodwaterdepthimage");
            return (Criteria) this;
        }

        public Criteria andFloodwaterdepthimageNotEqualTo(Integer value) {
            addCriterion("FloodWaterDepthImage <>", value, "floodwaterdepthimage");
            return (Criteria) this;
        }

        public Criteria andFloodwaterdepthimageGreaterThan(Integer value) {
            addCriterion("FloodWaterDepthImage >", value, "floodwaterdepthimage");
            return (Criteria) this;
        }

        public Criteria andFloodwaterdepthimageGreaterThanOrEqualTo(Integer value) {
            addCriterion("FloodWaterDepthImage >=", value, "floodwaterdepthimage");
            return (Criteria) this;
        }

        public Criteria andFloodwaterdepthimageLessThan(Integer value) {
            addCriterion("FloodWaterDepthImage <", value, "floodwaterdepthimage");
            return (Criteria) this;
        }

        public Criteria andFloodwaterdepthimageLessThanOrEqualTo(Integer value) {
            addCriterion("FloodWaterDepthImage <=", value, "floodwaterdepthimage");
            return (Criteria) this;
        }

        public Criteria andFloodwaterdepthimageIn(List<Integer> values) {
            addCriterion("FloodWaterDepthImage in", values, "floodwaterdepthimage");
            return (Criteria) this;
        }

        public Criteria andFloodwaterdepthimageNotIn(List<Integer> values) {
            addCriterion("FloodWaterDepthImage not in", values, "floodwaterdepthimage");
            return (Criteria) this;
        }

        public Criteria andFloodwaterdepthimageBetween(Integer value1, Integer value2) {
            addCriterion("FloodWaterDepthImage between", value1, value2, "floodwaterdepthimage");
            return (Criteria) this;
        }

        public Criteria andFloodwaterdepthimageNotBetween(Integer value1, Integer value2) {
            addCriterion("FloodWaterDepthImage not between", value1, value2, "floodwaterdepthimage");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeimageIsNull() {
            addCriterion("ArrivedTimeImage is null");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeimageIsNotNull() {
            addCriterion("ArrivedTimeImage is not null");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeimageEqualTo(Integer value) {
            addCriterion("ArrivedTimeImage =", value, "arrivedtimeimage");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeimageNotEqualTo(Integer value) {
            addCriterion("ArrivedTimeImage <>", value, "arrivedtimeimage");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeimageGreaterThan(Integer value) {
            addCriterion("ArrivedTimeImage >", value, "arrivedtimeimage");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeimageGreaterThanOrEqualTo(Integer value) {
            addCriterion("ArrivedTimeImage >=", value, "arrivedtimeimage");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeimageLessThan(Integer value) {
            addCriterion("ArrivedTimeImage <", value, "arrivedtimeimage");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeimageLessThanOrEqualTo(Integer value) {
            addCriterion("ArrivedTimeImage <=", value, "arrivedtimeimage");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeimageIn(List<Integer> values) {
            addCriterion("ArrivedTimeImage in", values, "arrivedtimeimage");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeimageNotIn(List<Integer> values) {
            addCriterion("ArrivedTimeImage not in", values, "arrivedtimeimage");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeimageBetween(Integer value1, Integer value2) {
            addCriterion("ArrivedTimeImage between", value1, value2, "arrivedtimeimage");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeimageNotBetween(Integer value1, Integer value2) {
            addCriterion("ArrivedTimeImage not between", value1, value2, "arrivedtimeimage");
            return (Criteria) this;
        }

        public Criteria andEvacuationimageIsNull() {
            addCriterion("EvacuationImage is null");
            return (Criteria) this;
        }

        public Criteria andEvacuationimageIsNotNull() {
            addCriterion("EvacuationImage is not null");
            return (Criteria) this;
        }

        public Criteria andEvacuationimageEqualTo(Integer value) {
            addCriterion("EvacuationImage =", value, "evacuationimage");
            return (Criteria) this;
        }

        public Criteria andEvacuationimageNotEqualTo(Integer value) {
            addCriterion("EvacuationImage <>", value, "evacuationimage");
            return (Criteria) this;
        }

        public Criteria andEvacuationimageGreaterThan(Integer value) {
            addCriterion("EvacuationImage >", value, "evacuationimage");
            return (Criteria) this;
        }

        public Criteria andEvacuationimageGreaterThanOrEqualTo(Integer value) {
            addCriterion("EvacuationImage >=", value, "evacuationimage");
            return (Criteria) this;
        }

        public Criteria andEvacuationimageLessThan(Integer value) {
            addCriterion("EvacuationImage <", value, "evacuationimage");
            return (Criteria) this;
        }

        public Criteria andEvacuationimageLessThanOrEqualTo(Integer value) {
            addCriterion("EvacuationImage <=", value, "evacuationimage");
            return (Criteria) this;
        }

        public Criteria andEvacuationimageIn(List<Integer> values) {
            addCriterion("EvacuationImage in", values, "evacuationimage");
            return (Criteria) this;
        }

        public Criteria andEvacuationimageNotIn(List<Integer> values) {
            addCriterion("EvacuationImage not in", values, "evacuationimage");
            return (Criteria) this;
        }

        public Criteria andEvacuationimageBetween(Integer value1, Integer value2) {
            addCriterion("EvacuationImage between", value1, value2, "evacuationimage");
            return (Criteria) this;
        }

        public Criteria andEvacuationimageNotBetween(Integer value1, Integer value2) {
            addCriterion("EvacuationImage not between", value1, value2, "evacuationimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyprocessimageIsNull() {
            addCriterion("EmergencyProcessImage is null");
            return (Criteria) this;
        }

        public Criteria andEmergencyprocessimageIsNotNull() {
            addCriterion("EmergencyProcessImage is not null");
            return (Criteria) this;
        }

        public Criteria andEmergencyprocessimageEqualTo(Integer value) {
            addCriterion("EmergencyProcessImage =", value, "emergencyprocessimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyprocessimageNotEqualTo(Integer value) {
            addCriterion("EmergencyProcessImage <>", value, "emergencyprocessimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyprocessimageGreaterThan(Integer value) {
            addCriterion("EmergencyProcessImage >", value, "emergencyprocessimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyprocessimageGreaterThanOrEqualTo(Integer value) {
            addCriterion("EmergencyProcessImage >=", value, "emergencyprocessimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyprocessimageLessThan(Integer value) {
            addCriterion("EmergencyProcessImage <", value, "emergencyprocessimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyprocessimageLessThanOrEqualTo(Integer value) {
            addCriterion("EmergencyProcessImage <=", value, "emergencyprocessimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyprocessimageIn(List<Integer> values) {
            addCriterion("EmergencyProcessImage in", values, "emergencyprocessimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyprocessimageNotIn(List<Integer> values) {
            addCriterion("EmergencyProcessImage not in", values, "emergencyprocessimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyprocessimageBetween(Integer value1, Integer value2) {
            addCriterion("EmergencyProcessImage between", value1, value2, "emergencyprocessimage");
            return (Criteria) this;
        }

        public Criteria andEmergencyprocessimageNotBetween(Integer value1, Integer value2) {
            addCriterion("EmergencyProcessImage not between", value1, value2, "emergencyprocessimage");
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