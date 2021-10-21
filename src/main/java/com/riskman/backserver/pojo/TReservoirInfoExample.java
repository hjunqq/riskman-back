package com.riskman.backserver.pojo;

import java.util.ArrayList;
import java.util.List;

public class TReservoirInfoExample {
    protected String orderByClause;

    protected boolean distinct;

    protected List<Criteria> oredCriteria;

    public TReservoirInfoExample() {
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

        public Criteria andNameIsNull() {
            addCriterion("Name is null");
            return (Criteria) this;
        }

        public Criteria andNameIsNotNull() {
            addCriterion("Name is not null");
            return (Criteria) this;
        }

        public Criteria andNameEqualTo(String value) {
            addCriterion("Name =", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotEqualTo(String value) {
            addCriterion("Name <>", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameGreaterThan(String value) {
            addCriterion("Name >", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameGreaterThanOrEqualTo(String value) {
            addCriterion("Name >=", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLessThan(String value) {
            addCriterion("Name <", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLessThanOrEqualTo(String value) {
            addCriterion("Name <=", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameLike(String value) {
            addCriterion("Name like", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotLike(String value) {
            addCriterion("Name not like", value, "name");
            return (Criteria) this;
        }

        public Criteria andNameIn(List<String> values) {
            addCriterion("Name in", values, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotIn(List<String> values) {
            addCriterion("Name not in", values, "name");
            return (Criteria) this;
        }

        public Criteria andNameBetween(String value1, String value2) {
            addCriterion("Name between", value1, value2, "name");
            return (Criteria) this;
        }

        public Criteria andNameNotBetween(String value1, String value2) {
            addCriterion("Name not between", value1, value2, "name");
            return (Criteria) this;
        }

        public Criteria andLongitudeIsNull() {
            addCriterion("Longitude is null");
            return (Criteria) this;
        }

        public Criteria andLongitudeIsNotNull() {
            addCriterion("Longitude is not null");
            return (Criteria) this;
        }

        public Criteria andLongitudeEqualTo(Double value) {
            addCriterion("Longitude =", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeNotEqualTo(Double value) {
            addCriterion("Longitude <>", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeGreaterThan(Double value) {
            addCriterion("Longitude >", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeGreaterThanOrEqualTo(Double value) {
            addCriterion("Longitude >=", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeLessThan(Double value) {
            addCriterion("Longitude <", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeLessThanOrEqualTo(Double value) {
            addCriterion("Longitude <=", value, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeIn(List<Double> values) {
            addCriterion("Longitude in", values, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeNotIn(List<Double> values) {
            addCriterion("Longitude not in", values, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeBetween(Double value1, Double value2) {
            addCriterion("Longitude between", value1, value2, "longitude");
            return (Criteria) this;
        }

        public Criteria andLongitudeNotBetween(Double value1, Double value2) {
            addCriterion("Longitude not between", value1, value2, "longitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeIsNull() {
            addCriterion("Latitude is null");
            return (Criteria) this;
        }

        public Criteria andLatitudeIsNotNull() {
            addCriterion("Latitude is not null");
            return (Criteria) this;
        }

        public Criteria andLatitudeEqualTo(Double value) {
            addCriterion("Latitude =", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeNotEqualTo(Double value) {
            addCriterion("Latitude <>", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeGreaterThan(Double value) {
            addCriterion("Latitude >", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeGreaterThanOrEqualTo(Double value) {
            addCriterion("Latitude >=", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeLessThan(Double value) {
            addCriterion("Latitude <", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeLessThanOrEqualTo(Double value) {
            addCriterion("Latitude <=", value, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeIn(List<Double> values) {
            addCriterion("Latitude in", values, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeNotIn(List<Double> values) {
            addCriterion("Latitude not in", values, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeBetween(Double value1, Double value2) {
            addCriterion("Latitude between", value1, value2, "latitude");
            return (Criteria) this;
        }

        public Criteria andLatitudeNotBetween(Double value1, Double value2) {
            addCriterion("Latitude not between", value1, value2, "latitude");
            return (Criteria) this;
        }

        public Criteria andCheckfloodlevelIsNull() {
            addCriterion("CheckFloodLevel is null");
            return (Criteria) this;
        }

        public Criteria andCheckfloodlevelIsNotNull() {
            addCriterion("CheckFloodLevel is not null");
            return (Criteria) this;
        }

        public Criteria andCheckfloodlevelEqualTo(Double value) {
            addCriterion("CheckFloodLevel =", value, "checkfloodlevel");
            return (Criteria) this;
        }

        public Criteria andCheckfloodlevelNotEqualTo(Double value) {
            addCriterion("CheckFloodLevel <>", value, "checkfloodlevel");
            return (Criteria) this;
        }

        public Criteria andCheckfloodlevelGreaterThan(Double value) {
            addCriterion("CheckFloodLevel >", value, "checkfloodlevel");
            return (Criteria) this;
        }

        public Criteria andCheckfloodlevelGreaterThanOrEqualTo(Double value) {
            addCriterion("CheckFloodLevel >=", value, "checkfloodlevel");
            return (Criteria) this;
        }

        public Criteria andCheckfloodlevelLessThan(Double value) {
            addCriterion("CheckFloodLevel <", value, "checkfloodlevel");
            return (Criteria) this;
        }

        public Criteria andCheckfloodlevelLessThanOrEqualTo(Double value) {
            addCriterion("CheckFloodLevel <=", value, "checkfloodlevel");
            return (Criteria) this;
        }

        public Criteria andCheckfloodlevelIn(List<Double> values) {
            addCriterion("CheckFloodLevel in", values, "checkfloodlevel");
            return (Criteria) this;
        }

        public Criteria andCheckfloodlevelNotIn(List<Double> values) {
            addCriterion("CheckFloodLevel not in", values, "checkfloodlevel");
            return (Criteria) this;
        }

        public Criteria andCheckfloodlevelBetween(Double value1, Double value2) {
            addCriterion("CheckFloodLevel between", value1, value2, "checkfloodlevel");
            return (Criteria) this;
        }

        public Criteria andCheckfloodlevelNotBetween(Double value1, Double value2) {
            addCriterion("CheckFloodLevel not between", value1, value2, "checkfloodlevel");
            return (Criteria) this;
        }

        public Criteria andDesignfloodlevelIsNull() {
            addCriterion("DesignFloodLevel is null");
            return (Criteria) this;
        }

        public Criteria andDesignfloodlevelIsNotNull() {
            addCriterion("DesignFloodLevel is not null");
            return (Criteria) this;
        }

        public Criteria andDesignfloodlevelEqualTo(Double value) {
            addCriterion("DesignFloodLevel =", value, "designfloodlevel");
            return (Criteria) this;
        }

        public Criteria andDesignfloodlevelNotEqualTo(Double value) {
            addCriterion("DesignFloodLevel <>", value, "designfloodlevel");
            return (Criteria) this;
        }

        public Criteria andDesignfloodlevelGreaterThan(Double value) {
            addCriterion("DesignFloodLevel >", value, "designfloodlevel");
            return (Criteria) this;
        }

        public Criteria andDesignfloodlevelGreaterThanOrEqualTo(Double value) {
            addCriterion("DesignFloodLevel >=", value, "designfloodlevel");
            return (Criteria) this;
        }

        public Criteria andDesignfloodlevelLessThan(Double value) {
            addCriterion("DesignFloodLevel <", value, "designfloodlevel");
            return (Criteria) this;
        }

        public Criteria andDesignfloodlevelLessThanOrEqualTo(Double value) {
            addCriterion("DesignFloodLevel <=", value, "designfloodlevel");
            return (Criteria) this;
        }

        public Criteria andDesignfloodlevelIn(List<Double> values) {
            addCriterion("DesignFloodLevel in", values, "designfloodlevel");
            return (Criteria) this;
        }

        public Criteria andDesignfloodlevelNotIn(List<Double> values) {
            addCriterion("DesignFloodLevel not in", values, "designfloodlevel");
            return (Criteria) this;
        }

        public Criteria andDesignfloodlevelBetween(Double value1, Double value2) {
            addCriterion("DesignFloodLevel between", value1, value2, "designfloodlevel");
            return (Criteria) this;
        }

        public Criteria andDesignfloodlevelNotBetween(Double value1, Double value2) {
            addCriterion("DesignFloodLevel not between", value1, value2, "designfloodlevel");
            return (Criteria) this;
        }

        public Criteria andNormalstoragelevelIsNull() {
            addCriterion("NormalStorageLevel is null");
            return (Criteria) this;
        }

        public Criteria andNormalstoragelevelIsNotNull() {
            addCriterion("NormalStorageLevel is not null");
            return (Criteria) this;
        }

        public Criteria andNormalstoragelevelEqualTo(Double value) {
            addCriterion("NormalStorageLevel =", value, "normalstoragelevel");
            return (Criteria) this;
        }

        public Criteria andNormalstoragelevelNotEqualTo(Double value) {
            addCriterion("NormalStorageLevel <>", value, "normalstoragelevel");
            return (Criteria) this;
        }

        public Criteria andNormalstoragelevelGreaterThan(Double value) {
            addCriterion("NormalStorageLevel >", value, "normalstoragelevel");
            return (Criteria) this;
        }

        public Criteria andNormalstoragelevelGreaterThanOrEqualTo(Double value) {
            addCriterion("NormalStorageLevel >=", value, "normalstoragelevel");
            return (Criteria) this;
        }

        public Criteria andNormalstoragelevelLessThan(Double value) {
            addCriterion("NormalStorageLevel <", value, "normalstoragelevel");
            return (Criteria) this;
        }

        public Criteria andNormalstoragelevelLessThanOrEqualTo(Double value) {
            addCriterion("NormalStorageLevel <=", value, "normalstoragelevel");
            return (Criteria) this;
        }

        public Criteria andNormalstoragelevelIn(List<Double> values) {
            addCriterion("NormalStorageLevel in", values, "normalstoragelevel");
            return (Criteria) this;
        }

        public Criteria andNormalstoragelevelNotIn(List<Double> values) {
            addCriterion("NormalStorageLevel not in", values, "normalstoragelevel");
            return (Criteria) this;
        }

        public Criteria andNormalstoragelevelBetween(Double value1, Double value2) {
            addCriterion("NormalStorageLevel between", value1, value2, "normalstoragelevel");
            return (Criteria) this;
        }

        public Criteria andNormalstoragelevelNotBetween(Double value1, Double value2) {
            addCriterion("NormalStorageLevel not between", value1, value2, "normalstoragelevel");
            return (Criteria) this;
        }

        public Criteria andFloodlimitlevelIsNull() {
            addCriterion("FloodLimitLevel is null");
            return (Criteria) this;
        }

        public Criteria andFloodlimitlevelIsNotNull() {
            addCriterion("FloodLimitLevel is not null");
            return (Criteria) this;
        }

        public Criteria andFloodlimitlevelEqualTo(Double value) {
            addCriterion("FloodLimitLevel =", value, "floodlimitlevel");
            return (Criteria) this;
        }

        public Criteria andFloodlimitlevelNotEqualTo(Double value) {
            addCriterion("FloodLimitLevel <>", value, "floodlimitlevel");
            return (Criteria) this;
        }

        public Criteria andFloodlimitlevelGreaterThan(Double value) {
            addCriterion("FloodLimitLevel >", value, "floodlimitlevel");
            return (Criteria) this;
        }

        public Criteria andFloodlimitlevelGreaterThanOrEqualTo(Double value) {
            addCriterion("FloodLimitLevel >=", value, "floodlimitlevel");
            return (Criteria) this;
        }

        public Criteria andFloodlimitlevelLessThan(Double value) {
            addCriterion("FloodLimitLevel <", value, "floodlimitlevel");
            return (Criteria) this;
        }

        public Criteria andFloodlimitlevelLessThanOrEqualTo(Double value) {
            addCriterion("FloodLimitLevel <=", value, "floodlimitlevel");
            return (Criteria) this;
        }

        public Criteria andFloodlimitlevelIn(List<Double> values) {
            addCriterion("FloodLimitLevel in", values, "floodlimitlevel");
            return (Criteria) this;
        }

        public Criteria andFloodlimitlevelNotIn(List<Double> values) {
            addCriterion("FloodLimitLevel not in", values, "floodlimitlevel");
            return (Criteria) this;
        }

        public Criteria andFloodlimitlevelBetween(Double value1, Double value2) {
            addCriterion("FloodLimitLevel between", value1, value2, "floodlimitlevel");
            return (Criteria) this;
        }

        public Criteria andFloodlimitlevelNotBetween(Double value1, Double value2) {
            addCriterion("FloodLimitLevel not between", value1, value2, "floodlimitlevel");
            return (Criteria) this;
        }

        public Criteria andDeadwaterlevelIsNull() {
            addCriterion("DeadWaterLevel is null");
            return (Criteria) this;
        }

        public Criteria andDeadwaterlevelIsNotNull() {
            addCriterion("DeadWaterLevel is not null");
            return (Criteria) this;
        }

        public Criteria andDeadwaterlevelEqualTo(Double value) {
            addCriterion("DeadWaterLevel =", value, "deadwaterlevel");
            return (Criteria) this;
        }

        public Criteria andDeadwaterlevelNotEqualTo(Double value) {
            addCriterion("DeadWaterLevel <>", value, "deadwaterlevel");
            return (Criteria) this;
        }

        public Criteria andDeadwaterlevelGreaterThan(Double value) {
            addCriterion("DeadWaterLevel >", value, "deadwaterlevel");
            return (Criteria) this;
        }

        public Criteria andDeadwaterlevelGreaterThanOrEqualTo(Double value) {
            addCriterion("DeadWaterLevel >=", value, "deadwaterlevel");
            return (Criteria) this;
        }

        public Criteria andDeadwaterlevelLessThan(Double value) {
            addCriterion("DeadWaterLevel <", value, "deadwaterlevel");
            return (Criteria) this;
        }

        public Criteria andDeadwaterlevelLessThanOrEqualTo(Double value) {
            addCriterion("DeadWaterLevel <=", value, "deadwaterlevel");
            return (Criteria) this;
        }

        public Criteria andDeadwaterlevelIn(List<Double> values) {
            addCriterion("DeadWaterLevel in", values, "deadwaterlevel");
            return (Criteria) this;
        }

        public Criteria andDeadwaterlevelNotIn(List<Double> values) {
            addCriterion("DeadWaterLevel not in", values, "deadwaterlevel");
            return (Criteria) this;
        }

        public Criteria andDeadwaterlevelBetween(Double value1, Double value2) {
            addCriterion("DeadWaterLevel between", value1, value2, "deadwaterlevel");
            return (Criteria) this;
        }

        public Criteria andDeadwaterlevelNotBetween(Double value1, Double value2) {
            addCriterion("DeadWaterLevel not between", value1, value2, "deadwaterlevel");
            return (Criteria) this;
        }

        public Criteria andManagementunitIsNull() {
            addCriterion("ManagementUnit is null");
            return (Criteria) this;
        }

        public Criteria andManagementunitIsNotNull() {
            addCriterion("ManagementUnit is not null");
            return (Criteria) this;
        }

        public Criteria andManagementunitEqualTo(Integer value) {
            addCriterion("ManagementUnit =", value, "managementunit");
            return (Criteria) this;
        }

        public Criteria andManagementunitNotEqualTo(Integer value) {
            addCriterion("ManagementUnit <>", value, "managementunit");
            return (Criteria) this;
        }

        public Criteria andManagementunitGreaterThan(Integer value) {
            addCriterion("ManagementUnit >", value, "managementunit");
            return (Criteria) this;
        }

        public Criteria andManagementunitGreaterThanOrEqualTo(Integer value) {
            addCriterion("ManagementUnit >=", value, "managementunit");
            return (Criteria) this;
        }

        public Criteria andManagementunitLessThan(Integer value) {
            addCriterion("ManagementUnit <", value, "managementunit");
            return (Criteria) this;
        }

        public Criteria andManagementunitLessThanOrEqualTo(Integer value) {
            addCriterion("ManagementUnit <=", value, "managementunit");
            return (Criteria) this;
        }

        public Criteria andManagementunitIn(List<Integer> values) {
            addCriterion("ManagementUnit in", values, "managementunit");
            return (Criteria) this;
        }

        public Criteria andManagementunitNotIn(List<Integer> values) {
            addCriterion("ManagementUnit not in", values, "managementunit");
            return (Criteria) this;
        }

        public Criteria andManagementunitBetween(Integer value1, Integer value2) {
            addCriterion("ManagementUnit between", value1, value2, "managementunit");
            return (Criteria) this;
        }

        public Criteria andManagementunitNotBetween(Integer value1, Integer value2) {
            addCriterion("ManagementUnit not between", value1, value2, "managementunit");
            return (Criteria) this;
        }

        public Criteria andAdministratorIsNull() {
            addCriterion("Administrator is null");
            return (Criteria) this;
        }

        public Criteria andAdministratorIsNotNull() {
            addCriterion("Administrator is not null");
            return (Criteria) this;
        }

        public Criteria andAdministratorEqualTo(Integer value) {
            addCriterion("Administrator =", value, "administrator");
            return (Criteria) this;
        }

        public Criteria andAdministratorNotEqualTo(Integer value) {
            addCriterion("Administrator <>", value, "administrator");
            return (Criteria) this;
        }

        public Criteria andAdministratorGreaterThan(Integer value) {
            addCriterion("Administrator >", value, "administrator");
            return (Criteria) this;
        }

        public Criteria andAdministratorGreaterThanOrEqualTo(Integer value) {
            addCriterion("Administrator >=", value, "administrator");
            return (Criteria) this;
        }

        public Criteria andAdministratorLessThan(Integer value) {
            addCriterion("Administrator <", value, "administrator");
            return (Criteria) this;
        }

        public Criteria andAdministratorLessThanOrEqualTo(Integer value) {
            addCriterion("Administrator <=", value, "administrator");
            return (Criteria) this;
        }

        public Criteria andAdministratorIn(List<Integer> values) {
            addCriterion("Administrator in", values, "administrator");
            return (Criteria) this;
        }

        public Criteria andAdministratorNotIn(List<Integer> values) {
            addCriterion("Administrator not in", values, "administrator");
            return (Criteria) this;
        }

        public Criteria andAdministratorBetween(Integer value1, Integer value2) {
            addCriterion("Administrator between", value1, value2, "administrator");
            return (Criteria) this;
        }

        public Criteria andAdministratorNotBetween(Integer value1, Integer value2) {
            addCriterion("Administrator not between", value1, value2, "administrator");
            return (Criteria) this;
        }

        public Criteria andTechnicalpersonIsNull() {
            addCriterion("TechnicalPerson is null");
            return (Criteria) this;
        }

        public Criteria andTechnicalpersonIsNotNull() {
            addCriterion("TechnicalPerson is not null");
            return (Criteria) this;
        }

        public Criteria andTechnicalpersonEqualTo(Integer value) {
            addCriterion("TechnicalPerson =", value, "technicalperson");
            return (Criteria) this;
        }

        public Criteria andTechnicalpersonNotEqualTo(Integer value) {
            addCriterion("TechnicalPerson <>", value, "technicalperson");
            return (Criteria) this;
        }

        public Criteria andTechnicalpersonGreaterThan(Integer value) {
            addCriterion("TechnicalPerson >", value, "technicalperson");
            return (Criteria) this;
        }

        public Criteria andTechnicalpersonGreaterThanOrEqualTo(Integer value) {
            addCriterion("TechnicalPerson >=", value, "technicalperson");
            return (Criteria) this;
        }

        public Criteria andTechnicalpersonLessThan(Integer value) {
            addCriterion("TechnicalPerson <", value, "technicalperson");
            return (Criteria) this;
        }

        public Criteria andTechnicalpersonLessThanOrEqualTo(Integer value) {
            addCriterion("TechnicalPerson <=", value, "technicalperson");
            return (Criteria) this;
        }

        public Criteria andTechnicalpersonIn(List<Integer> values) {
            addCriterion("TechnicalPerson in", values, "technicalperson");
            return (Criteria) this;
        }

        public Criteria andTechnicalpersonNotIn(List<Integer> values) {
            addCriterion("TechnicalPerson not in", values, "technicalperson");
            return (Criteria) this;
        }

        public Criteria andTechnicalpersonBetween(Integer value1, Integer value2) {
            addCriterion("TechnicalPerson between", value1, value2, "technicalperson");
            return (Criteria) this;
        }

        public Criteria andTechnicalpersonNotBetween(Integer value1, Integer value2) {
            addCriterion("TechnicalPerson not between", value1, value2, "technicalperson");
            return (Criteria) this;
        }

        public Criteria andInspectionpersonIsNull() {
            addCriterion("InspectionPerson is null");
            return (Criteria) this;
        }

        public Criteria andInspectionpersonIsNotNull() {
            addCriterion("InspectionPerson is not null");
            return (Criteria) this;
        }

        public Criteria andInspectionpersonEqualTo(Integer value) {
            addCriterion("InspectionPerson =", value, "inspectionperson");
            return (Criteria) this;
        }

        public Criteria andInspectionpersonNotEqualTo(Integer value) {
            addCriterion("InspectionPerson <>", value, "inspectionperson");
            return (Criteria) this;
        }

        public Criteria andInspectionpersonGreaterThan(Integer value) {
            addCriterion("InspectionPerson >", value, "inspectionperson");
            return (Criteria) this;
        }

        public Criteria andInspectionpersonGreaterThanOrEqualTo(Integer value) {
            addCriterion("InspectionPerson >=", value, "inspectionperson");
            return (Criteria) this;
        }

        public Criteria andInspectionpersonLessThan(Integer value) {
            addCriterion("InspectionPerson <", value, "inspectionperson");
            return (Criteria) this;
        }

        public Criteria andInspectionpersonLessThanOrEqualTo(Integer value) {
            addCriterion("InspectionPerson <=", value, "inspectionperson");
            return (Criteria) this;
        }

        public Criteria andInspectionpersonIn(List<Integer> values) {
            addCriterion("InspectionPerson in", values, "inspectionperson");
            return (Criteria) this;
        }

        public Criteria andInspectionpersonNotIn(List<Integer> values) {
            addCriterion("InspectionPerson not in", values, "inspectionperson");
            return (Criteria) this;
        }

        public Criteria andInspectionpersonBetween(Integer value1, Integer value2) {
            addCriterion("InspectionPerson between", value1, value2, "inspectionperson");
            return (Criteria) this;
        }

        public Criteria andInspectionpersonNotBetween(Integer value1, Integer value2) {
            addCriterion("InspectionPerson not between", value1, value2, "inspectionperson");
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