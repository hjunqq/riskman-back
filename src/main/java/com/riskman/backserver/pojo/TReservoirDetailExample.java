package com.riskman.backserver.pojo;

import java.util.ArrayList;
import java.util.List;

public class TReservoirDetailExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TReservoirDetailExample() {
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

        public Criteria andInfonatureimageIsNull() {
            addCriterion("InfoNatureImage is null");
            return (Criteria) this;
        }

        public Criteria andInfonatureimageIsNotNull() {
            addCriterion("InfoNatureImage is not null");
            return (Criteria) this;
        }

        public Criteria andInfonatureimageEqualTo(Integer value) {
            addCriterion("InfoNatureImage =", value, "infonatureimage");
            return (Criteria) this;
        }

        public Criteria andInfonatureimageNotEqualTo(Integer value) {
            addCriterion("InfoNatureImage <>", value, "infonatureimage");
            return (Criteria) this;
        }

        public Criteria andInfonatureimageGreaterThan(Integer value) {
            addCriterion("InfoNatureImage >", value, "infonatureimage");
            return (Criteria) this;
        }

        public Criteria andInfonatureimageGreaterThanOrEqualTo(Integer value) {
            addCriterion("InfoNatureImage >=", value, "infonatureimage");
            return (Criteria) this;
        }

        public Criteria andInfonatureimageLessThan(Integer value) {
            addCriterion("InfoNatureImage <", value, "infonatureimage");
            return (Criteria) this;
        }

        public Criteria andInfonatureimageLessThanOrEqualTo(Integer value) {
            addCriterion("InfoNatureImage <=", value, "infonatureimage");
            return (Criteria) this;
        }

        public Criteria andInfonatureimageIn(List<Integer> values) {
            addCriterion("InfoNatureImage in", values, "infonatureimage");
            return (Criteria) this;
        }

        public Criteria andInfonatureimageNotIn(List<Integer> values) {
            addCriterion("InfoNatureImage not in", values, "infonatureimage");
            return (Criteria) this;
        }

        public Criteria andInfonatureimageBetween(Integer value1, Integer value2) {
            addCriterion("InfoNatureImage between", value1, value2, "infonatureimage");
            return (Criteria) this;
        }

