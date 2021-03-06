package com.riskman.backserver.pojo;

import java.util.ArrayList;
import java.util.List;

public class TProjectPropsExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TProjectPropsExample() {
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

        public Criteria andLocationIsNull() {
            addCriterion("Location is null");
            return (Criteria) this;
        }

        public Criteria andLocationIsNotNull() {
            addCriterion("Location is not null");
            return (Criteria) this;
        }

        public Criteria andLocationEqualTo(String value) {
            addCriterion("Location =", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationNotEqualTo(String value) {
            addCriterion("Location <>", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationGreaterThan(String value) {
            addCriterion("Location >", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationGreaterThanOrEqualTo(String value) {
            addCriterion("Location >=", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationLessThan(String value) {
            addCriterion("Location <", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationLessThanOrEqualTo(String value) {
            addCriterion("Location <=", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationLike(String value) {
            addCriterion("Location like", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationNotLike(String value) {
            addCriterion("Location not like", value, "location");
            return (Criteria) this;
        }

        public Criteria andLocationIn(List<String> values) {
            addCriterion("Location in", values, "location");
            return (Criteria) this;
        }

        public Criteria andLocationNotIn(List<String> values) {
            addCriterion("Location not in", values, "location");
            return (Criteria) this;
        }

        public Criteria andLocationBetween(String value1, String value2) {
            addCriterion("Location between", value1, value2, "location");
            return (Criteria) this;
        }

        public Criteria andLocationNotBetween(String value1, String value2) {
            addCriterion("Location not between", value1, value2, "location");
            return (Criteria) this;
        }

        public Criteria andPropnameIsNull() {
            addCriterion("PropName is null");
            return (Criteria) this;
        }

        public Criteria andPropnameIsNotNull() {
            addCriterion("PropName is not null");
            return (Criteria) this;
        }

        public Criteria andPropnameEqualTo(String value) {
            addCriterion("PropName =", value, "propname");
            return (Criteria) this;
        }

        public Criteria andPropnameNotEqualTo(String value) {
            addCriterion("PropName <>", value, "propname");
            return (Criteria) this;
        }

        public Criteria andPropnameGreaterThan(String value) {
            addCriterion("PropName >", value, "propname");
            return (Criteria) this;
        }

        public Criteria andPropnameGreaterThanOrEqualTo(String value) {
            addCriterion("PropName >=", value, "propname");
            return (Criteria) this;
        }

        public Criteria andPropnameLessThan(String value) {
            addCriterion("PropName <", value, "propname");
            return (Criteria) this;
        }

        public Criteria andPropnameLessThanOrEqualTo(String value) {
            addCriterion("PropName <=", value, "propname");
            return (Criteria) this;
        }

        public Criteria andPropnameLike(String value) {
            addCriterion("PropName like", value, "propname");
            return (Criteria) this;
        }

        public Criteria andPropnameNotLike(String value) {
            addCriterion("PropName not like", value, "propname");
            return (Criteria) this;
        }

        public Criteria andPropnameIn(List<String> values) {
            addCriterion("PropName in", values, "propname");
            return (Criteria) this;
        }

        public Criteria andPropnameNotIn(List<String> values) {
            addCriterion("PropName not in", values, "propname");
            return (Criteria) this;
        }

        public Criteria andPropnameBetween(String value1, String value2) {
            addCriterion("PropName between", value1, value2, "propname");
            return (Criteria) this;
        }

        public Criteria andPropnameNotBetween(String value1, String value2) {
            addCriterion("PropName not between", value1, value2, "propname");
            return (Criteria) this;
        }

        public Criteria andPropvalueIsNull() {
            addCriterion("PropValue is null");
            return (Criteria) this;
        }

        public Criteria andPropvalueIsNotNull() {
            addCriterion("PropValue is not null");
            return (Criteria) this;
        }

        public Criteria andPropvalueEqualTo(String value) {
            addCriterion("PropValue =", value, "propvalue");
            return (Criteria) this;
        }

        public Criteria andPropvalueNotEqualTo(String value) {
            addCriterion("PropValue <>", value, "propvalue");
            return (Criteria) this;
        }

        public Criteria andPropvalueGreaterThan(String value) {
            addCriterion("PropValue >", value, "propvalue");
            return (Criteria) this;
        }

        public Criteria andPropvalueGreaterThanOrEqualTo(String value) {
            addCriterion("PropValue >=", value, "propvalue");
            return (Criteria) this;
        }

        public Criteria andPropvalueLessThan(String value) {
            addCriterion("PropValue <", value, "propvalue");
            return (Criteria) this;
        }

        public Criteria andPropvalueLessThanOrEqualTo(String value) {
            addCriterion("PropValue <=", value, "propvalue");
            return (Criteria) this;
        }

        public Criteria andPropvalueLike(String value) {
            addCriterion("PropValue like", value, "propvalue");
            return (Criteria) this;
        }

        public Criteria andPropvalueNotLike(String value) {
            addCriterion("PropValue not like", value, "propvalue");
            return (Criteria) this;
        }

        public Criteria andPropvalueIn(List<String> values) {
            addCriterion("PropValue in", values, "propvalue");
            return (Criteria) this;
        }

        public Criteria andPropvalueNotIn(List<String> values) {
            addCriterion("PropValue not in", values, "propvalue");
            return (Criteria) this;
        }

        public Criteria andPropvalueBetween(String value1, String value2) {
            addCriterion("PropValue between", value1, value2, "propvalue");
            return (Criteria) this;
        }

        public Criteria andPropvalueNotBetween(String value1, String value2) {
            addCriterion("PropValue not between", value1, value2, "propvalue");
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