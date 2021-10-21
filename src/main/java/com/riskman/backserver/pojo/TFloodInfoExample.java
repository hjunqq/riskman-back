package com.riskman.backserver.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class TFloodInfoExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TFloodInfoExample() {
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

        public Criteria andVillageidIsNull() {
            addCriterion("VillageId is null");
            return (Criteria) this;
        }

        public Criteria andVillageidIsNotNull() {
            addCriterion("VillageId is not null");
            return (Criteria) this;
        }

        public Criteria andVillageidEqualTo(Integer value) {
            addCriterion("VillageId =", value, "villageid");
            return (Criteria) this;
        }

        public Criteria andVillageidNotEqualTo(Integer value) {
            addCriterion("VillageId <>", value, "villageid");
            return (Criteria) this;
        }

        public Criteria andVillageidGreaterThan(Integer value) {
            addCriterion("VillageId >", value, "villageid");
            return (Criteria) this;
        }

        public Criteria andVillageidGreaterThanOrEqualTo(Integer value) {
            addCriterion("VillageId >=", value, "villageid");
            return (Criteria) this;
        }

        public Criteria andVillageidLessThan(Integer value) {
            addCriterion("VillageId <", value, "villageid");
            return (Criteria) this;
        }

        public Criteria andVillageidLessThanOrEqualTo(Integer value) {
            addCriterion("VillageId <=", value, "villageid");
            return (Criteria) this;
        }

        public Criteria andVillageidIn(List<Integer> values) {
            addCriterion("VillageId in", values, "villageid");
            return (Criteria) this;
        }

        public Criteria andVillageidNotIn(List<Integer> values) {
            addCriterion("VillageId not in", values, "villageid");
            return (Criteria) this;
        }

        public Criteria andVillageidBetween(Integer value1, Integer value2) {
            addCriterion("VillageId between", value1, value2, "villageid");
            return (Criteria) this;
        }

        public Criteria andVillageidNotBetween(Integer value1, Integer value2) {
            addCriterion("VillageId not between", value1, value2, "villageid");
            return (Criteria) this;
        }

        public Criteria andWaterdepthIsNull() {
            addCriterion("WaterDepth is null");
            return (Criteria) this;
        }

        public Criteria andWaterdepthIsNotNull() {
            addCriterion("WaterDepth is not null");
            return (Criteria) this;
        }

        public Criteria andWaterdepthEqualTo(Double value) {
            addCriterion("WaterDepth =", value, "waterdepth");
            return (Criteria) this;
        }

        public Criteria andWaterdepthNotEqualTo(Double value) {
            addCriterion("WaterDepth <>", value, "waterdepth");
            return (Criteria) this;
        }

        public Criteria andWaterdepthGreaterThan(Double value) {
            addCriterion("WaterDepth >", value, "waterdepth");
            return (Criteria) this;
        }

        public Criteria andWaterdepthGreaterThanOrEqualTo(Double value) {
            addCriterion("WaterDepth >=", value, "waterdepth");
            return (Criteria) this;
        }

        public Criteria andWaterdepthLessThan(Double value) {
            addCriterion("WaterDepth <", value, "waterdepth");
            return (Criteria) this;
        }

        public Criteria andWaterdepthLessThanOrEqualTo(Double value) {
            addCriterion("WaterDepth <=", value, "waterdepth");
            return (Criteria) this;
        }

        public Criteria andWaterdepthIn(List<Double> values) {
            addCriterion("WaterDepth in", values, "waterdepth");
            return (Criteria) this;
        }

        public Criteria andWaterdepthNotIn(List<Double> values) {
            addCriterion("WaterDepth not in", values, "waterdepth");
            return (Criteria) this;
        }

        public Criteria andWaterdepthBetween(Double value1, Double value2) {
            addCriterion("WaterDepth between", value1, value2, "waterdepth");
            return (Criteria) this;
        }

        public Criteria andWaterdepthNotBetween(Double value1, Double value2) {
            addCriterion("WaterDepth not between", value1, value2, "waterdepth");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeIsNull() {
            addCriterion("ArrivedTime is null");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeIsNotNull() {
            addCriterion("ArrivedTime is not null");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeEqualTo(Date value) {
            addCriterion("ArrivedTime =", value, "arrivedtime");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeNotEqualTo(Date value) {
            addCriterion("ArrivedTime <>", value, "arrivedtime");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeGreaterThan(Date value) {
            addCriterion("ArrivedTime >", value, "arrivedtime");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeGreaterThanOrEqualTo(Date value) {
            addCriterion("ArrivedTime >=", value, "arrivedtime");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeLessThan(Date value) {
            addCriterion("ArrivedTime <", value, "arrivedtime");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeLessThanOrEqualTo(Date value) {
            addCriterion("ArrivedTime <=", value, "arrivedtime");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeIn(List<Date> values) {
            addCriterion("ArrivedTime in", values, "arrivedtime");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeNotIn(List<Date> values) {
            addCriterion("ArrivedTime not in", values, "arrivedtime");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeBetween(Date value1, Date value2) {
            addCriterion("ArrivedTime between", value1, value2, "arrivedtime");
            return (Criteria) this;
        }

        public Criteria andArrivedtimeNotBetween(Date value1, Date value2) {
            addCriterion("ArrivedTime not between", value1, value2, "arrivedtime");
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