        public Criteria andInfonatureimageNotBetween(Integer value1, Integer value2) {
            addCriterion("InfoNatureImage not between", value1, value2, "infonatureimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectimageIsNull() {
            addCriterion("InfoProjectImage is null");
            return (Criteria) this;
        }

        public Criteria andInfoprojectimageIsNotNull() {
            addCriterion("InfoProjectImage is not null");
            return (Criteria) this;
        }

        public Criteria andInfoprojectimageEqualTo(Integer value) {
            addCriterion("InfoProjectImage =", value, "infoprojectimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectimageNotEqualTo(Integer value) {
            addCriterion("InfoProjectImage <>", value, "infoprojectimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectimageGreaterThan(Integer value) {
            addCriterion("InfoProjectImage >", value, "infoprojectimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectimageGreaterThanOrEqualTo(Integer value) {
            addCriterion("InfoProjectImage >=", value, "infoprojectimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectimageLessThan(Integer value) {
            addCriterion("InfoProjectImage <", value, "infoprojectimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectimageLessThanOrEqualTo(Integer value) {
            addCriterion("InfoProjectImage <=", value, "infoprojectimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectimageIn(List<Integer> values) {
            addCriterion("InfoProjectImage in", values, "infoprojectimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectimageNotIn(List<Integer> values) {
            addCriterion("InfoProjectImage not in", values, "infoprojectimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectimageBetween(Integer value1, Integer value2) {
            addCriterion("InfoProjectImage between", value1, value2, "infoprojectimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectimageNotBetween(Integer value1, Integer value2) {
            addCriterion("InfoProjectImage not between", value1, value2, "infoprojectimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectlayoutimageIsNull() {
            addCriterion("InfoProjectLayoutImage is null");
            return (Criteria) this;
        }

        public Criteria andInfoprojectlayoutimageIsNotNull() {
            addCriterion("InfoProjectLayoutImage is not null");
            return (Criteria) this;
        }

        public Criteria andInfoprojectlayoutimageEqualTo(Integer value) {
            addCriterion("InfoProjectLayoutImage =", value, "infoprojectlayoutimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectlayoutimageNotEqualTo(Integer value) {
            addCriterion("InfoProjectLayoutImage <>", value, "infoprojectlayoutimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectlayoutimageGreaterThan(Integer value) {
            addCriterion("InfoProjectLayoutImage >", value, "infoprojectlayoutimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectlayoutimageGreaterThanOrEqualTo(Integer value) {
            addCriterion("InfoProjectLayoutImage >=", value, "infoprojectlayoutimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectlayoutimageLessThan(Integer value) {
            addCriterion("InfoProjectLayoutImage <", value, "infoprojectlayoutimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectlayoutimageLessThanOrEqualTo(Integer value) {
            addCriterion("InfoProjectLayoutImage <=", value, "infoprojectlayoutimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectlayoutimageIn(List<Integer> values) {
            addCriterion("InfoProjectLayoutImage in", values, "infoprojectlayoutimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectlayoutimageNotIn(List<Integer> values) {
            addCriterion("InfoProjectLayoutImage not in", values, "infoprojectlayoutimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectlayoutimageBetween(Integer value1, Integer value2) {
            addCriterion("InfoProjectLayoutImage between", value1, value2, "infoprojectlayoutimage");
            return (Criteria) this;
        }

        public Criteria andInfoprojectlayoutimageNotBetween(Integer value1, Integer value2) {
            addCriterion("InfoProjectLayoutImage not between", value1, value2, "infoprojectlayoutimage");
            return (Criteria) this;
        }

        public Criteria andInfogeoimageIsNull() {
            addCriterion("InfoGeoImage is null");
            return (Criteria) this;
        }

        public Criteria andInfogeoimageIsNotNull() {
            addCriterion("InfoGeoImage is not null");
            return (Criteria) this;
        }

        public Criteria andInfogeoimageEqualTo(Integer value) {
            addCriterion("InfoGeoImage =", value, "infogeoimage");
            return (Criteria) this;
        }

        public Criteria andInfogeoimageNotEqualTo(Integer value) {
            addCriterion("InfoGeoImage <>", value, "infogeoimage");
            return (Criteria) this;
        }

        public Criteria andInfogeoimageGreaterThan(Integer value) {
            addCriterion("InfoGeoImage >", value, "infogeoimage");
            return (Criteria) this;
        }

        public Criteria andInfogeoimageGreaterThanOrEqualTo(Integer value) {
            addCriterion("InfoGeoImage >=", value, "infogeoimage");
            return (Criteria) this;
        }

        public Criteria andInfogeoimageLessThan(Integer value) {
            addCriterion("InfoGeoImage <", value, "infogeoimage");
            return (Criteria) this;
        }

        public Criteria andInfogeoimageLessThanOrEqualTo(Integer value) {
            addCriterion("InfoGeoImage <=", value, "infogeoimage");
            return (Criteria) this;
        }

        public Criteria andInfogeoimageIn(List<Integer> values) {
            addCriterion("InfoGeoImage in", values, "infogeoimage");
            return (Criteria) this;
        }

        public Criteria andInfogeoimageNotIn(List<Integer> values) {
            addCriterion("InfoGeoImage not in", values, "infogeoimage");
            return (Criteria) this;
        }

        public Criteria andInfogeoimageBetween(Integer value1, Integer value2) {
            addCriterion("InfoGeoImage between", value1, value2, "infogeoimage");
            return (Criteria) this;
        }

        public Criteria andInfogeoimageNotBetween(Integer value1, Integer value2) {
            addCriterion("InfoGeoImage not between", value1, value2, "infogeoimage");
            return (Criteria) this;
        }

        public Criteria andInfosectionimageIsNull() {
            addCriterion("InfoSectionImage is null");
            return (Criteria) this;
        }

        public Criteria andInfosectionimageIsNotNull() {
            addCriterion("InfoSectionImage is not null");
            return (Criteria) this;
        }

        public Criteria andInfosectionimageEqualTo(Integer value) {
            addCriterion("InfoSectionImage =", value, "infosectionimage");
            return (Criteria) this;
        }

        public Criteria andInfosectionimageNotEqualTo(Integer value) {
            addCriterion("InfoSectionImage <>", value, "infosectionimage");
            return (Criteria) this;
        }

        public Criteria andInfosectionimageGreaterThan(Integer value) {
            addCriterion("InfoSectionImage >", value, "infosectionimage");
            return (Criteria) this;
        }

        public Criteria andInfosectionimageGreaterThanOrEqualTo(Integer value) {
            addCriterion("InfoSectionImage >=", value, "infosectionimage");
            return (Criteria) this;
        }

        public Criteria andInfosectionimageLessThan(Integer value) {
            addCriterion("InfoSectionImage <", value, "infosectionimage");
            return (Criteria) this;
        }

        public Criteria andInfosectionimageLessThanOrEqualTo(Integer value) {
            addCriterion("InfoSectionImage <=", value, "infosectionimage");
            return (Criteria) this;
        }

        public Criteria andInfosectionimageIn(List<Integer> values) {
            addCriterion("InfoSectionImage in", values, "infosectionimage");
            return (Criteria) this;
        }

        public Criteria andInfosectionimageNotIn(List<Integer> values) {
            addCriterion("InfoSectionImage not in", values, "infosectionimage");
            return (Criteria) this;
        }

        public Criteria andInfosectionimageBetween(Integer value1, Integer value2) {
            addCriterion("InfoSectionImage between", value1, value2, "infosectionimage");
            return (Criteria) this;
        }

        public Criteria andInfosectionimageNotBetween(Integer value1, Integer value2) {
            addCriterion("InfoSectionImage not between", value1, value2, "infosectionimage");
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