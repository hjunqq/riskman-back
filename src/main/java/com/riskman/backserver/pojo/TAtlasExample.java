package com.riskman.backserver.pojo;

import java.util.ArrayList;
import java.util.List;

public class TAtlasExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TAtlasExample() {
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

        public Criteria andImagepathIsNull() {
            addCriterion("ImagePath is null");
            return (Criteria) this;
        }

        public Criteria andImagepathIsNotNull() {
            addCriterion("ImagePath is not null");
            return (Criteria) this;
        }

        public Criteria andImagepathEqualTo(String value) {
            addCriterion("ImagePath =", value, "imagepath");
            return (Criteria) this;
        }

        public Criteria andImagepathNotEqualTo(String value) {
            addCriterion("ImagePath <>", value, "imagepath");
            return (Criteria) this;
        }

        public Criteria andImagepathGreaterThan(String value) {
            addCriterion("ImagePath >", value, "imagepath");
            return (Criteria) this;
        }

        public Criteria andImagepathGreaterThanOrEqualTo(String value) {
            addCriterion("ImagePath >=", value, "imagepath");
            return (Criteria) this;
        }

        public Criteria andImagepathLessThan(String value) {
            addCriterion("ImagePath <", value, "imagepath");
            return (Criteria) this;
        }

        public Criteria andImagepathLessThanOrEqualTo(String value) {
            addCriterion("ImagePath <=", value, "imagepath");
            return (Criteria) this;
        }

        public Criteria andImagepathLike(String value) {
            addCriterion("ImagePath like", value, "imagepath");
            return (Criteria) this;
        }

        public Criteria andImagepathNotLike(String value) {
            addCriterion("ImagePath not like", value, "imagepath");
            return (Criteria) this;
        }

        public Criteria andImagepathIn(List<String> values) {
            addCriterion("ImagePath in", values, "imagepath");
            return (Criteria) this;
        }

        public Criteria andImagepathNotIn(List<String> values) {
            addCriterion("ImagePath not in", values, "imagepath");
            return (Criteria) this;
        }

        public Criteria andImagepathBetween(String value1, String value2) {
            addCriterion("ImagePath between", value1, value2, "imagepath");
            return (Criteria) this;
        }

        public Criteria andImagepathNotBetween(String value1, String value2) {
            addCriterion("ImagePath not between", value1, value2, "imagepath");
            return (Criteria) this;
        }

        public Criteria andImagetypeIsNull() {
            addCriterion("ImageType is null");
            return (Criteria) this;
        }

        public Criteria andImagetypeIsNotNull() {
            addCriterion("ImageType is not null");
            return (Criteria) this;
        }

        public Criteria andImagetypeEqualTo(String value) {
            addCriterion("ImageType =", value, "imagetype");
            return (Criteria) this;
        }

        public Criteria andImagetypeNotEqualTo(String value) {
            addCriterion("ImageType <>", value, "imagetype");
            return (Criteria) this;
        }

        public Criteria andImagetypeGreaterThan(String value) {
            addCriterion("ImageType >", value, "imagetype");
            return (Criteria) this;
        }

        public Criteria andImagetypeGreaterThanOrEqualTo(String value) {
            addCriterion("ImageType >=", value, "imagetype");
            return (Criteria) this;
        }

        public Criteria andImagetypeLessThan(String value) {
            addCriterion("ImageType <", value, "imagetype");
            return (Criteria) this;
        }

        public Criteria andImagetypeLessThanOrEqualTo(String value) {
            addCriterion("ImageType <=", value, "imagetype");
            return (Criteria) this;
        }

        public Criteria andImagetypeLike(String value) {
            addCriterion("ImageType like", value, "imagetype");
            return (Criteria) this;
        }

        public Criteria andImagetypeNotLike(String value) {
            addCriterion("ImageType not like", value, "imagetype");
            return (Criteria) this;
        }

        public Criteria andImagetypeIn(List<String> values) {
            addCriterion("ImageType in", values, "imagetype");
            return (Criteria) this;
        }

        public Criteria andImagetypeNotIn(List<String> values) {
            addCriterion("ImageType not in", values, "imagetype");
            return (Criteria) this;
        }

        public Criteria andImagetypeBetween(String value1, String value2) {
            addCriterion("ImageType between", value1, value2, "imagetype");
            return (Criteria) this;
        }

        public Criteria andImagetypeNotBetween(String value1, String value2) {
            addCriterion("ImageType not between", value1, value2, "imagetype");
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