(self["webpackChunkwebfront_ng"] = self["webpackChunkwebfront_ng"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 64217:
/*!***********************************!*\
  !*** ./src/app/app-navigation.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navigation": () => (/* binding */ navigation)
/* harmony export */ });
const navigation = [
    // {
    //   text: 'Home',
    //   path: '/home',
    //   icon: 'home'
    // },
    // {
    //   text: 'Examples',
    //   icon: 'folder',
    //   items: [
    //     {
    //       text: 'Profile',
    //       path: '/profile'
    //     },
    //     {
    //       text: 'Tasks',
    //       path: '/tasks'
    //     }
    //   ]
    // },
    {
        text: '应急决策',
        path: '/pages/emergency-plan-home',
        icon: 'home'
    },
    {
        text: '工程信息',
        path: '/pages/basic-info-page',
        icon: 'info',
        items: [
            {
                text: '流域概况',
                path: '/pages/basic-info/overview',
            },
            {
                text: '工程概况',
                path: '/basic-info/project-overview',
            },
            {
                text: '工程特性表',
                path: '/pages/basic-info/project-properties',
            },
            {
                text: '工程图表',
                path: '/pages/basic-info/engineering-chart',
            },
        ]
    },
    {
        text: '运行管理',
        path: '/pages/person-info-page',
        icon: 'group',
        items: [
            {
                text: '水库管理人员',
                path: '/pages/person-info/reservoir-manager',
            },
            {
                text: '应急管理人员',
                path: '/pages/person-info/emergency-person',
            },
        ]
    },
    {
        text: '监测和预警',
        path: '/pages/monitoring-and-warning',
        icon: 'airplane'
    },
    {
        text: '突发事件分析',
        path: '/pages/critical-incident-analysis',
        icon: 'runner'
    },
    {
        text: '应急管理',
        path: '/pages/emergency-organization-page',
        icon: 'key',
        items: [
            {
                text: '应急组织框图',
                path: '/pages/emergency-organization/emergency-diagram',
            },
            {
                text: '应急指挥部',
                path: '/pages/emergency-organization/headquarters',
                icon: 'menu',
                items: [
                    {
                        text: '办公室',
                        path: '/pages/emergency-organization/office',
                    },
                    {
                        text: '指挥机构',
                        path: '/pages/emergency-organization/command-agency',
                    },
                    {
                        text: '保障机构',
                        path: '/pages/emergency-organization/guarantee-agency',
                    },
                    {
                        text: '专家组',
                        path: '/pages/emergency-diagram/experts',
                    },
                    {
                        text: '抢险和救援',
                        path: '/pages/emergency-organization/rescue',
                    },
                ]
            },
            {
                text: '应急响应',
                icon: 'menu',
                items: [
                    {
                        text: '应急流程',
                        path: '/pages/emergency-organization/process',
                    },
                    {
                        text: '信息上报',
                        path: '/pages/emergency-organization/info-report',
                    },
                    {
                        text: '分级响应',
                        path: '/pages/emergency-organization/grade',
                    },
                ]
            },
            {
                text: '应急保障',
                icon: 'menu',
                items: [
                    {
                        text: '物资',
                        path: '/pages/emergency-organization/supplies',
                    },
                    {
                        text: '相关联系方式',
                        path: '/pages/emergency-organization/contacts',
                    }
                ]
            }
        ]
    },
    // {
    //   text: '应急管理页',
    //   path: '/pages/emergency-management-page',
    //   icon: 'warning'
    // },
    // {
    //   text: '监测和预警',
    //   path: '/pages/monitoring-and-warning',
    //   icon: 'airplane'
    // },
    // {
    //   text: '突发事件分析',
    //   path: '/pages/critical-incident-analysis',
    //   icon: 'runner'
    // },
    {
        text: '后台管理',
        icon: 'tableproperties',
        items: [
            // {
            //   text: '应急预案信息填报表',
            //   path: '/pages/forms/emergency-plan-form',
            // },
            {
                text: '水库基本信息',
                path: '/pages/forms/reservoir-info-form',
            },
            {
                text: '水库详细信息',
                path: '/pages/forms/reservoir-detail-form',
            },
            {
                text: '水库特性表',
                path: '/pages/forms/project-props-form',
            },
            {
                text: '防汛责任人',
                path: '/pages/forms/flood-resp-person',
            },
            {
                text: '应急管理人员',
                path: '/pages/forms/emergency-manager-form',
            },
            {
                text: '应急组织',
                path: '/pages/form/emergency-org-form',
            },
            {
                text: '图集',
                path: '/pages/forms/atlas-form',
            },
            {
                text: '使用权限',
                path: '/pages/forms/authority-form',
            },
            {
                text: '下游保护村庄',
                path: '/pages/forms/downstream-village-form',
            },
            {
                text: '应急指挥部中的职责',
                path: '/pages/forms/duty-form',
            },
            {
                text: '撤离路线信息',
                path: '/pages/forms/evacuation-info-form',
            },
            {
                text: '人员信息表',
                path: '/pages/forms/person-info-form',
            },
            {
                text: '安置点信息',
                path: '/pages/forms/settlement-form',
            },
            {
                text: '物资存储',
                path: '/pages/forms/supplies-storage-form',
            },
        ]
    },
];


/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components */ 7667);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services */ 17253);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ 25245);
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/profile/profile.component */ 58220);
/* harmony import */ var _pages_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/tasks/tasks.component */ 29056);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! devextreme-angular */ 57962);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! devextreme-angular */ 92225);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! devextreme-angular */ 48426);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! devextreme-angular */ 39444);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! devextreme-angular */ 4358);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! devextreme-angular */ 4706);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! devextreme-angular */ 6632);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! devextreme-angular */ 36301);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! devextreme-angular */ 35166);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! devextreme-angular */ 12305);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! devextreme-angular */ 19474);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! devextreme-angular */ 42990);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! devextreme-angular */ 6743);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! devextreme-angular */ 49172);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! devextreme-angular */ 70079);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! devextreme-angular */ 27590);
/* harmony import */ var _pages_emergency_plan_home_emergency_plan_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/emergency-plan-home/emergency-plan-home.component */ 45783);
/* harmony import */ var _pages_basic_info_page_basic_info_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/basic-info-page/basic-info-page.component */ 12486);
/* harmony import */ var _pages_emergency_management_page_emergency_management_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/emergency-management-page/emergency-management-page.component */ 52601);
/* harmony import */ var _pages_monitoring_and_warning_monitoring_and_warning_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/monitoring-and-warning/monitoring-and-warning.component */ 8283);
/* harmony import */ var _pages_critical_incident_analysis_critical_incident_analysis_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/critical-incident-analysis/critical-incident-analysis.component */ 3444);
/* harmony import */ var _pages_forms_emergency_plan_form_emergency_plan_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/forms/emergency-plan-form/emergency-plan-form.component */ 95917);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _pages_forms_atlas_form_atlas_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/forms/atlas-form/atlas-form.component */ 87710);
/* harmony import */ var _pages_forms_authority_form_authority_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/forms/authority-form/authority-form.component */ 32176);
/* harmony import */ var _pages_forms_downstream_village_form_downstream_village_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/forms/downstream-village-form/downstream-village-form.component */ 6184);
/* harmony import */ var _pages_forms_duty_form_duty_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/forms/duty-form/duty-form.component */ 28785);
/* harmony import */ var _pages_forms_evacuation_info_form_evacuation_info_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/forms/evacuation-info-form/evacuation-info-form.component */ 17875);
/* harmony import */ var _pages_forms_person_info_form_person_info_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/forms/person-info-form/person-info-form.component */ 36160);
/* harmony import */ var _pages_forms_reservoir_info_form_reservoir_info_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/forms/reservoir-info-form/reservoir-info-form.component */ 35634);
/* harmony import */ var _pages_forms_settlement_form_settlement_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/forms/settlement-form/settlement-form.component */ 89085);
/* harmony import */ var _pages_forms_supplies_storage_form_supplies_storage_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/forms/supplies-storage-form/supplies-storage-form.component */ 75410);
/* harmony import */ var _pages_person_info_page_person_info_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/person-info-page/person-info-page.component */ 80410);
/* harmony import */ var _pages_emergency_organization_page_emergency_organization_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/emergency-organization-page/emergency-organization.component */ 72945);
/* harmony import */ var _pages_forms_reservoir_detail_form_reservoir_detail_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/forms/reservoir-detail-form/reservoir-detail-form.component */ 34474);
/* harmony import */ var _pages_forms_project_props_form_project_props_form_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/forms/project-props-form/project-props-form.component */ 25019);
/* harmony import */ var _pages_forms_flood_resp_person_flood_resp_person_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/forms/flood-resp-person/flood-resp-person.component */ 71931);
/* harmony import */ var _pages_forms_emergency_manager_form_emergency_manager_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/forms/emergency-manager-form/emergency-manager-form.component */ 78542);
/* harmony import */ var _pages_forms_emergency_org_form_emergency_org_form_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/forms/emergency-org-form/emergency-org-form.component */ 15003);
/* harmony import */ var _pages_basic_info_overview_overview_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/basic-info/overview/overview.component */ 74007);
/* harmony import */ var _pages_basic_info_project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/basic-info/project-overview/project-overview.component */ 63223);
/* harmony import */ var _pages_basic_info_project_properties_project_properties_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/basic-info/project-properties/project-properties.component */ 94976);
/* harmony import */ var _pages_basic_info_engineering_chart_engineering_chart_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/basic-info/engineering-chart/engineering-chart.component */ 73880);
/* harmony import */ var _pages_person_info_reservoir_manager_reservoir_manager_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/person-info/reservoir-manager/reservoir-manager.component */ 2480);
/* harmony import */ var _pages_person_info_emergency_person_emergency_person_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/person-info/emergency-person/emergency-person.component */ 74634);
/* harmony import */ var _pages_emergency_organization_emergency_diagram_emergency_diagram_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/emergency-organization/emergency-diagram/emergency-diagram.component */ 2);
/* harmony import */ var _pages_emergency_organization_headquarters_headquarters_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/emergency-organization/headquarters/headquarters.component */ 3560);
/* harmony import */ var _pages_emergency_organization_experts_experts_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/emergency-organization/experts/experts.component */ 41023);
/* harmony import */ var _pages_emergency_organization_rescue_rescue_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/emergency-organization/rescue/rescue.component */ 38788);
/* harmony import */ var _pages_emergency_organization_grade_grade_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/emergency-organization/grade/grade.component */ 15990);
/* harmony import */ var _pages_emergency_organization_process_process_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/emergency-organization/process/process.component */ 4374);
/* harmony import */ var _pages_emergency_organization_office_office_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/emergency-organization/office/office.component */ 52958);
/* harmony import */ var _pages_emergency_organization_guarantee_agency_guarantee_agency_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/emergency-organization/guarantee-agency/guarantee-agency.component */ 34543);
/* harmony import */ var _pages_emergency_organization_command_agency_command_agency_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/emergency-organization/command-agency/command-agency.component */ 65871);
/* harmony import */ var _pages_emergency_organization_info_report_info_report_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/emergency-organization/info-report/info-report.component */ 45383);
/* harmony import */ var _pages_emergency_organization_supplies_supplies_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/emergency-organization/supplies/supplies.component */ 71069);
/* harmony import */ var _pages_emergency_organization_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/emergency-organization/contacts/contacts.component */ 51224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/core */ 2316);


















































const routes = [
    {
        path: 'pages/emergency-organization/contacts',
        component: _pages_emergency_organization_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_44__.ContactsComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-organization/supplies',
        component: _pages_emergency_organization_supplies_supplies_component__WEBPACK_IMPORTED_MODULE_43__.SuppliesComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-organization/info-report',
        component: _pages_emergency_organization_info_report_info_report_component__WEBPACK_IMPORTED_MODULE_42__.InfoReportComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-organization/command-agency',
        component: _pages_emergency_organization_command_agency_command_agency_component__WEBPACK_IMPORTED_MODULE_41__.CommandAgencyComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-organization/guarantee-agency',
        component: _pages_emergency_organization_guarantee_agency_guarantee_agency_component__WEBPACK_IMPORTED_MODULE_40__.GuaranteeAgencyComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-organization/office',
        component: _pages_emergency_organization_office_office_component__WEBPACK_IMPORTED_MODULE_39__.OfficeComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-organization/process',
        component: _pages_emergency_organization_process_process_component__WEBPACK_IMPORTED_MODULE_38__.ProcessComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-organization/grade',
        component: _pages_emergency_organization_grade_grade_component__WEBPACK_IMPORTED_MODULE_37__.GradeComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-organization/rescue',
        component: _pages_emergency_organization_rescue_rescue_component__WEBPACK_IMPORTED_MODULE_36__.RescueComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-diagram/experts',
        component: _pages_emergency_organization_experts_experts_component__WEBPACK_IMPORTED_MODULE_35__.ExpertsComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-organization/headquarters',
        component: _pages_emergency_organization_headquarters_headquarters_component__WEBPACK_IMPORTED_MODULE_34__.HeadquartersComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-organization/emergency-diagram',
        component: _pages_emergency_organization_emergency_diagram_emergency_diagram_component__WEBPACK_IMPORTED_MODULE_33__.EmergencyDiagramComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/person-info/emergency-person',
        component: _pages_person_info_emergency_person_emergency_person_component__WEBPACK_IMPORTED_MODULE_32__.EmergencyPersonComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/person-info/reservoir-manager',
        component: _pages_person_info_reservoir_manager_reservoir_manager_component__WEBPACK_IMPORTED_MODULE_31__.ReservoirManagerComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/basic-info/engineering-chart',
        component: _pages_basic_info_engineering_chart_engineering_chart_component__WEBPACK_IMPORTED_MODULE_30__.EngineeringChartComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/basic-info/project-properties',
        component: _pages_basic_info_project_properties_project_properties_component__WEBPACK_IMPORTED_MODULE_29__.ProjectPropertiesComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'basic-info/project-overview',
        component: _pages_basic_info_project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_28__.ProjectOverviewComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/basic-info/overview',
        component: _pages_basic_info_overview_overview_component__WEBPACK_IMPORTED_MODULE_27__.OverviewComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/form/emergency-org-form',
        component: _pages_forms_emergency_org_form_emergency_org_form_component__WEBPACK_IMPORTED_MODULE_26__.EmergencyOrgFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/emergency-manager-form',
        component: _pages_forms_emergency_manager_form_emergency_manager_form_component__WEBPACK_IMPORTED_MODULE_25__.EmergencyManagerFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/flood-resp-person',
        component: _pages_forms_flood_resp_person_flood_resp_person_component__WEBPACK_IMPORTED_MODULE_24__.FloodRespPersonComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/project-props-form',
        component: _pages_forms_project_props_form_project_props_form_component__WEBPACK_IMPORTED_MODULE_23__.ProjectPropsFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/reservoir-detail-form',
        component: _pages_forms_reservoir_detail_form_reservoir_detail_form_component__WEBPACK_IMPORTED_MODULE_22__.ReservoirDetailFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-organization-page',
        component: _pages_emergency_organization_page_emergency_organization_component__WEBPACK_IMPORTED_MODULE_21__.EmergencyOrganizationComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/person-info-page',
        component: _pages_person_info_page_person_info_page_component__WEBPACK_IMPORTED_MODULE_20__.PersonInfoPageComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/supplies-storage-form',
        component: _pages_forms_supplies_storage_form_supplies_storage_form_component__WEBPACK_IMPORTED_MODULE_19__.SuppliesStorageFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/settlement-form',
        component: _pages_forms_settlement_form_settlement_form_component__WEBPACK_IMPORTED_MODULE_18__.SettlementFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/reservoir-info-form',
        component: _pages_forms_reservoir_info_form_reservoir_info_form_component__WEBPACK_IMPORTED_MODULE_17__.ReservoirInfoFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/person-info-form',
        component: _pages_forms_person_info_form_person_info_form_component__WEBPACK_IMPORTED_MODULE_16__.PersonInfoFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/evacuation-info-form',
        component: _pages_forms_evacuation_info_form_evacuation_info_form_component__WEBPACK_IMPORTED_MODULE_15__.EvacuationInfoFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/duty-form',
        component: _pages_forms_duty_form_duty_form_component__WEBPACK_IMPORTED_MODULE_14__.DutyFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/downstream-village-form',
        component: _pages_forms_downstream_village_form_downstream_village_form_component__WEBPACK_IMPORTED_MODULE_13__.DownstreamVillageFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/authority-form',
        component: _pages_forms_authority_form_authority_form_component__WEBPACK_IMPORTED_MODULE_12__.AuthorityFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/atlas-form',
        component: _pages_forms_atlas_form_atlas_form_component__WEBPACK_IMPORTED_MODULE_11__.AtlasFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/forms/emergency-plan-form',
        component: _pages_forms_emergency_plan_form_emergency_plan_form_component__WEBPACK_IMPORTED_MODULE_10__.EmergencyPlanFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/critical-incident-analysis',
        component: _pages_critical_incident_analysis_critical_incident_analysis_component__WEBPACK_IMPORTED_MODULE_9__.CriticalIncidentAnalysisComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/monitoring-and-warning',
        component: _pages_monitoring_and_warning_monitoring_and_warning_component__WEBPACK_IMPORTED_MODULE_8__.MonitoringAndWarningComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-management-page',
        component: _pages_emergency_management_page_emergency_management_page_component__WEBPACK_IMPORTED_MODULE_7__.EmergencyManagementPageComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/basic-info-page',
        component: _pages_basic_info_page_basic_info_page_component__WEBPACK_IMPORTED_MODULE_6__.BasicInfoPageComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'pages/emergency-plan-home',
        component: _pages_emergency_plan_home_emergency_plan_home_component__WEBPACK_IMPORTED_MODULE_5__.EmergencyPlanHomeComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'tasks',
        component: _pages_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__.TasksComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'profile',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'home',
        component: _pages_emergency_plan_home_emergency_plan_home_component__WEBPACK_IMPORTED_MODULE_5__.EmergencyPlanHomeComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'login-form',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_0__.LoginFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'reset-password',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'create-account',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_0__.CreateAccountFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: 'change-password/:recoveryCode',
        component: _shared_components__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordFormComponent,
        canActivate: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵdefineInjector"]({ providers: [_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_46__.RouterModule.forRoot(routes, { useHash: true }), devextreme_angular__WEBPACK_IMPORTED_MODULE_47__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_48__.DxFormModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_49__.DxMapModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_50__.DxPieChartModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_51__.DxTooltipModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_52__.DxPopupModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_53__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_54__.DxDrawerModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_55__.DxMenuModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_56__.DxTreeViewModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_57__.DxTextAreaModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_58__.DxFileUploaderModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_59__.DxAccordionModule, _angular_common__WEBPACK_IMPORTED_MODULE_60__.CommonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_61__.DxProgressBarModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_62__.DxTextBoxModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_63__.DxResponsiveBoxModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_64__.DxSelectBoxModule], _angular_router__WEBPACK_IMPORTED_MODULE_46__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_45__["ɵɵsetNgModuleScope"](AppRoutingModule, { declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent, _pages_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__.TasksComponent, _pages_emergency_plan_home_emergency_plan_home_component__WEBPACK_IMPORTED_MODULE_5__.EmergencyPlanHomeComponent, _pages_basic_info_page_basic_info_page_component__WEBPACK_IMPORTED_MODULE_6__.BasicInfoPageComponent, _pages_emergency_management_page_emergency_management_page_component__WEBPACK_IMPORTED_MODULE_7__.EmergencyManagementPageComponent, _pages_monitoring_and_warning_monitoring_and_warning_component__WEBPACK_IMPORTED_MODULE_8__.MonitoringAndWarningComponent, _pages_critical_incident_analysis_critical_incident_analysis_component__WEBPACK_IMPORTED_MODULE_9__.CriticalIncidentAnalysisComponent, _pages_forms_emergency_plan_form_emergency_plan_form_component__WEBPACK_IMPORTED_MODULE_10__.EmergencyPlanFormComponent, _pages_forms_atlas_form_atlas_form_component__WEBPACK_IMPORTED_MODULE_11__.AtlasFormComponent, _pages_forms_authority_form_authority_form_component__WEBPACK_IMPORTED_MODULE_12__.AuthorityFormComponent, _pages_forms_downstream_village_form_downstream_village_form_component__WEBPACK_IMPORTED_MODULE_13__.DownstreamVillageFormComponent, _pages_forms_duty_form_duty_form_component__WEBPACK_IMPORTED_MODULE_14__.DutyFormComponent, _pages_forms_evacuation_info_form_evacuation_info_form_component__WEBPACK_IMPORTED_MODULE_15__.EvacuationInfoFormComponent, _pages_forms_person_info_form_person_info_form_component__WEBPACK_IMPORTED_MODULE_16__.PersonInfoFormComponent, _pages_forms_reservoir_info_form_reservoir_info_form_component__WEBPACK_IMPORTED_MODULE_17__.ReservoirInfoFormComponent, _pages_forms_settlement_form_settlement_form_component__WEBPACK_IMPORTED_MODULE_18__.SettlementFormComponent, _pages_forms_supplies_storage_form_supplies_storage_form_component__WEBPACK_IMPORTED_MODULE_19__.SuppliesStorageFormComponent, _pages_person_info_page_person_info_page_component__WEBPACK_IMPORTED_MODULE_20__.PersonInfoPageComponent, _pages_emergency_organization_page_emergency_organization_component__WEBPACK_IMPORTED_MODULE_21__.EmergencyOrganizationComponent, _pages_forms_reservoir_detail_form_reservoir_detail_form_component__WEBPACK_IMPORTED_MODULE_22__.ReservoirDetailFormComponent, _pages_forms_project_props_form_project_props_form_component__WEBPACK_IMPORTED_MODULE_23__.ProjectPropsFormComponent, _pages_forms_flood_resp_person_flood_resp_person_component__WEBPACK_IMPORTED_MODULE_24__.FloodRespPersonComponent, _pages_forms_emergency_manager_form_emergency_manager_form_component__WEBPACK_IMPORTED_MODULE_25__.EmergencyManagerFormComponent, _pages_forms_emergency_org_form_emergency_org_form_component__WEBPACK_IMPORTED_MODULE_26__.EmergencyOrgFormComponent, _pages_basic_info_overview_overview_component__WEBPACK_IMPORTED_MODULE_27__.OverviewComponent, _pages_basic_info_project_overview_project_overview_component__WEBPACK_IMPORTED_MODULE_28__.ProjectOverviewComponent, _pages_basic_info_project_properties_project_properties_component__WEBPACK_IMPORTED_MODULE_29__.ProjectPropertiesComponent, _pages_basic_info_engineering_chart_engineering_chart_component__WEBPACK_IMPORTED_MODULE_30__.EngineeringChartComponent, _pages_person_info_reservoir_manager_reservoir_manager_component__WEBPACK_IMPORTED_MODULE_31__.ReservoirManagerComponent, _pages_person_info_emergency_person_emergency_person_component__WEBPACK_IMPORTED_MODULE_32__.EmergencyPersonComponent, _pages_emergency_organization_emergency_diagram_emergency_diagram_component__WEBPACK_IMPORTED_MODULE_33__.EmergencyDiagramComponent, _pages_emergency_organization_headquarters_headquarters_component__WEBPACK_IMPORTED_MODULE_34__.HeadquartersComponent, _pages_emergency_organization_experts_experts_component__WEBPACK_IMPORTED_MODULE_35__.ExpertsComponent, _pages_emergency_organization_rescue_rescue_component__WEBPACK_IMPORTED_MODULE_36__.RescueComponent, _pages_emergency_organization_grade_grade_component__WEBPACK_IMPORTED_MODULE_37__.GradeComponent, _pages_emergency_organization_process_process_component__WEBPACK_IMPORTED_MODULE_38__.ProcessComponent, _pages_emergency_organization_office_office_component__WEBPACK_IMPORTED_MODULE_39__.OfficeComponent, _pages_emergency_organization_guarantee_agency_guarantee_agency_component__WEBPACK_IMPORTED_MODULE_40__.GuaranteeAgencyComponent, _pages_emergency_organization_command_agency_command_agency_component__WEBPACK_IMPORTED_MODULE_41__.CommandAgencyComponent, _pages_emergency_organization_info_report_info_report_component__WEBPACK_IMPORTED_MODULE_42__.InfoReportComponent, _pages_emergency_organization_supplies_supplies_component__WEBPACK_IMPORTED_MODULE_43__.SuppliesComponent, _pages_emergency_organization_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_44__.ContactsComponent], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_46__.RouterModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_47__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_48__.DxFormModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_49__.DxMapModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_50__.DxPieChartModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_51__.DxTooltipModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_52__.DxPopupModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_53__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_54__.DxDrawerModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_55__.DxMenuModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_56__.DxTreeViewModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_57__.DxTextAreaModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_58__.DxFileUploaderModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_59__.DxAccordionModule, _angular_common__WEBPACK_IMPORTED_MODULE_60__.CommonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_61__.DxProgressBarModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_62__.DxTextBoxModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_63__.DxResponsiveBoxModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_64__.DxSelectBoxModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_46__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var devextreme_localization_globalize_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devextreme/localization/globalize/number */ 62179);
/* harmony import */ var devextreme_localization_globalize_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/localization/globalize/date */ 67476);
/* harmony import */ var devextreme_localization_globalize_currency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/localization/globalize/currency */ 6782);
/* harmony import */ var devextreme_localization_globalize_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/localization/globalize/message */ 56712);
/* harmony import */ var globalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! globalize */ 89743);
/* harmony import */ var globalize__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(globalize__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var devextreme_localization_messages_zh_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme/localization/messages/zh.json */ 76015);
/* harmony import */ var devextreme_cldr_data_supplemental_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-cldr-data/supplemental.json */ 71709);
/* harmony import */ var devextreme_cldr_data_zh_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-cldr-data/zh.json */ 11279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services */ 17253);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _layouts_side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component */ 18478);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ 66526);
/* harmony import */ var _unauthenticated_content__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unauthenticated-content */ 51950);















function AppComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "app-side-nav-outer-toolbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("title", ctx_r0.appInfo.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"](" \u7248\u6743\u6240\u6709 \u00A9 2021-", ctx_r0.appInfo.currentYear, " ", ctx_r0.appInfo.title, "\n");
} }
function AppComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "app-unauthenticated-content");
} }
class AppComponent {
    constructor(authService, screen, appInfo) {
        this.authService = authService;
        this.screen = screen;
        this.appInfo = appInfo;
        globalize__WEBPACK_IMPORTED_MODULE_4___default().load(devextreme_cldr_data_supplemental_json__WEBPACK_IMPORTED_MODULE_5__, devextreme_cldr_data_zh_json__WEBPACK_IMPORTED_MODULE_6__);
        globalize__WEBPACK_IMPORTED_MODULE_4___default().loadMessages(devextreme_localization_messages_zh_json__WEBPACK_IMPORTED_MODULE_12__);
        globalize__WEBPACK_IMPORTED_MODULE_4___default().locale(navigator.language);
    }
    get getClass() {
        return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
    }
    isAuthenticated() {
        return this.authService.loggedIn;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_7__.ScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_7__.AppInfoService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostVars: 2, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx.getClass);
    } }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["unauthenticated", ""], [3, "title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 6, 3, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, AppComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.isAuthenticated())("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _layouts_side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_8__.SideNavOuterToolbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterOutlet, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent, _unauthenticated_content__WEBPACK_IMPORTED_MODULE_10__.UnauthenticatedContentComponent], styles: ["[_nghost-%COMP%] {\n  background-color: #f2f2f2;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQUYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBAaW1wb3J0IFwiLi4vdGhlbWVzL2dlbmVyYXRlZC92YXJpYWJsZXMuYmFzZS5zY3NzXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFzZS1iZywgNS4wMCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts */ 80205);
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components */ 7667);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services */ 17253);
/* harmony import */ var _unauthenticated_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unauthenticated-content */ 51950);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService, _shared_services__WEBPACK_IMPORTED_MODULE_3__.ScreenService, _shared_services__WEBPACK_IMPORTED_MODULE_3__.AppInfoService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _layouts__WEBPACK_IMPORTED_MODULE_1__.SideNavOuterToolbarModule,
            _layouts__WEBPACK_IMPORTED_MODULE_1__.SideNavInnerToolbarModule,
            _layouts__WEBPACK_IMPORTED_MODULE_1__.SingleCardModule,
            _shared_components__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
            _shared_components__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordFormModule,
            _shared_components__WEBPACK_IMPORTED_MODULE_2__.CreateAccountFormModule,
            _shared_components__WEBPACK_IMPORTED_MODULE_2__.ChangePasswordFormModule,
            _shared_components__WEBPACK_IMPORTED_MODULE_2__.LoginFormModule,
            _unauthenticated_content__WEBPACK_IMPORTED_MODULE_4__.UnauthenticatedContentModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _layouts__WEBPACK_IMPORTED_MODULE_1__.SideNavOuterToolbarModule,
        _layouts__WEBPACK_IMPORTED_MODULE_1__.SideNavInnerToolbarModule,
        _layouts__WEBPACK_IMPORTED_MODULE_1__.SingleCardModule,
        _shared_components__WEBPACK_IMPORTED_MODULE_2__.FooterModule,
        _shared_components__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordFormModule,
        _shared_components__WEBPACK_IMPORTED_MODULE_2__.CreateAccountFormModule,
        _shared_components__WEBPACK_IMPORTED_MODULE_2__.ChangePasswordFormModule,
        _shared_components__WEBPACK_IMPORTED_MODULE_2__.LoginFormModule,
        _unauthenticated_content__WEBPACK_IMPORTED_MODULE_4__.UnauthenticatedContentModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__.AppRoutingModule] }); })();


/***/ }),

/***/ 80205:
/*!**********************************!*\
  !*** ./src/app/layouts/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavOuterToolbarComponent": () => (/* reexport safe */ _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SideNavOuterToolbarComponent),
/* harmony export */   "SideNavOuterToolbarModule": () => (/* reexport safe */ _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__.SideNavOuterToolbarModule),
/* harmony export */   "SideNavInnerToolbarComponent": () => (/* reexport safe */ _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.SideNavInnerToolbarComponent),
/* harmony export */   "SideNavInnerToolbarModule": () => (/* reexport safe */ _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__.SideNavInnerToolbarModule),
/* harmony export */   "SingleCardComponent": () => (/* reexport safe */ _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__.SingleCardComponent),
/* harmony export */   "SingleCardModule": () => (/* reexport safe */ _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__.SingleCardModule)
/* harmony export */ });
/* harmony import */ var _side_nav_outer_toolbar_side_nav_outer_toolbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-nav-outer-toolbar/side-nav-outer-toolbar.component */ 18478);
/* harmony import */ var _side_nav_inner_toolbar_side_nav_inner_toolbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav-inner-toolbar/side-nav-inner-toolbar.component */ 18722);
/* harmony import */ var _single_card_single_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-card/single-card.component */ 36130);





/***/ }),

/***/ 18722:
/*!************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-inner-toolbar/side-nav-inner-toolbar.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavInnerToolbarComponent": () => (/* binding */ SideNavInnerToolbarComponent),
/* harmony export */   "SideNavInnerToolbarModule": () => (/* binding */ SideNavInnerToolbarModule)
/* harmony export */ });
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components */ 7667);
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/drawer */ 6632);
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ 6036);
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/ui/toolbar */ 12805);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services */ 17253);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/core */ 35523);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/header/header.component */ 36290);
/* harmony import */ var _shared_components_side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/side-navigation-menu/side-navigation-menu.component */ 30220);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);

















const _c0 = function (a2) { return { icon: "menu", stylingMode: "text", onClick: a2 }; };
function SideNavInnerToolbarComponent_app_side_navigation_menu_1_dxi_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "dxi-item", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](1, _c0, ctx_r2.toggleMenu));
} }
function SideNavInnerToolbarComponent_app_side_navigation_menu_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-side-navigation-menu", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedItemChanged", function SideNavInnerToolbarComponent_app_side_navigation_menu_1_Template_app_side_navigation_menu_selectedItemChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.navigationChanged($event); })("openMenu", function SideNavInnerToolbarComponent_app_side_navigation_menu_1_Template_app_side_navigation_menu_openMenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.navigationClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "dx-toolbar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SideNavInnerToolbarComponent_app_side_navigation_menu_1_dxi_item_2_Template, 1, 3, "dxi-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "dxi-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("compactMode", !ctx_r0.menuOpened)("selectedItem", ctx_r0.selectedRoute);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.minMenuSize !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("text", ctx_r0.title);
} }
const _c1 = ["*", [["app-footer"]]];
const _c2 = ["*", "app-footer"];
class SideNavInnerToolbarComponent {
    constructor(screen, router) {
        this.screen = screen;
        this.router = router;
        this.selectedRoute = '';
        this.temporaryMenuOpened = false;
        this.menuMode = 'shrink';
        this.menuRevealMode = 'expand';
        this.minMenuSize = 0;
        this.shaderEnabled = false;
        this.toggleMenu = (e) => {
            var _a;
            this.menuOpened = !this.menuOpened;
            (_a = e.event) === null || _a === void 0 ? void 0 : _a.stopPropagation();
        };
    }
    ngOnInit() {
        this.menuOpened = this.screen.sizes['screen-large'];
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                this.selectedRoute = val.urlAfterRedirects.split('?')[0];
            }
        });
        this.screen.changed.subscribe(() => this.updateDrawer());
        this.updateDrawer();
    }
    updateDrawer() {
        const isXSmall = this.screen.sizes['screen-x-small'];
        const isLarge = this.screen.sizes['screen-large'];
        this.menuMode = isLarge ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuSize = isXSmall ? 0 : 60;
        this.shaderEnabled = !isLarge;
    }
    get hideMenuAfterNavigation() {
        return this.menuMode === 'overlap' || this.temporaryMenuOpened;
    }
    get showMenuAfterClick() {
        return !this.menuOpened;
    }
    navigationChanged(event) {
        var _a;
        const path = event.itemData.path;
        const pointerEvent = event.event;
        if (path && this.menuOpened) {
            if ((_a = event.node) === null || _a === void 0 ? void 0 : _a.selected) {
                pointerEvent === null || pointerEvent === void 0 ? void 0 : pointerEvent.preventDefault();
            }
            else {
                this.router.navigate([path]);
                this.scrollView.instance.scrollTo(0);
            }
            if (this.hideMenuAfterNavigation) {
                this.temporaryMenuOpened = false;
                this.menuOpened = false;
                pointerEvent === null || pointerEvent === void 0 ? void 0 : pointerEvent.stopPropagation();
            }
        }
        else {
            pointerEvent === null || pointerEvent === void 0 ? void 0 : pointerEvent.preventDefault();
        }
    }
    navigationClick() {
        if (this.showMenuAfterClick) {
            this.temporaryMenuOpened = true;
            this.menuOpened = true;
        }
    }
}
SideNavInnerToolbarComponent.ɵfac = function SideNavInnerToolbarComponent_Factory(t) { return new (t || SideNavInnerToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__.ScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
SideNavInnerToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SideNavInnerToolbarComponent, selectors: [["app-side-nav-inner-toolbar"]], viewQuery: function SideNavInnerToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_6__.DxScrollViewComponent, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.scrollView = _t.first);
    } }, inputs: { title: "title" }, ngContentSelectors: _c2, decls: 9, vars: 8, consts: [["position", "before", 1, "drawer", 3, "closeOnOutsideClick", "openedStateMode", "revealMode", "minSize", "shading", "opened", "openedChange"], ["class", "dx-swatch-additional", 3, "compactMode", "selectedItem", "selectedItemChanged", "openMenu", 4, "dxTemplate", "dxTemplateOf"], [1, "container"], [3, "menuToggleEnabled", "menuToggle"], [1, "layout-body", "with-footer"], [1, "content"], [1, "content-block"], [1, "dx-swatch-additional", 3, "compactMode", "selectedItem", "selectedItemChanged", "openMenu"], ["id", "navigation-header"], ["location", "before", "cssClass", "menu-button", "widget", "dxButton", 3, "options", 4, "ngIf"], ["location", "before", "cssClass", "header-title", 3, "text"], ["location", "before", "cssClass", "menu-button", "widget", "dxButton", 3, "options"]], template: function SideNavInnerToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "dx-drawer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("openedChange", function SideNavInnerToolbarComponent_Template_dx_drawer_openedChange_0_listener($event) { return ctx.menuOpened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SideNavInnerToolbarComponent_app_side_navigation_menu_1_Template, 4, 4, "app-side-navigation-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "app-header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("menuToggle", function SideNavInnerToolbarComponent_Template_app_header_menuToggle_3_listener() { return ctx.menuOpened = !ctx.menuOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "dx-scroll-view", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("closeOnOutsideClick", ctx.shaderEnabled)("openedStateMode", ctx.menuMode)("revealMode", ctx.menuRevealMode)("minSize", ctx.minMenuSize)("shading", ctx.shaderEnabled)("opened", ctx.menuOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dxTemplateOf", "panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuToggleEnabled", ctx.minMenuSize === 0);
    } }, directives: [devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_7__.DxDrawerComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__.DxTemplateDirective, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_6__.DxScrollViewComponent, _shared_components_side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__.SideNavigationMenuComponent, devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_9__.DxToolbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_11__.DxiItemComponent], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  flex-direction: column;\n  display: flex;\n}\n\n.layout-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n#navigation-header[_ngcontent-%COMP%] {\n  background-color: #03a9f4;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n#navigation-header[_ngcontent-%COMP%]     .menu-button .dx-icon {\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.screen-x-small[_nghost-%COMP%]   #navigation-header[_ngcontent-%COMP%], .screen-x-small   [_nghost-%COMP%]   #navigation-header[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n\n.dx-theme-generic[_nghost-%COMP%]   #navigation-header[_ngcontent-%COMP%], .dx-theme-generic   [_nghost-%COMP%]   #navigation-header[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LWlubmVyLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFx0aGVtZXNcXGdlbmVyYXRlZFxcdmFyaWFibGVzLmFkZGl0aW9uYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFFRSx5QkNyQlk7RURzQlosd0VBQUE7QUFBRjs7QUFFRTtFQUNFLDBCQ3hCYztBRHdCbEI7O0FBR0U7RUFDRSxrQkFBQTtBQURKOztBQUlFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQUZKIiwiZmlsZSI6InNpZGUtbmF2LWlubmVyLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubGF5b3V0LWJvZHkge1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiAwO1xufVxuXG4uY29udGVudCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuI25hdmlnYXRpb24taGVhZGVyIHtcbiAgQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmFkZGl0aW9uYWwuc2Nzc1wiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1hY2NlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcblxuICA6Om5nLWRlZXAgLm1lbnUtYnV0dG9uIC5keC1pY29uIHtcbiAgICBjb2xvcjogJGJhc2UtdGV4dC1jb2xvcjtcbiAgfVxuXG4gIDpob3N0LWNvbnRleHQoLnNjcmVlbi14LXNtYWxsKSAmIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cbiAgICBcbiAgOmhvc3QtY29udGV4dCguZHgtdGhlbWUtZ2VuZXJpYykgJiB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbn1cbiIsIiRiYXNlLWFjY2VudDogIzAzYTlmNDtcbiRiYXNlLXRleHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4kYmFzZS1iZzogI2ZmZjtcbiRiYXNlLWJvcmRlci1jb2xvcjogI2UwZTBlMDtcbiRiYXNlLWJvcmRlci1yYWRpdXM6IDRweDtcbiJdfQ== */"] });
class SideNavInnerToolbarModule {
}
SideNavInnerToolbarModule.ɵfac = function SideNavInnerToolbarModule_Factory(t) { return new (t || SideNavInnerToolbarModule)(); };
SideNavInnerToolbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SideNavInnerToolbarModule });
SideNavInnerToolbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_shared_components__WEBPACK_IMPORTED_MODULE_0__.SideNavigationMenuModule, devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_7__.DxDrawerModule, _shared_components__WEBPACK_IMPORTED_MODULE_0__.HeaderModule, devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_9__.DxToolbarModule, devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_6__.DxScrollViewModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SideNavInnerToolbarModule, { declarations: [SideNavInnerToolbarComponent], imports: [_shared_components__WEBPACK_IMPORTED_MODULE_0__.SideNavigationMenuModule, devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_7__.DxDrawerModule, _shared_components__WEBPACK_IMPORTED_MODULE_0__.HeaderModule, devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_9__.DxToolbarModule, devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_6__.DxScrollViewModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule], exports: [SideNavInnerToolbarComponent] }); })();


/***/ }),

/***/ 18478:
/*!************************************************************************************!*\
  !*** ./src/app/layouts/side-nav-outer-toolbar/side-nav-outer-toolbar.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavOuterToolbarComponent": () => (/* binding */ SideNavOuterToolbarComponent),
/* harmony export */   "SideNavOuterToolbarModule": () => (/* binding */ SideNavOuterToolbarModule)
/* harmony export */ });
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components */ 7667);
/* harmony import */ var devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/drawer */ 6632);
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ 6036);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services */ 17253);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/header/header.component */ 36290);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/core */ 35523);
/* harmony import */ var _shared_components_side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/side-navigation-menu/side-navigation-menu.component */ 30220);













function SideNavOuterToolbarComponent_app_side_navigation_menu_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-side-navigation-menu", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedItemChanged", function SideNavOuterToolbarComponent_app_side_navigation_menu_2_Template_app_side_navigation_menu_selectedItemChanged_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.navigationChanged($event); })("openMenu", function SideNavOuterToolbarComponent_app_side_navigation_menu_2_Template_app_side_navigation_menu_openMenu_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.navigationClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("compactMode", !ctx_r0.menuOpened)("selectedItem", ctx_r0.selectedRoute);
} }
const _c0 = ["*", [["app-footer"]]];
const _c1 = ["*", "app-footer"];
class SideNavOuterToolbarComponent {
    constructor(screen, router) {
        this.screen = screen;
        this.router = router;
        this.selectedRoute = '';
        this.temporaryMenuOpened = false;
        this.menuMode = 'shrink';
        this.menuRevealMode = 'expand';
        this.minMenuSize = 0;
        this.shaderEnabled = false;
    }
    ngOnInit() {
        this.menuOpened = this.screen.sizes['screen-large'];
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd) {
                this.selectedRoute = val.urlAfterRedirects.split('?')[0];
            }
        });
        this.screen.changed.subscribe(() => this.updateDrawer());
        this.updateDrawer();
    }
    updateDrawer() {
        const isXSmall = this.screen.sizes['screen-x-small'];
        const isLarge = this.screen.sizes['screen-large'];
        this.menuMode = isLarge ? 'shrink' : 'overlap';
        this.menuRevealMode = isXSmall ? 'slide' : 'expand';
        this.minMenuSize = isXSmall ? 0 : 60;
        this.shaderEnabled = !isLarge;
    }
    get hideMenuAfterNavigation() {
        return this.menuMode === 'overlap' || this.temporaryMenuOpened;
    }
    get showMenuAfterClick() {
        return !this.menuOpened;
    }
    navigationChanged(event) {
        var _a;
        const path = event.itemData.path;
        const pointerEvent = event.event;
        if (path && this.menuOpened) {
            if ((_a = event.node) === null || _a === void 0 ? void 0 : _a.selected) {
                pointerEvent === null || pointerEvent === void 0 ? void 0 : pointerEvent.preventDefault();
            }
            else {
                this.router.navigate([path]);
                this.scrollView.instance.scrollTo(0);
            }
            if (this.hideMenuAfterNavigation) {
                this.temporaryMenuOpened = false;
                this.menuOpened = false;
                pointerEvent === null || pointerEvent === void 0 ? void 0 : pointerEvent.stopPropagation();
            }
        }
        else {
            pointerEvent === null || pointerEvent === void 0 ? void 0 : pointerEvent.preventDefault();
        }
    }
    navigationClick() {
        if (this.showMenuAfterClick) {
            this.temporaryMenuOpened = true;
            this.menuOpened = true;
        }
    }
}
SideNavOuterToolbarComponent.ɵfac = function SideNavOuterToolbarComponent_Factory(t) { return new (t || SideNavOuterToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__.ScreenService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
SideNavOuterToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SideNavOuterToolbarComponent, selectors: [["app-side-nav-outer-toolbar"]], viewQuery: function SideNavOuterToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_6__.DxScrollViewComponent, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.scrollView = _t.first);
    } }, inputs: { title: "title" }, ngContentSelectors: _c1, decls: 8, vars: 9, consts: [[1, "layout-header", 3, "menuToggleEnabled", "title", "menuToggle"], ["position", "before", 1, "layout-body", 3, "closeOnOutsideClick", "openedStateMode", "revealMode", "minSize", "shading", "opened", "openedChange"], ["class", "dx-swatch-additional", 3, "compactMode", "selectedItem", "selectedItemChanged", "openMenu", 4, "dxTemplate", "dxTemplateOf"], [1, "with-footer"], [1, "content"], [1, "content-block"], [1, "dx-swatch-additional", 3, "compactMode", "selectedItem", "selectedItemChanged", "openMenu"]], template: function SideNavOuterToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("menuToggle", function SideNavOuterToolbarComponent_Template_app_header_menuToggle_0_listener() { return ctx.menuOpened = !ctx.menuOpened; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "dx-drawer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("openedChange", function SideNavOuterToolbarComponent_Template_dx_drawer_openedChange_1_listener($event) { return ctx.menuOpened = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SideNavOuterToolbarComponent_app_side_navigation_menu_2_Template, 1, 2, "app-side-navigation-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "dx-scroll-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](7, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menuToggleEnabled", true)("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("closeOnOutsideClick", ctx.shaderEnabled)("openedStateMode", ctx.menuMode)("revealMode", ctx.menuRevealMode)("minSize", ctx.minMenuSize)("shading", ctx.shaderEnabled)("opened", ctx.menuOpened);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dxTemplateOf", "panel");
    } }, directives: [_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_7__.DxDrawerComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_8__.DxTemplateDirective, devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_6__.DxScrollViewComponent, _shared_components_side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_3__.SideNavigationMenuComponent], styles: ["[_nghost-%COMP%] {\n  flex-direction: column;\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n\n.layout-header[_ngcontent-%COMP%] {\n  z-index: 1501;\n}\n\n.layout-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbmF2LW91dGVyLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJzaWRlLW5hdi1vdXRlci10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGF5b3V0LWhlYWRlciB7XG4gIHotaW5kZXg6IDE1MDE7XG59XG5cbi5sYXlvdXQtYm9keSB7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xufVxuIl19 */"] });
class SideNavOuterToolbarModule {
}
SideNavOuterToolbarModule.ɵfac = function SideNavOuterToolbarModule_Factory(t) { return new (t || SideNavOuterToolbarModule)(); };
SideNavOuterToolbarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: SideNavOuterToolbarModule });
SideNavOuterToolbarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_shared_components__WEBPACK_IMPORTED_MODULE_0__.SideNavigationMenuModule, devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_7__.DxDrawerModule, _shared_components__WEBPACK_IMPORTED_MODULE_0__.HeaderModule, devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_6__.DxScrollViewModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SideNavOuterToolbarModule, { declarations: [SideNavOuterToolbarComponent], imports: [_shared_components__WEBPACK_IMPORTED_MODULE_0__.SideNavigationMenuModule, devextreme_angular_ui_drawer__WEBPACK_IMPORTED_MODULE_7__.DxDrawerModule, _shared_components__WEBPACK_IMPORTED_MODULE_0__.HeaderModule, devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_6__.DxScrollViewModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule], exports: [SideNavOuterToolbarComponent] }); })();


/***/ }),

/***/ 36130:
/*!**************************************************************!*\
  !*** ./src/app/layouts/single-card/single-card.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleCardComponent": () => (/* binding */ SingleCardComponent),
/* harmony export */   "SingleCardModule": () => (/* binding */ SingleCardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular/ui/scroll-view */ 6036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);




const _c0 = ["*"];
class SingleCardComponent {
    constructor() { }
}
SingleCardComponent.ɵfac = function SingleCardComponent_Factory(t) { return new (t || SingleCardComponent)(); };
SingleCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleCardComponent, selectors: [["app-single-card"]], inputs: { title: "title", description: "description" }, ngContentSelectors: _c0, decls: 8, vars: 2, consts: [["height", "100%", "width", "100%", 1, "with-footer", "single-card"], [1, "dx-card", "content"], [1, "header"], [1, "title"], [1, "description"]], template: function SingleCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dx-scroll-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, directives: [devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_1__.DxScrollViewComponent], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.single-card[_ngcontent-%COMP%]   .dx-card[_ngcontent-%COMP%] {\n  width: 330px;\n  margin: auto auto;\n  padding: 40px;\n  flex-grow: 0;\n}\n\n.screen-x-small[_nghost-%COMP%]   .single-card[_ngcontent-%COMP%]   .dx-card[_ngcontent-%COMP%], .screen-x-small   [_nghost-%COMP%]   .single-card[_ngcontent-%COMP%]   .dx-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n  box-shadow: none;\n  margin: 0;\n  border: 0;\n  flex-grow: 1;\n}\n\n.single-card[_ngcontent-%COMP%]   .dx-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.single-card[_ngcontent-%COMP%]   .dx-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.87);\n  line-height: 28px;\n  font-weight: 500;\n  font-size: 24px;\n}\n\n.single-card[_ngcontent-%COMP%]   .dx-card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.609);\n  line-height: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcdGhlbWVzXFxnZW5lcmF0ZWRcXHZhcmlhYmxlcy5iYXNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUtFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFGSjs7QUFJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUZOOztBQUtJO0VBQ0UsbUJBQUE7QUFITjs7QUFLTTtFQUNFLDBCQzNCVTtFRDRCVixpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhSOztBQU1NO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtBQUpSIiwiZmlsZSI6InNpbmdsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaW5nbGUtY2FyZCB7XG4gIC5keC1jYXJkIHtcbiAgICB3aWR0aDogMzMwcHg7XG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XG4gICAgcGFkZGluZzogNDBweDtcbiAgICBmbGV4LWdyb3c6IDA7XG5cbiAgICA6aG9zdC1jb250ZXh0KC5zY3JlZW4teC1zbWFsbCkgJiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgIH1cblxuICAgIC5oZWFkZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgY29sb3I6ICRiYXNlLXRleHQtY29sb3I7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRiYXNlLXRleHQtY29sb3IsIGFscGhhKCRiYXNlLXRleHQtY29sb3IpICogMC43KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkYmFzZS1hY2NlbnQ6ICMwM2E5ZjQ7XG4kYmFzZS10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuJGJhc2UtYmc6ICNmZmY7XG4kYmFzZS1ib3JkZXItY29sb3I6ICNlMGUwZTA7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4iXX0= */"] });
class SingleCardModule {
}
SingleCardModule.ɵfac = function SingleCardModule_Factory(t) { return new (t || SingleCardModule)(); };
SingleCardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SingleCardModule });
SingleCardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_1__.DxScrollViewModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SingleCardModule, { declarations: [SingleCardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, devextreme_angular_ui_scroll_view__WEBPACK_IMPORTED_MODULE_1__.DxScrollViewModule], exports: [SingleCardComponent] }); })();


/***/ }),

/***/ 12486:
/*!********************************************************************!*\
  !*** ./src/app/pages/basic-info-page/basic-info-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasicInfoPageComponent": () => (/* binding */ BasicInfoPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/reservoir-detail */ 30006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services */ 17253);
/* harmony import */ var _shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/reservoir-info.service */ 92484);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ 70079);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/tree-view */ 35166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);









function BasicInfoPageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u6D41\u57DF\u6982\u51B5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.reservoirDetails.infonature || ctx_r0.basinOverview);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.reservoirDetails.infonatureimagepath.fileurl || ctx_r0.basinOverviewImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function BasicInfoPageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u5DE5\u7A0B\u6982\u51B5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.reservoirDetails.infoproject || ctx_r1.projectOverview);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r1.reservoirDetails.infoprojectimagepath.fileurl || ctx_r1.projectOverviewImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function BasicInfoPageComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u5DE5\u7A0B\u7279\u6027\u8868");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "dx-data-grid", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxi-column", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "dxi-column", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "dxi-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r2.projectProperties)("showBorders", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("groupIndex", 0);
} }
function BasicInfoPageComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\u5927\u575D\u65AD\u9762\u56FE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u5DE5\u7A0B\u5730\u8D28\u56FE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.reservoirDetails.infosectionimagepath.fileurl || ctx_r3.damSectionImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.reservoirDetails.infogeoimagepath.fileurl || ctx_r3.geologicalImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
class BasicInfoPageComponent {
    constructor(http, authService, reservoirInfoService) {
        this.http = http;
        this.authService = authService;
        this.reservoirInfoService = reservoirInfoService;
        this.authService.getUser().then((e) => {
            var _a, _b;
            this.user = e.data;
            this.headers = {
                Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
            };
            this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
            reservoirInfoService.getReservoir(this.reservoir).then((e) => {
                this.currentReservoir = e;
            });
            reservoirInfoService.getReservoirDetails().then((e) => {
                this.reservoirDetails = e;
            });
            reservoirInfoService.getProjectProps().then((e) => {
                this.projectProperties = e;
            });
        });
        this.reservoirDetails = new _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_0__.ReservoirDetail();
        this.infos = BasicInfoPageComponent.getInfos();
        this.basinOverview = BasicInfoPageComponent.getBasinOverview();
        this.basinOverviewImage = BasicInfoPageComponent.getBasinOverviewImage();
        this.projectOverviewImage = BasicInfoPageComponent.getProjectOverviewImage();
        this.IsBasinOverView = true;
        this.IsProjectOverview = true;
        this.IsProjectProperties = true;
        this.IsEngineeringChart = true;
        this.setAllFalse();
        this.IsBasinOverView = true;
    }
    ngOnInit() {
    }
    selectItem($event) {
        this.currentItem = $event.itemData;
        if (this.currentItem.value === "BasinOverView") {
            this.setAllFalse();
            this.IsBasinOverView = true;
        }
        else if (this.currentItem.value === "ProjectOverview") {
            this.setAllFalse();
            this.IsProjectOverview = true;
        }
        else if (this.currentItem.value === "ProjectProperties") {
            this.setAllFalse();
            this.IsProjectProperties = true;
        }
        else if (this.currentItem.value === "EngineeringChart") {
            this.setAllFalse();
            this.IsEngineeringChart = true;
        }
    }
    setAllFalse() {
        this.IsBasinOverView = false;
        this.IsProjectOverview = false;
        this.IsProjectProperties = false;
        this.IsEngineeringChart = false;
    }
    static getInfos() {
        let infos = [{
                id: "1",
                text: "工程平面图",
                value: "BasinOverView",
            }, {
                id: "2",
                text: "主要建筑物",
                value: "ProjectOverview",
            }, {
                id: "3",
                text: "工程特性表",
                value: "ProjectProperties",
            }, {
                id: "4",
                text: "工程图表",
                value: "EngineeringChart",
            }];
        return infos;
    }
    static getBasinOverview() {
        return "突泉县双城水库位于嫩江流域洮儿河一级支流蛟流河上，突泉县宝石镇双城屯北2.5公里处，地理位置处于东经121°12′22.9\"，北纬45°48′45.3\"，距离县城所在地75公里。所在流域为嫩江流域，坝址以上控制流域面积910平方公里，坝址以上河长47.2km，河谷宽约1.2km，河道平均比降6.6‰。\n" +
            "双城水库是一座以防洪为主，兼顾水产养殖、灌溉、旅游等综合效益的中型水库。双城水库承担着下游“三镇两乡一农场”防洪的重要任务，共保护下游21万人口、32万亩耕地及省际通道、乌突公路等设施，并为下游突泉镇供水工程提供可靠的水源保障。" +
            "水库控制灌溉面积12万亩，其中水田3万亩，作物以水稻为主，旱田9万亩，主要作物为玉米、大豆。双城水库利用水库的水资源发展水产养殖业，历年效益很大，水库除险加固后，可有效增加水产养殖水城面积，使水库的水产养殖业稳定发展。";
    }
    static getBasinOverviewImage() {
        return "http://localhost:6060/api/files/OverviewImage.png";
    }
    static getProjectOverviewImage() {
        return "http://localhost:6060/api/files/ProjectOverviewImage.png";
    }
}
BasicInfoPageComponent.ɵfac = function BasicInfoPageComponent_Factory(t) { return new (t || BasicInfoPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_2__.ReservoirInfoService)); };
BasicInfoPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BasicInfoPageComponent, selectors: [["app-basic-info-page"]], decls: 15, vars: 12, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], ["singleColumnScreen", "xs sm"], [3, "ratio"], [3, "row", "col"], ["id", "treeview", 3, "items", "onItemClick"], ["class", "widget-container", "id", "basinOverview", 4, "ngIf"], ["class", "widget-container", "id", "projectOverview", 4, "ngIf"], ["class", "widget-container", "id", "projectProperties", 4, "ngIf"], ["class", "widget-container", "id", "engineeringChart", 4, "ngIf"], ["id", "basinOverview", 1, "widget-container"], [1, "title"], ["alt", "basinOverviewImage", 3, "src"], ["id", "projectOverview", 1, "widget-container"], ["alt", "projectOverviewImage", 3, "src"], ["id", "projectProperties", 1, "widget-container"], [3, "dataSource", "showBorders"], ["dataField", "location", "caption", "\u90E8\u4F4D", 3, "groupIndex"], ["dataField", "propname", "caption", "\u7279\u6027\u540D"], ["dataField", "propvalue", "caption", "\u7279\u6027\u503C"], ["id", "engineeringChart", 1, "widget-container"], ["alt", "damSection", 3, "src"], ["alt", "geological", 3, "src"]], template: function BasicInfoPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "dx-responsive-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxi-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxi-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "dxi-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "dxi-location", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "dx-tree-view", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onItemClick", function BasicInfoPageComponent_Template_dx_tree_view_onItemClick_8_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "dxi-location", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, BasicInfoPageComponent_div_11_Template, 6, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BasicInfoPageComponent_div_12_Template, 6, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, BasicInfoPageComponent_div_13_Template, 7, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, BasicInfoPageComponent_div_14_Template, 7, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("row", 0)("col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.infos);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("row", 0)("col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.IsBasinOverView);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.IsProjectOverview);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.IsProjectProperties);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.IsEngineeringChart);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_5__.DxResponsiveBoxComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiRowComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiColComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiItemComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiLocationComponent, devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_7__.DxTreeViewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiColumnComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy1pbmZvLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 73880:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/basic-info/engineering-chart/engineering-chart.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EngineeringChartComponent": () => (/* binding */ EngineeringChartComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models/reservoir-detail */ 30006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/reservoir-info.service */ 92484);



class EngineeringChartComponent {
    constructor(reservoirInfoService) {
        this.reservoirInfoService = reservoirInfoService;
        this.reservoirDetails = new _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_0__.ReservoirDetail();
        reservoirInfoService.getReservoirDetails().then((e) => {
            this.reservoirDetails = e;
        });
    }
    ngOnInit() {
    }
}
EngineeringChartComponent.ɵfac = function EngineeringChartComponent_Factory(t) { return new (t || EngineeringChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_1__.ReservoirInfoService)); };
EngineeringChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EngineeringChartComponent, selectors: [["app-engineering-chart"]], decls: 9, vars: 2, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "custom-container"], [1, "title"], ["alt", "damSection", 3, "src"], ["alt", "geological", 3, "src"]], template: function EngineeringChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u5927\u575D\u65AD\u9762\u56FE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u5DE5\u7A0B\u5730\u8D28\u56FE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.reservoirDetails.infosectionimagepath.fileurl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.reservoirDetails.infogeoimagepath.fileurl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbmdpbmVlcmluZy1jaGFydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 74007:
/*!*****************************************************************!*\
  !*** ./src/app/pages/basic-info/overview/overview.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OverviewComponent": () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models/reservoir-detail */ 30006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/reservoir-info.service */ 92484);



class OverviewComponent {
    constructor(reservoirInfoService) {
        this.reservoirInfoService = reservoirInfoService;
        this.reservoirDetails = new _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_0__.ReservoirDetail();
        reservoirInfoService.getReservoirDetails().then((e) => {
            this.reservoirDetails = e;
        });
    }
    ngOnInit() {
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_1__.ReservoirInfoService)); };
OverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["app-overview"]], decls: 6, vars: 2, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "custom-container"], ["alt", "basinOverviewImage", 3, "src"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.reservoirDetails.infonature);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.reservoirDetails.infonatureimagepath.fileurl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 63223:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/basic-info/project-overview/project-overview.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectOverviewComponent": () => (/* binding */ ProjectOverviewComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models/reservoir-detail */ 30006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/reservoir-info.service */ 92484);



class ProjectOverviewComponent {
    constructor(reservoirInfoService) {
        this.reservoirInfoService = reservoirInfoService;
        reservoirInfoService.getReservoirDetails().then((e) => {
            this.reservoirDetails = e;
        });
        this.reservoirDetails = new _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_0__.ReservoirDetail();
    }
    ngOnInit() {
    }
}
ProjectOverviewComponent.ɵfac = function ProjectOverviewComponent_Factory(t) { return new (t || ProjectOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_1__.ReservoirInfoService)); };
ProjectOverviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProjectOverviewComponent, selectors: [["app-project-overview"]], decls: 6, vars: 2, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "custom-container"], ["alt", "projectOverviewImage", 3, "src"]], template: function ProjectOverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.reservoirDetails.infoproject);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.reservoirDetails.infoprojectimagepath.fileurl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LW92ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 94976:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/basic-info/project-properties/project-properties.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectPropertiesComponent": () => (/* binding */ ProjectPropertiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/reservoir-info.service */ 92484);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);




class ProjectPropertiesComponent {
    constructor(reservoirInfoService) {
        this.reservoirInfoService = reservoirInfoService;
        reservoirInfoService.getProjectProps().then((e) => {
            this.projectProperties = e;
        });
    }
    ngOnInit() {
    }
}
ProjectPropertiesComponent.ɵfac = function ProjectPropertiesComponent_Factory(t) { return new (t || ProjectPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_0__.ReservoirInfoService)); };
ProjectPropertiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProjectPropertiesComponent, selectors: [["app-project-properties"]], decls: 7, vars: 3, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "custom-container"], [3, "dataSource", "showBorders"], ["dataField", "location", "caption", "\u90E8\u4F4D", 3, "groupIndex"], ["dataField", "propname", "caption", "\u7279\u6027\u540D"], ["dataField", "propvalue", "caption", "\u7279\u6027\u503C"]], template: function ProjectPropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dx-data-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "dxi-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "dxi-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dxi-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.projectProperties)("showBorders", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("groupIndex", 0);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxiColumnComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LXByb3BlcnRpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3444:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/critical-incident-analysis/critical-incident-analysis.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriticalIncidentAnalysisComponent": () => (/* binding */ CriticalIncidentAnalysisComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular/ui/tree-view */ 35166);


class CriticalIncidentAnalysisComponent {
    constructor() {
        this.infos = this.getInfos();
    }
    ngOnInit() {
    }
    selectItem($event) {
    }
    getInfos() {
        let infos = [{
                id: "1",
                text: "洪水突发事件",
                expanded: false,
                items: [{
                        id: "1_1",
                        text: "遭遇10年一遇洪水"
                    }, {
                        id: "1_2",
                        text: "遭遇100年一遇洪水"
                    }, {
                        id: "1_3",
                        text: "遭遇1000年一遇洪水"
                    }, {
                        id: "1_4",
                        text: "遭遇5000年一遇洪水"
                    }, {
                        id: "1_5",
                        text: "漫顶溃坝"
                    }]
            }, {
                id: "2",
                text: "突发工程事件",
                expanded: false,
                items: [{
                        id: "2_1",
                        text: "管涌溃坝"
                    }, {
                        id: "2_2",
                        text: "闸门故障"
                    }, {
                        id: "2_3",
                        text: "渗漏破坏"
                    }]
            }, {
                id: "3",
                text: "水污染突发事件",
                expanded: false
            }, {
                id: "4",
                text: "其他突发事件",
                expanded: false
            }, {
                id: "5",
                text: "应急转移方案",
                expanded: false,
                items: [{
                        id: "5_1",
                        text: "责任人"
                    }, {
                        id: "5_2",
                        text: "信息上报"
                    }]
            }];
        return infos;
    }
}
CriticalIncidentAnalysisComponent.ɵfac = function CriticalIncidentAnalysisComponent_Factory(t) { return new (t || CriticalIncidentAnalysisComponent)(); };
CriticalIncidentAnalysisComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CriticalIncidentAnalysisComponent, selectors: [["app-critical-incident-analysis"]], decls: 5, vars: 2, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "form"], ["id", "treeview", 3, "items", "width", "onItemClick"], ["id", "details"]], template: function CriticalIncidentAnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "dx-tree-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemClick", function CriticalIncidentAnalysisComponent_Template_dx_tree_view_onItemClick_3_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.infos)("width", 300);
    } }, directives: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__.DxTreeViewComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcml0aWNhbC1pbmNpZGVudC1hbmFseXNpcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 52601:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/emergency-management-page/emergency-management-page.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyManagementPageComponent": () => (/* binding */ EmergencyManagementPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular/ui/tree-view */ 35166);


class EmergencyManagementPageComponent {
    constructor() {
        this.infos = this.getInfos();
    }
    ngOnInit() {
    }
    selectItem($event) {
    }
    getInfos() {
        let infos = [{
                id: "0",
                text: "应急组织体系图"
            }, {
                id: "1",
                text: "应急相关单位",
                expanded: false,
                items: [{
                        id: "1_1",
                        text: "办公室"
                    }, {
                        id: "1_2",
                        text: "指挥机构"
                    }, {
                        id: "1_3",
                        text: "保障机构"
                    }, {
                        id: "1_4",
                        text: "专家组"
                    }, {
                        id: "1_5",
                        text: "抢险与救援"
                    }]
            }, {
                id: "2",
                text: "应急响应",
                expanded: false,
                items: [{
                        id: "2_1",
                        text: "响应流程"
                    }, {
                        id: "2_2",
                        text: "分级上报"
                    }, {
                        id: "2_3",
                        text: "信息记录"
                    }]
            }, {
                id: "3",
                text: "应急保障",
                expanded: false,
                items: [{
                        id: "3_1",
                        text: "物资"
                    }]
            }];
        return infos;
    }
}
EmergencyManagementPageComponent.ɵfac = function EmergencyManagementPageComponent_Factory(t) { return new (t || EmergencyManagementPageComponent)(); };
EmergencyManagementPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmergencyManagementPageComponent, selectors: [["app-emergency-management-page"]], decls: 5, vars: 2, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "form"], ["id", "treeview", 3, "items", "width", "onItemClick"], ["id", "details"]], template: function EmergencyManagementPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "dx-tree-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemClick", function EmergencyManagementPageComponent_Template_dx_tree_view_onItemClick_3_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.infos)("width", 300);
    } }, directives: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__.DxTreeViewComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWVyZ2VuY3ktbWFuYWdlbWVudC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 72945:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/emergency-organization-page/emergency-organization.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyOrganizationComponent": () => (/* binding */ EmergencyOrganizationComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_emergency_organization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/emergency-organization */ 48780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services */ 17253);
/* harmony import */ var _shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/emergency-org.service */ 30551);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ 70079);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/tree-view */ 35166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular/ui/button */ 4706);










function EmergencyOrganizationComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r0.emergencyOrg.emergencyorgimagepath.fileurl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function EmergencyOrganizationComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dx-data-grid", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxo-paging", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxi-column", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "dxi-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "dxi-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "dxi-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "dxi-column", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "dxi-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r1.headquartersData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("enabled", false);
} }
function EmergencyOrganizationComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dx-data-grid", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxo-paging", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxi-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "dxi-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "dxi-column", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "dxi-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "dxi-column", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "dxi-column", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "dxi-column", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r2.expertsData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("enabled", false);
} }
function EmergencyOrganizationComponent_div_14_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dx-data-grid", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "dxi-column", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxo-lookup", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxi-column", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r8.floodInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r8.villages);
} }
function EmergencyOrganizationComponent_div_14_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dx-data-grid", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "dxi-column", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxo-lookup", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxi-column", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r9.floodInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r9.villages);
} }
function EmergencyOrganizationComponent_div_14_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dx-data-grid", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "dxi-column", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxi-column", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxi-column", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r10.exitRoadData);
} }
function EmergencyOrganizationComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dx-responsive-box");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "dxi-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxi-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxi-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "dxi-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "dxi-location", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "dx-responsive-box", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "dxi-row", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "dxi-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "dxi-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "dxi-col", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "dxi-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "dxi-location", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "dx-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function EmergencyOrganizationComponent_div_14_Template_dx_button_onClick_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.btnClick(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "dxi-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "dxi-location", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "dx-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function EmergencyOrganizationComponent_div_14_Template_dx_button_onClick_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.btnClick(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "dxi-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "dxi-location", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "dx-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function EmergencyOrganizationComponent_div_14_Template_dx_button_onClick_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r14.btnClick(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, EmergencyOrganizationComponent_div_14_div_23_Template, 5, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, EmergencyOrganizationComponent_div_14_div_24_Template, 5, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, EmergencyOrganizationComponent_div_14_div_25_Template, 5, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "dxi-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "dxi-location", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("row", 0)("col", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("row", 0)("col", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r3.floodWaterDepthBtnType)("width", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("row", 0)("col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r3.arrivedTimeBtnType)("width", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("row", 0)("col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r3.exitRoadBtnType)("width", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.IsFloodWaterDepth);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.IsArrivedTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.IsExitRoadMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("row", 0)("col", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.subtitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.figurePath, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function EmergencyOrganizationComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r4.emergencyGrade, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function EmergencyOrganizationComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r5.emergencyOrg.emergencyprocessimagepath.fileurl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
class EmergencyOrganizationComponent {
    constructor(http, authService, emergencyOrgService) {
        this.http = http;
        this.authService = authService;
        this.emergencyOrgService = emergencyOrgService;
        this.authService.getUser().then((e) => {
            var _a, _b;
            this.user = e.data;
            this.headers = {
                Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
            };
            this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
            emergencyOrgService.getEmergencyOrg().then((e) => {
                this.emergencyOrg = e;
            });
            emergencyOrgService.getHeadquarters().then((e) => {
                this.headquartersData = e;
            });
            emergencyOrgService.getExperts().then((e) => {
                this.expertsData = e;
            });
            emergencyOrgService.getFloodInfo().then((e) => {
                this.floodInfo = e;
            });
            emergencyOrgService.getVillage().then((e) => {
                this.villages = e;
            });
            emergencyOrgService.getExitRoad().then((e) => {
                this.exitRoadData = e;
            });
        });
        this.setAllFalse();
        this.treeInfo = EmergencyOrganizationComponent.getInfo();
        this.emergencyOrg = new _shared_models_emergency_organization__WEBPACK_IMPORTED_MODULE_0__.EmergencyOrganization();
        this.IsEmergencyDiagram = true;
        this.IsFloodWaterDepth = true;
        this.subtitle = "";
        // this.floodWaterDepthBtnType = "default";
        // this.arrivedTimeBtnType = "success";
        // this.exitRoadBtnType = "danger";
    }
    ngOnInit() {
    }
    selectItem($event) {
        this.currentItem = $event.itemData;
        if (this.currentItem.value === "Headquarters") {
            this.setAllFalse();
            this.IsHeadquarters = true;
        }
        else if (this.currentItem.value === "EmergencyDiagram") {
            this.setAllFalse();
            this.IsEmergencyDiagram = true;
        }
        else if (this.currentItem.value === "ExpertsGroup") {
            this.setAllFalse();
            this.IsExpertsGroup = true;
        }
        else if (this.currentItem.value === "EmergencyRescue") {
            this.setAllFalse();
            this.IsEmergencyRescue = true;
        }
        else if (this.currentItem.value === "EmergencyGrade") {
            this.setAllFalse();
            this.IsEmergencyGrade = true;
        }
        else if (this.currentItem.value === "EmergencyProcess") {
            this.setAllFalse();
            this.IsEmergencyProcess = true;
        }
    }
    setAllFalse() {
        this.IsHeadquarters = false;
        this.IsEmergencyDiagram = false;
        this.IsExpertsGroup = false;
        this.IsEmergencyRescue = false;
        this.IsEmergencyGrade = false;
        this.IsEmergencyProcess = false;
    }
    static getInfo() {
        let infos = [{
                id: "1",
                text: "应急组织框图",
                value: "EmergencyDiagram",
            }, {
                id: "2",
                text: "指挥部",
                value: "Headquarters",
            }, {
                id: "3",
                text: "专家组",
                value: "ExpertsGroup",
            }, {
                id: "4",
                text: "抢险与救援",
                value: "EmergencyRescue",
            }, {
                id: "5",
                text: "应急响应分级表",
                value: "EmergencyGrade",
            }, {
                id: "6",
                text: "应急流程",
                value: "EmergencyProcess",
            },];
        return infos;
    }
    btnClick(btnIdx) {
        // 1-淹没水深
        // 2-到达时间
        // 3-撤离路线
        if (0 == btnIdx) {
            this.floodWaterDepthBtnType = "default";
            this.arrivedTimeBtnType = "normal";
            this.exitRoadBtnType = "normal";
            this.IsFloodWaterDepth = true;
            this.IsArrivedTime = false;
            this.IsExitRoadMap = false;
            this.figurePath = this.emergencyOrg.floodwaterdepthimagepath.fileurl;
        }
        else if (1 == btnIdx) {
            this.floodWaterDepthBtnType = "normal";
            this.arrivedTimeBtnType = "default";
            this.exitRoadBtnType = "normal";
            this.IsFloodWaterDepth = false;
            this.IsArrivedTime = true;
            this.IsExitRoadMap = false;
            this.figurePath = this.emergencyOrg.arrivedtimeimagepath.fileurl;
        }
        else if (2 == btnIdx) {
            this.floodWaterDepthBtnType = "normal";
            this.arrivedTimeBtnType = "normal";
            this.exitRoadBtnType = "default";
            this.IsFloodWaterDepth = false;
            this.IsArrivedTime = false;
            this.IsExitRoadMap = true;
            this.figurePath = this.emergencyOrg.evacuationimagepath.fileurl;
        }
    }
}
EmergencyOrganizationComponent.ɵfac = function EmergencyOrganizationComponent_Factory(t) { return new (t || EmergencyOrganizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_2__.EmergencyOrgService)); };
EmergencyOrganizationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EmergencyOrganizationComponent, selectors: [["app-emergency-organization"]], decls: 17, vars: 14, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], ["singleColumnScreen", "xs sm"], [3, "ratio"], [3, "row", "col"], ["id", "treeview", 3, "items", "onItemClick"], ["class", "dx-card responsive-paddings", "id", "reservoirManager", 4, "ngIf"], ["class", "dx-card responsive-paddings", "id", "emergencyPerson", 4, "ngIf"], ["class", "dx-card responsive-paddings", "id", "expertsGroup", 4, "ngIf"], ["class", "dx-card responsive-paddings", "id", "emergencyRescue", 4, "ngIf"], ["class", "dx-card responsive-paddings", "id", "emergencyGrade", 4, "ngIf"], ["class", "dx-card responsive-paddings", "id", "emergencyProcess", 4, "ngIf"], ["id", "reservoirManager", 1, "dx-card", "responsive-paddings"], ["alt", "EmergencyDiagram", 3, "src"], ["id", "emergencyPerson", 1, "dx-card", "responsive-paddings"], [3, "dataSource"], ["grid", ""], [3, "enabled"], ["caption", "\u804C\u52A1", "dataField", "duty"], ["caption", "\u5DE5\u4F5C\u5355\u4F4D\u6216\u90E8\u95E8", "dataField", "unit"], ["caption", "\u5DE5\u4F5C\u804C\u52A1", "dataField", "position"], ["caption", "\u59D3\u540D", "dataField", "name"], ["caption", "\u624B\u673A", "dataField", "phone"], ["caption", "\u529E\u516C\u7535\u8BDD", "dataField", "officephone"], ["id", "expertsGroup", 1, "dx-card", "responsive-paddings"], ["caption", "\u804C\u52A1", "dataField", "position"], ["caption", "\u5DE5\u4F5C\u804C\u52A1", "dataField", "positioninunit"], ["caption", "\u4E13\u4E1A", "dataField", "subject"], ["caption", "\u804C\u8D23", "dataField", "duty"], ["caption", "\u8054\u7CFB\u65B9\u5F0F", "dataField", "contact"], ["id", "emergencyRescue", 1, "dx-card", "responsive-paddings"], [1, "buttons-column"], ["text", "\u6DF9\u6CA1\u6C34\u6DF1\u56FE", 3, "type", "width", "onClick"], ["text", "\u5230\u8FBE\u65F6\u95F4\u56FE", 3, "type", "width", "onClick"], ["text", "\u64A4\u79BB\u8DEF\u7EBF\u56FE", 3, "type", "width", "onClick"], [1, "left-content"], [4, "ngIf"], ["alt", "figurePath", 3, "src"], ["caption", "\u6751\u5E84\u540D\u79F0", "dataField", "villageid"], ["valueExpr", "value", "displayExpr", "name", 3, "dataSource"], ["caption", "\u6DF9\u6CA1\u6C34\u6DF1\uFF08m\uFF09", "dataField", "waterdepth"], ["caption", "\u5230\u8FBE\u65F6\u95F4\uFF08h\uFF09", "dataField", "arrivedtime"], ["caption", "\u6DF9\u6CA1\u6751\u5E84\u540D", "dataField", "routepoint"], ["caption", "\u5B89\u7F6E\u70B9", "dataField", "settlementid"], ["caption", "\u8DDD\u79BB\u4E0E\u65F6\u95F4", "dataField", "time"], ["id", "emergencyGrade", 1, "dx-card", "responsive-paddings"], ["alt", "EmergencyGrade", 3, "src"], ["id", "emergencyProcess", 1, "dx-card", "responsive-paddings"], ["alt", "EmergencyProcess", 3, "src"]], template: function EmergencyOrganizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "dx-responsive-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxi-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxi-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "dxi-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "dxi-location", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "dx-tree-view", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onItemClick", function EmergencyOrganizationComponent_Template_dx_tree_view_onItemClick_8_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "dxi-location", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, EmergencyOrganizationComponent_div_11_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EmergencyOrganizationComponent_div_12_Template, 10, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, EmergencyOrganizationComponent_div_13_Template, 11, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, EmergencyOrganizationComponent_div_14_Template, 31, 28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EmergencyOrganizationComponent_div_15_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, EmergencyOrganizationComponent_div_16_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ratio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("row", 0)("col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.treeInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("row", 0)("col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.IsEmergencyDiagram);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.IsHeadquarters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.IsExpertsGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.IsEmergencyRescue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.IsEmergencyGrade);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.IsEmergencyProcess);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_5__.DxResponsiveBoxComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiRowComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiColComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiItemComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiLocationComponent, devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_7__.DxTreeViewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxoPagingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiColumnComponent, devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_10__.DxButtonComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxoLookupComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWVyZ2VuY3ktb3JnYW5pemF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 65871:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/emergency-organization/command-agency/command-agency.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandAgencyComponent": () => (/* binding */ CommandAgencyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class CommandAgencyComponent {
    constructor() { }
    ngOnInit() {
    }
}
CommandAgencyComponent.ɵfac = function CommandAgencyComponent_Factory(t) { return new (t || CommandAgencyComponent)(); };
CommandAgencyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommandAgencyComponent, selectors: [["app-command-agency"]], decls: 3, vars: 0, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"]], template: function CommandAgencyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u6307\u6325\u673A\u6784");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tYW5kLWFnZW5jeS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 51224:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/emergency-organization/contacts/contacts.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ContactsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-contacts"]], decls: 3, vars: 0, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u8054\u7CFB\u65B9\u5F0F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/emergency-organization/emergency-diagram/emergency-diagram.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyDiagramComponent": () => (/* binding */ EmergencyDiagramComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/emergency-org.service */ 30551);


class EmergencyDiagramComponent {
    constructor(emergencyOrgService) {
        this.emergencyOrgService = emergencyOrgService;
        emergencyOrgService.getEmergencyOrg().then((e) => {
            this.emergencyOrg = e;
        });
    }
    ngOnInit() {
    }
}
EmergencyDiagramComponent.ɵfac = function EmergencyDiagramComponent_Factory(t) { return new (t || EmergencyDiagramComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_0__.EmergencyOrgService)); };
EmergencyDiagramComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmergencyDiagramComponent, selectors: [["app-emergency-diagram"]], decls: 4, vars: 1, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "custom-container"], ["alt", "EmergencyDiagram", 3, "src"]], template: function EmergencyDiagramComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.emergencyOrg.emergencyorgimagepath.fileurl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWVyZ2VuY3ktZGlhZ3JhbS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 41023:
/*!***************************************************************************!*\
  !*** ./src/app/pages/emergency-organization/experts/experts.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpertsComponent": () => (/* binding */ ExpertsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/emergency-org.service */ 30551);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);




class ExpertsComponent {
    constructor(emergencyOrgService) {
        this.emergencyOrgService = emergencyOrgService;
        emergencyOrgService.getExperts().then((e) => {
            this.expertsData = e;
        });
    }
    ngOnInit() {
    }
}
ExpertsComponent.ɵfac = function ExpertsComponent_Factory(t) { return new (t || ExpertsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_0__.EmergencyOrgService)); };
ExpertsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExpertsComponent, selectors: [["app-experts"]], decls: 13, vars: 2, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "custom-container"], [3, "dataSource"], ["grid", ""], [3, "enabled"], ["caption", "\u804C\u52A1", "dataField", "position"], ["caption", "\u5DE5\u4F5C\u5355\u4F4D\u6216\u90E8\u95E8", "dataField", "unit"], ["caption", "\u5DE5\u4F5C\u804C\u52A1", "dataField", "positioninunit"], ["caption", "\u59D3\u540D", "dataField", "name"], ["caption", "\u4E13\u4E1A", "dataField", "subject"], ["caption", "\u804C\u8D23", "dataField", "duty"], ["caption", "\u8054\u7CFB\u65B9\u5F0F", "dataField", "contact"]], template: function ExpertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dx-data-grid", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "dxo-paging", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dxi-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "dxi-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dxi-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "dxi-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "dxi-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dxi-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "dxi-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.expertsData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enabled", false);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxoPagingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxiColumnComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlcnRzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 15990:
/*!***********************************************************************!*\
  !*** ./src/app/pages/emergency-organization/grade/grade.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GradeComponent": () => (/* binding */ GradeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class GradeComponent {
    constructor() { }
    ngOnInit() {
    }
}
GradeComponent.ɵfac = function GradeComponent_Factory(t) { return new (t || GradeComponent)(); };
GradeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GradeComponent, selectors: [["app-grade"]], decls: 4, vars: 1, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "custom-container"], ["alt", "EmergencyGrade", 3, "src"]], template: function GradeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.emergencyGrade, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFkZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 34543:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/emergency-organization/guarantee-agency/guarantee-agency.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GuaranteeAgencyComponent": () => (/* binding */ GuaranteeAgencyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class GuaranteeAgencyComponent {
    constructor() { }
    ngOnInit() {
    }
}
GuaranteeAgencyComponent.ɵfac = function GuaranteeAgencyComponent_Factory(t) { return new (t || GuaranteeAgencyComponent)(); };
GuaranteeAgencyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuaranteeAgencyComponent, selectors: [["app-guarantee-agency"]], decls: 3, vars: 0, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"]], template: function GuaranteeAgencyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u4FDD\u969C\u673A\u6784");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJndWFyYW50ZWUtYWdlbmN5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3560:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/emergency-organization/headquarters/headquarters.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadquartersComponent": () => (/* binding */ HeadquartersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/emergency-org.service */ 30551);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);




class HeadquartersComponent {
    constructor(emergencyOrgService) {
        this.emergencyOrgService = emergencyOrgService;
        emergencyOrgService.getHeadquarters().then((e) => {
            this.headquartersData = e;
        });
    }
    ngOnInit() {
    }
}
HeadquartersComponent.ɵfac = function HeadquartersComponent_Factory(t) { return new (t || HeadquartersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_0__.EmergencyOrgService)); };
HeadquartersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeadquartersComponent, selectors: [["app-headquarters"]], decls: 12, vars: 2, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "custom-container"], [3, "dataSource"], ["grid", ""], [3, "enabled"], ["caption", "\u804C\u52A1", "dataField", "duty"], ["caption", "\u5DE5\u4F5C\u5355\u4F4D\u6216\u90E8\u95E8", "dataField", "unit"], ["caption", "\u5DE5\u4F5C\u804C\u52A1", "dataField", "position"], ["caption", "\u59D3\u540D", "dataField", "name"], ["caption", "\u624B\u673A", "dataField", "phone"], ["caption", "\u529E\u516C\u7535\u8BDD", "dataField", "officephone"]], template: function HeadquartersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dx-data-grid", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "dxo-paging", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dxi-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "dxi-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dxi-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "dxi-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "dxi-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dxi-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.headquartersData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enabled", false);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxoPagingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxiColumnComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkcXVhcnRlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 45383:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/emergency-organization/info-report/info-report.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoReportComponent": () => (/* binding */ InfoReportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class InfoReportComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoReportComponent.ɵfac = function InfoReportComponent_Factory(t) { return new (t || InfoReportComponent)(); };
InfoReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoReportComponent, selectors: [["app-info-report"]], decls: 3, vars: 0, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"]], template: function InfoReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u4FE1\u606F\u4E0A\u62A5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLXJlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 52958:
/*!*************************************************************************!*\
  !*** ./src/app/pages/emergency-organization/office/office.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OfficeComponent": () => (/* binding */ OfficeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class OfficeComponent {
    constructor() { }
    ngOnInit() {
    }
}
OfficeComponent.ɵfac = function OfficeComponent_Factory(t) { return new (t || OfficeComponent)(); };
OfficeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OfficeComponent, selectors: [["app-office"]], decls: 3, vars: 0, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"]], template: function OfficeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u529E\u516C\u5BA4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvZmZpY2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4374:
/*!***************************************************************************!*\
  !*** ./src/app/pages/emergency-organization/process/process.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcessComponent": () => (/* binding */ ProcessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/emergency-org.service */ 30551);


class ProcessComponent {
    constructor(emergencyOrgService) {
        this.emergencyOrgService = emergencyOrgService;
        emergencyOrgService.getEmergencyOrg().then((e) => {
            this.emergencyOrg = e;
        });
    }
    ngOnInit() {
    }
}
ProcessComponent.ɵfac = function ProcessComponent_Factory(t) { return new (t || ProcessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_0__.EmergencyOrgService)); };
ProcessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProcessComponent, selectors: [["app-process"]], decls: 4, vars: 1, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "custom-container"], ["alt", "EmergencyProcess", 3, "src"]], template: function ProcessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.emergencyOrg.emergencyprocessimagepath.fileurl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZXNzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 38788:
/*!*************************************************************************!*\
  !*** ./src/app/pages/emergency-organization/rescue/rescue.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RescueComponent": () => (/* binding */ RescueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/emergency-org.service */ 30551);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ 70079);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/button */ 4706);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);






function RescueComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dx-data-grid", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "dxi-column", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "dxo-lookup", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "dxi-column", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.floodInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.villages);
} }
function RescueComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dx-data-grid", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "dxi-column", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "dxo-lookup", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "dxi-column", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.floodInfo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r1.villages);
} }
function RescueComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "dx-data-grid", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "dxi-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "dxi-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "dxi-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r2.exitRoadData);
} }
class RescueComponent {
    constructor(emergencyOrgService) {
        this.emergencyOrgService = emergencyOrgService;
        emergencyOrgService.getEmergencyOrg().then((e) => {
            this.emergencyOrg = e;
        });
        emergencyOrgService.getFloodInfo().then((e) => {
            this.floodInfo = e;
            this.btnClick(0);
        });
        emergencyOrgService.getVillage().then((e) => {
            this.villages = e;
        });
        emergencyOrgService.getExitRoad().then((e) => {
            this.exitRoadData = e;
        });
    }
    ngOnInit() {
    }
    btnClick(btnIdx) {
        // 1-淹没水深
        // 2-到达时间
        // 3-撤离路线
        if (0 == btnIdx) {
            this.floodWaterDepthBtnType = "default";
            this.arrivedTimeBtnType = "normal";
            this.exitRoadBtnType = "normal";
            this.IsFloodWaterDepth = true;
            this.IsArrivedTime = false;
            this.IsExitRoadMap = false;
            this.figurePath = this.emergencyOrg.floodwaterdepthimagepath.fileurl;
        }
        else if (1 == btnIdx) {
            this.floodWaterDepthBtnType = "normal";
            this.arrivedTimeBtnType = "default";
            this.exitRoadBtnType = "normal";
            this.IsFloodWaterDepth = false;
            this.IsArrivedTime = true;
            this.IsExitRoadMap = false;
            this.figurePath = this.emergencyOrg.arrivedtimeimagepath.fileurl;
        }
        else if (2 == btnIdx) {
            this.floodWaterDepthBtnType = "normal";
            this.arrivedTimeBtnType = "normal";
            this.exitRoadBtnType = "default";
            this.IsFloodWaterDepth = false;
            this.IsArrivedTime = false;
            this.IsExitRoadMap = true;
            this.figurePath = this.emergencyOrg.evacuationimagepath.fileurl;
        }
    }
}
RescueComponent.ɵfac = function RescueComponent_Factory(t) { return new (t || RescueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_0__.EmergencyOrgService)); };
RescueComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RescueComponent, selectors: [["app-rescue"]], decls: 34, vars: 28, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "custom-container"], [3, "ratio"], [3, "row", "col"], [1, "buttons-column"], ["singleColumnScreen", "xs sm"], ["text", "\u6DF9\u6CA1\u6C34\u6DF1\u56FE", 3, "type", "width", "onClick"], ["text", "\u5230\u8FBE\u65F6\u95F4\u56FE", 3, "type", "width", "onClick"], ["text", "\u64A4\u79BB\u8DEF\u7EBF\u56FE", 3, "type", "width", "onClick"], [1, "left-content"], [4, "ngIf"], [1, "right-content"], ["alt", "figurePath", 3, "src"], [3, "dataSource"], ["caption", "\u6751\u5E84\u540D\u79F0", "dataField", "villageid"], ["valueExpr", "value", "displayExpr", "name", 3, "dataSource"], ["caption", "\u6DF9\u6CA1\u6C34\u6DF1\uFF08m\uFF09", "dataField", "waterdepth"], ["caption", "\u5230\u8FBE\u65F6\u95F4\uFF08h\uFF09", "dataField", "arrivedtime"], ["caption", "\u6DF9\u6CA1\u6751\u5E84\u540D", "dataField", "routepoint"], ["caption", "\u5B89\u7F6E\u70B9", "dataField", "settlementid"], ["caption", "\u8DDD\u79BB\u4E0E\u65F6\u95F4", "dataField", "time"]], template: function RescueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dx-responsive-box");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "dxi-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "dxi-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dxi-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dxi-location", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "dx-responsive-box", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dxi-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "dxi-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "dxi-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "dxi-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "dxi-location", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "dx-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function RescueComponent_Template_dx_button_onClick_17_listener() { return ctx.btnClick(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "dxi-location", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "dx-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function RescueComponent_Template_dx_button_onClick_20_listener() { return ctx.btnClick(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "dxi-location", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "dx-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function RescueComponent_Template_dx_button_onClick_23_listener() { return ctx.btnClick(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RescueComponent_div_25_Template, 5, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, RescueComponent_div_26_Template, 5, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, RescueComponent_div_27_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "dxi-location", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("row", 0)("col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("row", 0)("col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.floodWaterDepthBtnType)("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("row", 0)("col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.arrivedTimeBtnType)("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("row", 0)("col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.exitRoadBtnType)("width", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.IsFloodWaterDepth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.IsArrivedTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.IsExitRoadMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("row", 0)("col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.subtitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.figurePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__.DxResponsiveBoxComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxiRowComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxiColComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxiItemComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxiLocationComponent, devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_4__.DxButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxoLookupComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNjdWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 71069:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/emergency-organization/supplies/supplies.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuppliesComponent": () => (/* binding */ SuppliesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class SuppliesComponent {
    constructor() { }
    ngOnInit() {
    }
}
SuppliesComponent.ɵfac = function SuppliesComponent_Factory(t) { return new (t || SuppliesComponent)(); };
SuppliesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuppliesComponent, selectors: [["app-supplies"]], decls: 3, vars: 0, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"]], template: function SuppliesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u7269\u8D44");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllcy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 45783:
/*!****************************************************************************!*\
  !*** ./src/app/pages/emergency-plan-home/emergency-plan-home.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "MenuItem": () => (/* binding */ MenuItem),
/* harmony export */   "EmergencyPlanHomeComponent": () => (/* binding */ EmergencyPlanHomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services */ 17253);
/* harmony import */ var _shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/reservoir-info.service */ 92484);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ 92225);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 4358);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/core */ 35523);
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/form */ 57962);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular/ui/button */ 4706);










function EmergencyPlanHomeComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "dx-form", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "dxo-editing", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "dxi-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "dxo-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "dxi-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "dxo-label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "dxi-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "dxo-label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "dxi-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "dxo-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "dxi-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "dxo-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "dxi-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "dxo-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "dxi-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "dxo-label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "dxi-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "dxo-label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "dxi-item", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "dxo-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "dxi-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "dxo-label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "dxi-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "dxo-label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "dxi-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "dxo-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "dx-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function EmergencyPlanHomeComponent_div_5_Template_dx_button_onClick_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.enter_btn_click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formData", ctx_r1.currentReservoir)("colCountByScreen", ctx_r1.colCountByScreen)("readOnly", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("allowAdding", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 120);
} }
class Project {
}
class MenuItem {
}
class EmergencyPlanHomeComponent {
    constructor(router, http, authService, reservoirInfoService) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.reservoirInfoService = reservoirInfoService;
        this.authService.getUser().then((e) => {
            var _a, _b;
            this.user = e.data;
            this.headers = {
                Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
            };
            this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
            // reservoirInfoService.getAllReservoir().then((e) => {
            //   this.allReservoir = e;
            //   this.markers = [];
            //   for (const ires of this.allReservoir) {
            //     let marker:Marker = {
            //       location:[ires.latitude,ires.longitude],
            //       onClick:()=>this.markerOnClick(0)
            //     }
            //     this.markers.push(marker);
            //   }
            // })
        });
        reservoirInfoService.getAllReservoir().then((e) => {
            this.allReservoir = e;
            this.markers = [];
            for (const ires of this.allReservoir) {
                let marker = {
                    location: [ires.latitude, ires.longitude],
                    onClick: () => this.markerOnClick(ires.id),
                    tooltip: {
                        text: ires.name,
                        isShown: true,
                    }
                };
                this.markers.push(marker);
            }
        });
        // this.markers = this.getMarkers();
        this.markers = [];
        this.menuItems = this.getMenuItems();
        this.withTemplateVisible = true;
        this.currentProject = new Project();
        this.currentProject.Name = "Test";
        this.colCountByScreen = {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4
        };
    }
    ngOnInit() {
    }
    // getMarkers() {
    //   let markers: Marker[] = [{
    //     location: [32.06648431970515, 118.79258100648917],
    //     onClick: () => this.markerOnClick(0)
    //   },
    //     {
    //       location: "32.06648431970515,118.99258100648917",
    //       onClick: () => this.markerOnClick(1)
    //     }];
    //   return markers;
    // }
    getMenuItems() {
        let items = [{
                id: "1",
                name: "基本信息",
                path: "/pages/basic-info-page"
            }, {
                id: "2",
                name: "监测与预警",
                path: "/pages/monitoring-and-warning"
            }, {
                id: "3",
                name: "应急管理",
                path: "/pages/emergency-management-page"
            }, {
                id: "4",
                name: "突发事件",
                path: "/pages/critical-incident-analysis"
            }];
        return items;
    }
    markerOnClick(id) {
        this.popupVisible = true;
        for (const ires of this.allReservoir) {
            if (ires.id == id) {
                this.currentReservoir = ires;
                if (ires.name != null) {
                    this.currentProject.Name = ires.name;
                }
            }
        }
        console.log("Clicked " + this.currentProject.Name);
    }
    mapOnClick() {
        this.popupVisible = true;
        alert('mapOnClick location:');
    }
    markerAdded($event) {
        const addedMarker = $event.options;
        console.log(addedMarker);
        console.log("mark added!" + $event.location);
    }
    itemClick($event) {
        let item = $event.itemData;
        this.router.navigate([item.path]);
        console.log(item);
    }
    enter_btn_click() {
        this.authService.setCurrentReservoir(this.currentReservoir.id);
    }
}
EmergencyPlanHomeComponent.ɵfac = function EmergencyPlanHomeComponent_Factory(t) { return new (t || EmergencyPlanHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_1__.ReservoirInfoService)); };
EmergencyPlanHomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EmergencyPlanHomeComponent, selectors: [["app-emergency-plan-home"]], decls: 6, vars: 12, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], ["center", "Nanjing,China", "width", "100%", "provider", "bing", 3, "zoom", "height", "controls", "markers", "onMarkerAdded"], ["map", ""], [3, "width", "height", "showTitle", "title", "dragEnabled", "closeOnOutsideClick", "visible", "visibleChange"], [4, "dxTemplate", "dxTemplateOf"], [1, "popup-property-details"], [3, "formData", "colCountByScreen", "readOnly"], ["dataGrid", ""], ["mode", "batch", 3, "allowAdding"], ["dataField", "name", "caption", "\u540D\u79F0", "alignment", "center"], ["text", "\u540D\u79F0"], ["dataField", "longitude", "caption", "\u7ECF\u5EA6", "alignment", "center"], ["text", "\u7ECF\u5EA6"], ["dataField", "latitude", "caption", "\u7EAC\u5EA6", "alignment", "center"], ["text", "\u7EAC\u5EA6"], ["dataField", "checkfloodlevel", "caption", "\u6821\u6838\u6D2A\u6C34\u4F4D", "alignment", "center"], ["text", "\u6821\u6838\u6D2A\u6C34\u4F4D"], ["dataField", "designfloodlevel", "caption", "\u8BBE\u8BA1\u6D2A\u6C34\u4F4D", "alignment", "center"], ["text", "\u8BBE\u8BA1\u6D2A\u6C34\u4F4D"], ["dataField", "normalstoragelevel", "caption", "\u6B63\u5E38\u84C4\u6C34\u4F4D", "alignment", "center"], ["text", "\u6B63\u5E38\u84C4\u6C34\u4F4D"], ["dataField", "floodlimitlevel", "caption", "\u9632\u6D2A\u9650\u5236\u6C34\u4F4D", "alignment", "center"], ["text", "\u9632\u6D2A\u9650\u5236\u6C34\u4F4D"], ["dataField", "deadwaterlevel", "caption", "\u6B7B\u6C34\u4F4D", "alignment", "center"], ["text", "\u6B7B\u6C34\u4F4D"], ["dataField", "managementunit", "caption", "\u7BA1\u7406\u5355\u4F4D", "alignment", "center"], ["text", "\u7BA1\u7406\u5355\u4F4D"], ["dataField", "administrator", "caption", "\u884C\u653F\u8D23\u4EFB\u4EBA", "alignment", "center"], ["text", "\u884C\u653F\u8D23\u4EFB\u4EBA"], ["dataField", "inspectionperson", "caption", "\u5DE1\u68C0\u8D23\u4EFB\u4EBA", "alignment", "center"], ["text", "\u5DE1\u68C0\u8D23\u4EFB\u4EBA"], ["dataField", "technicalperson", "caption", "\u6280\u672F\u8D1F\u8D23\u4EBA", "alignment", "center"], ["text", "\u6280\u672F\u8D1F\u8D23\u4EBA"], ["stylingMode", "contained", "text", "\u8BBE\u4E3A\u5F53\u524D", "type", "success", 3, "width", "onClick"]], template: function EmergencyPlanHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "dx-map", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onMarkerAdded", function EmergencyPlanHomeComponent_Template_dx_map_onMarkerAdded_2_listener($event) { return ctx.markerAdded($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "dx-popup", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("visibleChange", function EmergencyPlanHomeComponent_Template_dx_popup_visibleChange_4_listener($event) { return ctx.popupVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, EmergencyPlanHomeComponent_div_5_Template, 30, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", 14)("height", 800)("controls", true)("markers", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("width", 660)("height", 540)("showTitle", true)("title", ctx.currentProject.Name)("dragEnabled", false)("closeOnOutsideClick", true)("visible", ctx.popupVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "content");
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_5__.DxMapComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxPopupComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__.DxTemplateDirective, devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_8__.DxFormComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__.DxiItemComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__.DxoLabelComponent, devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_10__.DxButtonComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWVyZ2VuY3ktcGxhbi1ob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 87710:
/*!****************************************************************!*\
  !*** ./src/app/pages/forms/atlas-form/atlas-form.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AtlasFormComponent": () => (/* binding */ AtlasFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/custom-response */ 47782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);








class AtlasFormComponent {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
    this.dataSource = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__.default({
      key: 'id',
      load: () => this.getRecords(),
      insert: values => this.sendRequest("/", "POST", {
        values
      }),
      update: (key, values) => this.sendRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => this.sendRequest("/", "DELETE", {
        key
      })
    });
  }

  ngOnInit() {}

  sendRequest(url, method = "GET", data = {}) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this.url + "tAtlas";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      let result = new _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__.CustomResponse();

      switch (method) {
        case 'PUT':
          result = yield _this.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  getRecords() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tAtlas";
      const data = {
        reservoirid: _this2.reservoir
      };
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers
      };
      const result = yield _this2.http.get(postUrl, httpOptions).toPromise();
      return result.data;
    })();
  }

}

AtlasFormComponent.ɵfac = function AtlasFormComponent_Factory(t) {
  return new (t || AtlasFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

AtlasFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AtlasFormComponent,
  selectors: [["app-atlas-form"]],
  decls: 8,
  vars: 6,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [3, "dataSource", "repaintChangesOnly", "showBorders"], ["dataGrid", ""], ["mode", "row", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["dataField", "reservoirid", "caption", "\u6C34\u5E93ID"], ["dataField", "imagepath", "caption", "\u56FE\u8DEF\u5F84"], ["dataField", "imagetype", "caption", "\u56FE\u7C7B\u578B"]],
  template: function AtlasFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "dx-data-grid", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "dxo-editing", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "dxi-column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "dxi-column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "dxi-column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("repaintChangesOnly", true)("showBorders", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
    }
  },
  directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxiColumnComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdGxhcy1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 32176:
/*!************************************************************************!*\
  !*** ./src/app/pages/forms/authority-form/authority-form.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorityFormComponent": () => (/* binding */ AuthorityFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/custom-response */ 47782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);








class AuthorityFormComponent {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
    this.dataSource = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__.default({
      key: 'id',
      load: () => this.getRecords(),
      insert: values => this.sendRequest("/", "POST", {
        values
      }),
      update: (key, values) => this.sendRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => this.sendRequest("/", "DELETE", {
        key
      })
    });
  }

  ngOnInit() {}

  sendRequest(url, method = "GET", data = {}) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this.url + "tAuthority";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      let result = new _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__.CustomResponse();

      switch (method) {
        case 'PUT':
          result = yield _this.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  getRecords() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tAuthority";
      const data = {};
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers
      };
      const result = yield _this2.http.get(postUrl, httpOptions).toPromise();
      return result.data;
    })();
  }

}

AuthorityFormComponent.ɵfac = function AuthorityFormComponent_Factory(t) {
  return new (t || AuthorityFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

AuthorityFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AuthorityFormComponent,
  selectors: [["app-authority-form"]],
  decls: 6,
  vars: 6,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [3, "dataSource", "repaintChangesOnly", "showBorders"], ["dataGrid", ""], ["mode", "row", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["dataField", "name", "caption", "\u6743\u9650"]],
  template: function AuthorityFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "dx-data-grid", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "dxo-editing", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "dxi-column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("repaintChangesOnly", true)("showBorders", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
    }
  },
  directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxiColumnComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpdHktZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 6184:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/forms/downstream-village-form/downstream-village-form.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownstreamVillageFormComponent": () => (/* binding */ DownstreamVillageFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/custom-response */ 47782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);








class DownstreamVillageFormComponent {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
    this.dataSource = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__.default({
      key: 'id',
      load: () => this.getRecords(),
      insert: values => this.sendRequest("/", "POST", {
        values
      }),
      update: (key, values) => this.sendRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => this.sendRequest("/", "DELETE", {
        key
      })
    });
  }

  ngOnInit() {}

  sendRequest(url, method = "GET", data = {}) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this.url + "tDownstreamVillage";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      let result = new _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__.CustomResponse();

      switch (method) {
        case 'PUT':
          record.reservoirid = _this.reservoir;
          result = yield _this.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          record.reservoirid = _this.reservoir;
          result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  getRecords() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tDownstreamVillage/list";
      const data = {
        reservoirid: _this2.reservoir
      };
      const httpParams = data;
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers,
        body: httpParams
      };
      const result = yield _this2.http.post(postUrl, httpParams, httpOptions).toPromise();
      return result.data;
    })();
  }

}

DownstreamVillageFormComponent.ɵfac = function DownstreamVillageFormComponent_Factory(t) {
  return new (t || DownstreamVillageFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

DownstreamVillageFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DownstreamVillageFormComponent,
  selectors: [["app-downstream-village-form"]],
  decls: 11,
  vars: 6,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [3, "dataSource", "repaintChangesOnly", "showBorders"], ["dataGrid", ""], ["mode", "row", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["dataField", "name", "caption", "\u6751\u5E84\u540D\u79F0"], ["dataField", "personid", "caption", "\u4EBA\u5458\u7F16\u7801"], ["dataField", "contactinfo", "caption", "\u8054\u7CFB\u65B9\u5F0F"], ["dataField", "population", "caption", "\u4EBA\u53E3"], ["dataField", "settlementid", "caption", "\u5B89\u7F6E\u70B9\u5E8F\u53F7"], ["dataField", "reservoirid", "caption", "\u6C34\u5E93"]],
  template: function DownstreamVillageFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "dx-data-grid", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "dxo-editing", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "dxi-column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "dxi-column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "dxi-column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "dxi-column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "dxi-column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "dxi-column", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("repaintChangesOnly", true)("showBorders", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
    }
  },
  directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxiColumnComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb3duc3RyZWFtLXZpbGxhZ2UtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 28785:
/*!**************************************************************!*\
  !*** ./src/app/pages/forms/duty-form/duty-form.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DutyFormComponent": () => (/* binding */ DutyFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/custom-response */ 47782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);








class DutyFormComponent {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
    this.dataSource = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__.default({
      key: 'id',
      load: () => this.getRecords(),
      insert: values => this.sendRequest("/", "POST", {
        values
      }),
      update: (key, values) => this.sendRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => this.sendRequest("/", "DELETE", {
        key
      })
    });
  }

  ngOnInit() {}

  sendRequest(url, method = "GET", data = {}) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this.url + "tDuty";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      let result = new _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__.CustomResponse();

      switch (method) {
        case 'PUT':
          result = yield _this.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  getRecords() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tDuty";
      const data = {};
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers
      };
      const result = yield _this2.http.get(postUrl, httpOptions).toPromise();
      return result.data;
    })();
  }

}

DutyFormComponent.ɵfac = function DutyFormComponent_Factory(t) {
  return new (t || DutyFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

DutyFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DutyFormComponent,
  selectors: [["app-duty-form"]],
  decls: 6,
  vars: 6,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [3, "dataSource", "repaintChangesOnly", "showBorders"], ["dataGrid", ""], ["mode", "row", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["dataField", "name", "caption", "\u804C\u8D23"]],
  template: function DutyFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "dx-data-grid", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "dxo-editing", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "dxi-column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("repaintChangesOnly", true)("showBorders", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
    }
  },
  directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxiColumnComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkdXR5LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 78542:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/forms/emergency-manager-form/emergency-manager-form.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyManagerFormComponent": () => (/* binding */ EmergencyManagerFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/custom-response */ 47782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);








class EmergencyManagerFormComponent {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
    this.dataSource = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__.default({
      key: 'id',
      load: () => this.getRecords(),
      insert: values => this.sendRequest("/", "POST", {
        values
      }),
      update: (key, values) => this.sendRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => this.sendRequest("/", "DELETE", {
        key
      })
    });
  }

  ngOnInit() {}

  sendRequest(url, method = "GET", data = {}) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this.url + "tEmergencyManager";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      let result = new _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__.CustomResponse();

      switch (method) {
        case 'PUT':
          result = yield _this.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  getRecords() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tEmergencyManager/list";
      const data = {
        reservoirid: _this2.reservoir
      };
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers,
        body: data
      };
      const result = yield _this2.http.post(postUrl, data, httpOptions).toPromise();
      return result.data;
    })();
  }

}

EmergencyManagerFormComponent.ɵfac = function EmergencyManagerFormComponent_Factory(t) {
  return new (t || EmergencyManagerFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

EmergencyManagerFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: EmergencyManagerFormComponent,
  selectors: [["app-emergency-manager-form"]],
  decls: 11,
  vars: 6,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [3, "dataSource", "repaintChangesOnly", "showBorders"], ["dataGrid", ""], ["mode", "row", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["caption", "\u90E8\u95E8\u6216\u5355\u4F4D", "dataField", "unit"], ["caption", "\u804C\u52A1", "dataField", "position"], ["caption", "\u8D1F\u8D23\u4EBA", "dataField", "chargeperson"], ["caption", "\u7535\u8BDD", "dataField", "phone"], ["caption", "\u804C\u8D23", "dataField", "duty"], ["caption", "\u5907\u6CE8", "dataField", "remark"]],
  template: function EmergencyManagerFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "dx-data-grid", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "dxo-editing", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "dxi-column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "dxi-column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "dxi-column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "dxi-column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "dxi-column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "dxi-column", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("repaintChangesOnly", true)("showBorders", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
    }
  },
  directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxiColumnComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWVyZ2VuY3ktbWFuYWdlci1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 15003:
/*!********************************************************************************!*\
  !*** ./src/app/pages/forms/emergency-org-form/emergency-org-form.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyOrgFormComponent": () => (/* binding */ EmergencyOrgFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _shared_models_emergency_organization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/emergency-organization */ 48780);
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/ui/notify */ 61756);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var _shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/reservoir-info.service */ 92484);
/* harmony import */ var _shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/services/emergency-org.service */ 30551);
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/ui/form */ 57962);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular */ 49172);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme-angular */ 19474);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular/core */ 35523);














const _c0 = function () {
  return [".jpg", ".jpeg", ".gif", ".png"];
};

function EmergencyOrgFormComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "dx-text-box", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function EmergencyOrgFormComponent_div_53_Template_dx_text_box_valueChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const data_r3 = restoredCtx.$implicit;
      return data_r3.component.option("formData")[data_r3.dataField].filename = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "dx-file-uploader", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onUploaded", function EmergencyOrgFormComponent_div_53_Template_dx_file_uploader_onUploaded_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const data_r3 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r7.onUploaded($event, data_r3);
    })("onProgress", function EmergencyOrgFormComponent_div_53_Template_dx_file_uploader_onProgress_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r8.onProgress($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", data_r3.component.option("formData")[data_r3.dataField].filename)("visible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", data_r3.component.option("formData")[data_r3.dataField].fileurl, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("multiple", false)("allowedFileExtensions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c0))("visible", true)("uploadHeaders", ctx_r2.headers)("uploadUrl", "/api/files/upload");
  }
}

class EmergencyOrgFormComponent {
  constructor(http, authService, reservoirInfoService, emergencyOrgService) {
    this.http = http;
    this.authService = authService;
    this.reservoirInfoService = reservoirInfoService;
    this.emergencyOrgService = emergencyOrgService;
    this.isDropZoneActive = false;
    this.progressVisible = false;
    this.progressValue = 0;
    this.textVisible = true;
    this.buttonOptions = {
      text: "提交",
      type: "success",
      useSubmitBehavior: true
    };
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
      reservoirInfoService.getReservoir(this.reservoir).then(e => {
        this.currentReservoir = e;
      });
      emergencyOrgService.getEmergencyOrg().then(e => {
        this.emergencyOrg = e;
      });
      emergencyOrgService.getVillage().then(e => {
        this.villages = e;
      });
    });
    this.emergencyOrg = new _shared_models_emergency_organization__WEBPACK_IMPORTED_MODULE_1__.EmergencyOrganization();
    this.url = this.authService.getApiUrl();
    this.floodInfo = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_3__.default({
      key: 'id',
      load: () => emergencyOrgService.getFloodInfo(),
      insert: values => emergencyOrgService.sendFloodInfoRequest("/", "POST", {
        values
      }),
      update: (key, values) => emergencyOrgService.sendFloodInfoRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => emergencyOrgService.sendFloodInfoRequest("/", "DELETE", {
        key
      })
    });
    this.headquarters = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_3__.default({
      key: 'id',
      load: () => emergencyOrgService.getHeadquarters(),
      insert: values => emergencyOrgService.sendHeadquartersRequest("/", "POST", {
        values
      }),
      update: (key, values) => emergencyOrgService.sendHeadquartersRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => emergencyOrgService.sendHeadquartersRequest("/", "DELETE", {
        key
      })
    });
    this.experts = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_3__.default({
      key: 'id',
      load: () => emergencyOrgService.getExperts(),
      insert: values => emergencyOrgService.sendExpertsRequest("/", "POST", {
        values
      }),
      update: (key, values) => emergencyOrgService.sendExpertsRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => emergencyOrgService.sendExpertsRequest("/", "DELETE", {
        key
      })
    }); // this.customUploadFile = this.customUploadFile.bind(this);
    // this.onUploaded = this.onUploaded.bind(this);
  }

  ngOnInit() {}

  onFormSubmit($event) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      $event.preventDefault();
      console.log(_this.emergencyOrg);
      let postUrl;
      postUrl = _this.url + "tEmergencyOrg";
      const record = _this.emergencyOrg;

      if (_this.reservoir != null) {
        record.reservoirid = _this.reservoir;
      }

      if (record.emergencyorgimagepath !== null) {
        record.emergencyorgimage = record.emergencyorgimagepath.id;
      }

      if (record.floodwaterdepthimagepath !== null) {
        record.floodwaterdepthimage = record.floodwaterdepthimagepath.id;
      }

      if (record.arrivedtimeimagepath !== null) {
        record.arrivedtimeimage = record.arrivedtimeimagepath.id;
      }

      if (record.evacuationimagepath !== null) {
        record.evacuationimage = record.evacuationimagepath.id;
      }

      if (record.emergencyprocessimagepath !== null) {
        record.emergencyprocessimage = record.emergencyprocessimagepath.id;
      }

      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      let result;

      if (record.id === null || record.id === undefined) {
        result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
      } else {
        result = yield _this.http.put(postUrl, httpParams, httpOptions).toPromise();
      }

      if (result.code == 200) {
        console.log("success");
        (0,devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_2__.default)({
          message: "提交成功",
          position: {
            my: "center top",
            at: "center top"
          }
        }, "success", 3000);
      }
    })();
  }

  onUploaded(e, data) {
    const response = JSON.parse(e.request.responseText);

    if (response.code === 200) {
      this.imageSource = this.url + response.data.path;
      data.component.option('formData')[data.dataField] = response.data;
      data.component.option('formData')[data.dataField].filename = response.data.filename;
      data.component.option('formData')[data.dataField].fileurl = this.imageSource;
      data.component.option('formData')[data.dataField].path = this.imageSource;
      const file = e.file;
      const fileReader = new FileReader();

      fileReader.onload = () => {
        this.isDropZoneActive = false;
        this.imageSource = fileReader.result;
      };

      fileReader.readAsDataURL(file);
      this.textVisible = false;
      this.progressVisible = false;
      this.progressValue = 0;
    } else {
      e.message = data.message;
    }
  }

  onProgress(e) {
    this.progressValue = e.bytesLoaded / e.bytesTotal * 100;
  }

}

EmergencyOrgFormComponent.ɵfac = function EmergencyOrgFormComponent_Factory(t) {
  return new (t || EmergencyOrgFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_5__.ReservoirInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_emergency_org_service__WEBPACK_IMPORTED_MODULE_6__.EmergencyOrgService));
};

EmergencyOrgFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: EmergencyOrgFormComponent,
  selectors: [["app-emergency-org-form"]],
  decls: 55,
  vars: 24,
  consts: [[1, "content-block"], [1, "dx-card"], [1, "dx-card", "responsive-paddings"], ["action", "/", 3, "submit"], [3, "formData"], ["itemType", "group", "caption", "1\u3001\u5E94\u6025\u9884\u6848\u6846\u56FE", "colCount", "4"], ["template", "pictureTemplate", "dataField", "emergencyorgimagepath"], [3, "visible"], ["itemType", "group", "caption", "2. \u6D2A\u6C34\u4FE1\u606F", "colCount", "4"], ["itemType", "group", "caption", "\u6D2A\u6C34\u4FE1\u606F\u8868", "colSpan", "2"], [3, "dataSource"], ["mode", "row", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["caption", "\u6751\u5E84\u540D\u79F0", "dataField", "villageid"], ["valueExpr", "value", "displayExpr", "name", 3, "dataSource"], ["caption", "\u6DF9\u6CA1\u6C34\u6DF1\uFF08m\uFF09", "dataField", "waterdepth"], ["caption", "\u5230\u8FBE\u65F6\u95F4\uFF08h\uFF09", "dataField", "arrivedtime", "dataType", "datetime"], ["itemType", "group", "caption", "\u6DF9\u6CA1\u6C34\u6DF1\u56FE"], ["template", "pictureTemplate", "dataField", "floodwaterdepthimagepath"], ["itemType", "group", "caption", "\u5230\u8FBE\u65F6\u95F4\u56FE"], ["template", "pictureTemplate", "dataField", "arrivedtimeimagepath"], ["itemType", "group", "caption", "3. \u6307\u6325\u90E8", "colCount", "4"], ["grid", ""], [3, "enabled"], ["caption", "\u804C\u52A1", "dataField", "duty"], ["caption", "\u5DE5\u4F5C\u5355\u4F4D\u6216\u90E8\u95E8", "dataField", "unit"], ["caption", "\u5DE5\u4F5C\u804C\u52A1", "dataField", "position"], ["caption", "\u59D3\u540D", "dataField", "name"], ["caption", "\u624B\u673A", "dataField", "phone"], ["caption", "\u529E\u516C\u7535\u8BDD", "dataField", "officephone"], ["itemType", "group", "caption", "4. \u6307\u6325\u90E8", "colCount", "4"], ["caption", "\u804C\u52A1", "dataField", "position"], ["caption", "\u5DE5\u4F5C\u804C\u52A1", "dataField", "positioninunit"], ["caption", "\u4E13\u4E1A", "dataField", "subject"], ["caption", "\u804C\u8D23", "dataField", "duty"], ["caption", "\u8054\u7CFB\u65B9\u5F0F", "dataField", "contact"], ["itemType", "group", "caption", "5. \u64A4\u79BB\u8DEF\u7EBF\u56FE", "colCount", "4"], ["template", "pictureTemplate", "dataField", "evacuationimagepath"], ["itemType", "group", "caption", "6. \u5E94\u6025\u6D41\u7A0B\u56FE", "colCount", "4"], ["template", "pictureTemplate", "dataField", "emergencyprocessimagepath"], [4, "dxTemplate", "dxTemplateOf"], ["itemType", "button", "horizontalAlignment", "left", 3, "buttonOptions"], [3, "value", "visible", "valueChange"], [1, "custom-container"], ["alt", "img", 3, "src"], ["selectButtonText", "\u9009\u62E9\u56FE\u7247", "labelText", "", "uploadMode", "instantly", 3, "multiple", "allowedFileExtensions", "visible", "uploadHeaders", "uploadUrl", "onUploaded", "onProgress"], ["fileUploader", ""]],
  template: function EmergencyOrgFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("submit", function EmergencyOrgFormComponent_Template_form_submit_5_listener($event) {
        return ctx.onFormSubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "dx-form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "dxi-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "dxi-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "dxi-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "dxi-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "dx-data-grid", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "dxo-editing", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "dxi-column", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "dxo-lookup", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "dxi-column", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "dxi-column", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "dxi-item", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "dxi-item", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "dxi-item", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "dxi-item", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "dxi-item", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "dx-data-grid", 10, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "dxo-editing", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "dxo-paging", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "dxi-column", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "dxi-column", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "dxi-column", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](32, "dxi-column", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](33, "dxi-column", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](34, "dxi-column", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "dxi-item", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "dx-data-grid", 10, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "dxo-editing", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "dxo-paging", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "dxi-column", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "dxi-column", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "dxi-column", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "dxi-column", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "dxi-column", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "dxi-column", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](46, "dxi-column", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "dxi-item", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "dxi-item", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "dxi-item", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "dxi-item", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](52, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, EmergencyOrgFormComponent_div_53_Template, 6, 9, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](54, "dxi-item", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u5F53\u524D\u6C34\u5E93\u4E3A\uFF1A", ctx.currentReservoir == null ? null : ctx.currentReservoir.name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formData", ctx.emergencyOrg);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.floodInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.villages);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.headquarters);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("enabled", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.experts);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("enabled", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dxTemplateOf", "pictureTemplate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("buttonOptions", ctx.buttonOptions);
    }
  },
  directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_9__.DxFormComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_10__.DxiItemComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_10__.DxoLabelComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_10__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_10__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_10__.DxoLookupComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_10__.DxoPagingComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_12__.DxTemplateDirective, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxTextBoxComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DxFileUploaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWVyZ2VuY3ktb3JnLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 95917:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/forms/emergency-plan-form/emergency-plan-form.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyPlanFormComponent": () => (/* binding */ EmergencyPlanFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _shared_models_emergency_plan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/emergency-plan */ 49716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/form */ 57962);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular */ 49172);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ 19474);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/core */ 35523);








const _c0 = ["form"];

const _c1 = function () {
  return [".jpg", ".jpeg", ".gif", ".png"];
};

function EmergencyPlanFormComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "dx-text-box", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function EmergencyPlanFormComponent_div_109_Template_dx_text_box_valueChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const data_r6 = restoredCtx.$implicit;
      return data_r6.component.option("formData")[data_r6.dataField].filename = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "dx-file-uploader", 86, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onUploaded", function EmergencyPlanFormComponent_div_109_Template_dx_file_uploader_onUploaded_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const data_r6 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r10.onUploaded($event, data_r6);
    })("onProgress", function EmergencyPlanFormComponent_div_109_Template_dx_file_uploader_onProgress_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r11.onProgress($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r6.component.option("formData")[data_r6.dataField].filename)("visible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", data_r6.component.option("formData")[data_r6.dataField].fileurl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", false)("allowedFileExtensions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c1))("uploadFile", ctx_r3.customUploadFile)("visible", true);
  }
}

const _c2 = function () {
  return [".xls", ".xlsx"];
};

function EmergencyPlanFormComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "dx-text-box", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function EmergencyPlanFormComponent_div_110_Template_dx_text_box_valueChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const data_r12 = restoredCtx.$implicit;
      return data_r12.component.option("formData")[data_r12.dataField] = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "dx-file-uploader", 88, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onUploaded", function EmergencyPlanFormComponent_div_110_Template_dx_file_uploader_onUploaded_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const data_r12 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r16.onUploaded($event, data_r12);
    })("onProgress", function EmergencyPlanFormComponent_div_110_Template_dx_file_uploader_onProgress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r17.onProgress($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r12 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r12.component.option("formData")[data_r12.dataField])("visible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", false)("allowedFileExtensions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c2))("uploadFile", ctx_r4.customUploadFile)("visible", true);
  }
}

function EmergencyPlanFormComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "dx-text-box", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("valueChange", function EmergencyPlanFormComponent_div_111_Template_dx_text_box_valueChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const data_r18 = restoredCtx.$implicit;
      return data_r18.component.option("formData")[data_r18.dataField].filename = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "dx-file-uploader", 89, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onUploaded", function EmergencyPlanFormComponent_div_111_Template_dx_file_uploader_onUploaded_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const data_r18 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r22.onUploaded($event, data_r18);
    })("onProgress", function EmergencyPlanFormComponent_div_111_Template_dx_file_uploader_onProgress_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return ctx_r23.onProgress($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r18 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", data_r18.component.option("formData")[data_r18.dataField].filename)("visible", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("multiple", false)("uploadFile", ctx_r5.customUploadFile)("visible", true);
  }
}

const _c3 = function () {
  return {
    height: 140
  };
};

class EmergencyPlanFormComponent {
  constructor(http) {
    this.http = http;
    this.isDropZoneActive = false;
    this.imageSource = "";
    this.textVisible = true;
    this.progressVisible = false;
    this.progressValue = 0;
    this.value = [];
    this.emergencyPlan = new _shared_models_emergency_plan__WEBPACK_IMPORTED_MODULE_1__.EmergencyPlan();
    this.buttonOptions = {
      text: "提交",
      type: "success",
      useSubmitBehavior: true
    };
    this.emergencyPlan = EmergencyPlanFormComponent.getEmergencyPlan();
    this.imageSource = "http://localhost:8080/api/files/bf569443-85ec-4683-b17c-9c93991988a9.jpg";
    this.customUploadFile = this.customUploadFile.bind(this);
    this.onUploaded = this.onUploaded.bind(this);
  }

  customUploadFile(file, onProgress) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const formData = new FormData();
      formData.append("file", file);
      _this.uploadResponse = yield _this.http.post("http://localhost:4200/api/files/upload", formData).toPromise();
    })();
  }

  onUploaded(e, data) {
    if (this.uploadResponse.code === 200) {
      this.imageSource = "http://localhost:8080" + this.uploadResponse.data.path;
      data.component.option('formData')[data.dataField] = this.uploadResponse.data;
      data.component.option('formData')[data.dataField].filename = this.uploadResponse.data.filename;
      data.component.option('formData')[data.dataField].fileurl = this.imageSource;
      const file = e.file;
      const fileReader = new FileReader();

      fileReader.onload = () => {
        this.isDropZoneActive = false;
        this.imageSource = fileReader.result;
      };

      fileReader.readAsDataURL(file);
      this.textVisible = false;
      this.progressVisible = false;
      this.progressValue = 0;
    } else {
      console.log(data);
      e.message = data.message;
    }
  }

  onProgress(e) {
    this.progressValue = e.bytesLoaded / e.bytesTotal * 100;
  }

  ngOnInit() {}

  static getEmergencyPlan() {
    let record = {
      DamSafetyIdentityReport: {
        id: 1,
        filename: "FileName",
        storename: "StoreName",
        path: "FilePath",
        fileurl: "FileUrl"
      },
      ProjectOverview: "",
      Attachment: [{
        id: 1,
        filename: "FileName",
        storename: "StoreName",
        path: "FilePath",
        fileurl: "FileUrl"
      }],
      ConstructionReinforcement: "",
      DischargeCapacityTable: "",
      FloodResponsiblePersons: [],
      GeologyEarthquake: "",
      MainBuildings: "",
      MainBuildingsCharacteristicTable: "",
      MainBuildingsLongitudinalSection: "",
      MainBuildingsPlanLayout: "",
      MainBuildingsTypicalBuildingSection: "",
      MonitoringInstrumentInfoTable: "",
      OccurrenceDisasters: "",
      OperationManagement: "",
      ReservoirCapacityTable: "",
      SchedulingPlan: "",
      WaterInformationInfo: [],
      WaterRainWorkMonitoring: "",
      WorkInformationInfo: [],
      WorkScheme: "",
      NatureOverview: "简单介绍自然概况",
      EconomicOverview: "简单介绍经济概况",
      EconomicOverviewPicture: {
        id: 1,
        filename: "FileName",
        storename: "StoreName",
        path: "FilePath",
        fileurl: "FileUrl"
      },
      ProjectLayout: "简述工程布置",
      ProjectLayoutPicture: "http://localhost:8080/api/files/bf569443-85ec-4683-b17c-9c93991988a9.jpg"
    };
    return record;
  }

  onFormSubmit($event) {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      $event.preventDefault();
      console.log(_this2.emergencyPlan);
    })();
  }

}

EmergencyPlanFormComponent.ɵfac = function EmergencyPlanFormComponent_Factory(t) {
  return new (t || EmergencyPlanFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

EmergencyPlanFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: EmergencyPlanFormComponent,
  selectors: [["app-emergency-plan-form"]],
  viewQuery: function EmergencyPlanFormComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
    }
  },
  decls: 112,
  vars: 70,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], ["action", "/", 3, "submit"], [3, "formData"], ["itemType", "group", "caption", "1\u3001\u81EA\u7136\u6982\u51B5", "colCount", "4"], ["dataField", "NatureOverview", "helpText", "\u5305\u62EC\u6240\u5728\u6D41\u57DF\u3001\u6C34\u5E93\u5927\u575D\u5730\u7406\u4F4D\u7F6E\u3001\u4E0A\u4E0B\u6E38\u57CE\u533A\u8DDD\u79BB\u3001\u6C14\u5019\u7279\u5F81\u3001\u6D41\u57DF\u6C34\u6587\u60C5\u51B5\u3001\u4E0A\u4E0B\u6E38\u6C34\u6587\u7AD9\u3001\u4E0A\u4E0B\u6E38\u91CD\u8981\u6C34\u5DE5\u5EFA\u7B51\u7269", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], [3, "visible"], ["itemType", "group", "colCount", "4", "caption", "2\u3001\u7ECF\u6D4E\u6982\u51B5"], ["dataField", "EconomicOverview", "helpText", "\u4E0B\u6E38\u9632\u6D2A\u6807\u51C6\u3001\u57CE\u533A\u6751\u5E84\u4EBA\u53E3\u60C5\u51B5\u3001\u4E0B\u6E38\u91CD\u8981\u516C\u8DEF\u3001\u94C1\u8DEF\u3001\u4F01\u4E8B\u4E1A\u5355\u4F4D\u3001\u519C\u7530\u8015\u5730\u7B49\u3002", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["template", "pictureTemplate", "dataField", "EconomicOverviewPicture"], ["itemType", "group", "colCount", "4", "caption", "3\u3001\u5DE5\u7A0B\u6982\u51B5"], ["dataField", "ProjectOverview", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["itemType", "group", "colCount", "4", "caption", "3.1\u3001\u5DE5\u7A0B\u5E03\u7F6E"], ["dataField", "ProjectLayout", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["template", "pictureTemplate", "dataField", "ProjectLayoutPicture"], ["itemType", "group", "colCount", "4", "caption", "3.2\u3001\u4E3B\u8981\u5EFA\u7B51\u7269"], ["dataField", "MainBuildings", "helpText", "\u5927\u575D\u3001\u8F93\u6C34\u5EFA\u7B51\u7269\u3001\u6CC4\u6C34\u5EFA\u7B51\u7269\u7B49", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["template", "pictureTemplate", "dataField", "MainBuildingsPlanLayout"], ["text", "CAD\u5E73\u9762\u5E03\u7F6E\u56FE"], ["template", "pictureTemplate", "dataField", "MainBuildingsLongitudinalSection"], ["text", "CAD\u5927\u575D\u7EB5\u5256\u9762\u56FE"], ["template", "pictureTemplate", "dataField", "MainBuildingsTypicalBuildingSection"], ["text", "\u5178\u578B\u5EFA\u7B51\u7269CAD\u56FE"], ["template", "pictureTemplate", "dataField", "MainBuildingsCharacteristicTable"], ["text", "\u4E0A\u4F20\u5DE5\u7A0B\u7279\u6027\u8868"], ["itemType", "group", "colCount", "4", "caption", "3.3\u3001\u8FD0\u884C\u7BA1\u7406"], ["dataField", "OperationManagement", "helpText", "\u4E3B\u7BA1\u90E8\u95E8\u3001\u7BA1\u7406\u673A\u6784\u548C\u7BA1\u62A4\u4EBA\u5458", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["itemType", "group", "colCount", "4", "caption", "3.4\u3001\u6C34\u96E8\u60C5\u548C\u5DE5\u60C5\u76D1\u6D4B\u60C5\u51B5"], ["dataField", "WaterRainWorkMonitoring", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["template", "pictureTemplate", "dataField", "MonitoringInstrumentInfoTable"], ["text", "\u4E0A\u4F20\u76D1\u6D4B\u4EEA\u5668\u4FE1\u606F\u8868"], ["itemType", "group", "colCount", "4", "caption", "3.5\u3001\u5DE5\u7A0B\u5730\u8D28\u4E0E\u5730\u9707"], ["dataField", "GeologyEarthquake", "helpText", "\u7B80\u8FF0\u5DE5\u7A0B\u4E3B\u8981\u5730\u5C42\u7279\u5F81\u53CA\u5176\u5730\u9707\u57FA\u672C\u70C8\u5EA6\u7B49", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["itemType", "group", "colCount", "4", "caption", "3.6\u3001\u6C34\u5E93\u8C03\u5EA6\u65B9\u6848"], ["dataField", "SchedulingPlan", "helpText", "\u7B80\u8FF0\u5DE5\u7A0B\u9632\u6D2A\u8C03\u5EA6\u4EFB\u52A1\u3001\u9632\u6D2A\u8C03\u5EA6\u539F\u5219\u3001\u6CC4\u6C34\u8BBE\u65BD\u3001\u8C03\u5EA6\u65B9\u6848", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["template", "pictureTemplate", "dataField", "ReservoirCapacityTable"], ["text", "\u5E93\u5BB9\u66F2\u7EBF\u6570\u636E\u8868"], ["template", "pictureTemplate", "dataField", "DischargeCapacityTable"], ["text", "\u6CC4\u6D41\u80FD\u529B\u8868"], ["itemType", "group", "colCount", "4", "caption", "3.7\u3001\u5DE5\u7A0B\u5EFA\u8BBE\u53CA\u52A0\u56FA\u60C5\u51B5"], ["dataField", "ConstructionReinforcement", "helpText", "\u5927\u575D\u9664\u9669\u52A0\u56FA\u7684\u60C5\u51B5\u3001\u5927\u575D\u5B89\u5168\u9274\u5B9A\u7684\u60C5\u51B5", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["itemType", "group", "colCount", "4", "caption", "3.8\u3001\u53D1\u751F\u8FC7\u7684\u5927\u6D2A\u6C34\u3001\u5730\u9707\u3001\u5730\u8D28\u707E\u5BB3\u60C5\u51B5"], ["dataField", "OccurrenceDisasters", "helpText", "\u6C34\u5E93\u8FD0\u884C\u5386\u53F2\u4E0A\u906D\u9047\u7684\u7A81\u53D1\u4E8B\u4EF6\u3001\u5E94\u6025\u5904\u7F6E\u548C\u540E\u679C\u60C5\u51B5\u7B49", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["itemType", "group", "colCount", "4", "caption", "4\u3001\u4E09\u4E2A\u9632\u6C5B\u8D23\u4EFB\u4EBA\u60C5\u51B5"], [3, "dataSource"], ["grid", ""], [3, "enabled"], ["mode", "row", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["caption", "\u9632\u6C5B\u8D23\u4EFB\u4EBA", "dataField", "Person"], ["caption", "\u5355\u4F4D", "dataField", "WorkUnit"], ["caption", "\u804C\u52A1", "dataField", "Position"], ["caption", "\u59D3\u540D", "dataField", "Name"], ["caption", "\u8054\u7CFB\u65B9\u5F0F", "dataField", "Contact"], ["itemType", "group", "colCount", "4", "caption", "5\u3001\u6C34\u60C5\u76D1\u6D4B\u4FE1\u606F\u8868"], ["caption", "\u76D1\u6D4B\u4E0E\u5DE1\u67E5\u5BF9\u8C61", "dataField", "Objects"], ["caption", "\u5185\u5BB9", "dataField", "Content"], ["caption", "\u9891\u6B21", "dataField", "Frequency"], ["caption", "\u8D23\u4EFB\u4EBA", "dataField", "ResponsiblePerson"], ["itemType", "group", "colCount", "4", "caption", "6\u3001\u5DE5\u60C5\u76D1\u6D4B\u4FE1\u606F\u8868"], ["caption", "\u65B9\u5F0F", "dataField", "Method"], ["itemType", "group", "colCount", "4", "caption", "7\u3001\u6C34\u5E93\u5DE5\u4F5C\u5236\u5EA6"], ["dataField", "WorkScheme", "helpText", "", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["itemType", "group", "colCount", "5", "caption", "8\u3001\u9644\u4EF6\u4E0A\u4F20"], ["template", "fileTemplate", "dataField", "Attachment[0]"], ["text", "\u5927\u575D\u5B89\u5168\u9274\u5B9A\u62A5\u544A"], ["template", "fileTemplate", "dataField", "Attachment[1]"], ["text", "\u5927\u575D\u7AE3\u5DE5\u9A8C\u6536\u62A5\u544A"], ["template", "fileTemplate", "dataField", "Attachment[2]"], ["text", "\u6D2A\u6C34\u590D\u6838\u62A5\u544A"], ["template", "fileTemplate", "dataField", "Attachment[3]"], ["text", "\u6C34\u5E93\u9632\u6C5B\u5EA6\u6C5B\u62A5\u544A"], ["template", "fileTemplate", "dataField", "Attachment[4]"], ["text", "\u8FD0\u884C\u7BA1\u7406\u62A5\u544A"], ["template", "fileTemplate", "dataField", "Attachment[5]"], ["text", "\u4E0B\u6E38\u4E61\u9547\u76F8\u5173\u6587\u4EF6"], ["template", "fileTemplate", "dataField", "Attachment[6]"], ["text", "\u5F53\u5730\u653F\u5E9C\u9632\u6C5B\u5E94\u6025\u9884\u6848"], ["template", "fileTemplate", "dataField", "Attachment[7]"], ["text", "\u5176\u4ED6\u76F8\u5173\u9644\u4EF6"], ["template", "fileTemplate", "dataField", "Attachment[8]"], ["text", "CAD\u56FE\u7EB8"], ["itemType", "button", "horizontalAlignment", "left", 3, "buttonOptions"], [4, "dxTemplate", "dxTemplateOf"], [3, "value", "visible", "valueChange"], [1, "custom-container"], ["alt", "", 3, "src"], ["selectButtonText", "\u9009\u62E9\u56FE\u7247", "uploadMode", "instantly", 3, "multiple", "allowedFileExtensions", "uploadFile", "visible", "onUploaded", "onProgress"], ["fileUploader", ""], ["selectButtonText", "\u9009\u62E9\u8868\u683C", "uploadMode", "instantly", 3, "multiple", "allowedFileExtensions", "uploadFile", "visible", "onUploaded", "onProgress"], ["selectButtonText", "\u9009\u62E9\u6587\u4EF6", "uploadMode", "instantly", 3, "multiple", "uploadFile", "visible", "onUploaded", "onProgress"]],
  template: function EmergencyPlanFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "form", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function EmergencyPlanFormComponent_Template_form_submit_2_listener($event) {
        return ctx.onFormSubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "dx-form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "dxi-item", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "dxi-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "dxi-item", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "dxi-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "dxi-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "dxi-item", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "dxi-item", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "dxi-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "dxi-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "dxi-item", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "dxi-item", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "dxi-item", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "dxi-item", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "dxo-label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "dxi-item", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "dxo-label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "dxi-item", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "dxo-label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "dxi-item", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "dxo-label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "dxi-item", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "dxi-item", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "dxi-item", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "dxi-item", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "dxi-item", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "dxo-label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "dxi-item", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "dxi-item", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "dxi-item", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "dxi-item", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "dxi-item", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "dxo-label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "dxi-item", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "dxo-label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "dxi-item", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "dxi-item", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "dxi-item", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "dxi-item", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "dxi-item", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "dx-data-grid", 44, 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "dxo-paging", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "dxo-editing", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "dxi-column", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "dxi-column", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "dxi-column", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "dxi-column", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](64, "dxi-column", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "dxi-item", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "dx-data-grid", 44, 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "dxo-paging", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "dxo-editing", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "dxi-column", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "dxi-column", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "dxi-column", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](73, "dxi-column", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "dxi-column", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "dxi-item", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "dx-data-grid", 44, 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "dxo-paging", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "dxo-editing", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "dxi-column", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "dxi-column", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "dxi-column", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "dxi-column", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "dxi-column", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "dxi-column", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "dxi-item", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "dxi-item", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "dxo-label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "dxi-item", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "dxi-item", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "dxo-label", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "dxi-item", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](93, "dxo-label", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "dxi-item", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "dxo-label", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "dxi-item", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](97, "dxo-label", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "dxi-item", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "dxo-label", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "dxi-item", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](101, "dxo-label", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "dxi-item", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](103, "dxo-label", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "dxi-item", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "dxo-label", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "dxi-item", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "dxo-label", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](108, "dxi-item", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](109, EmergencyPlanFormComponent_div_109_Template, 6, 8, "div", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, EmergencyPlanFormComponent_div_110_Template, 4, 7, "div", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](111, EmergencyPlanFormComponent_div_111_Template, 4, 5, "div", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formData", ctx.emergencyPlan);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", 4)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](58, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](59, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", 4)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](60, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](61, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", 4)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](62, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", 4)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](63, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](64, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", 4)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](65, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", 2)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](66, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", 4)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](67, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", 4)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](68, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.emergencyPlan.FloodResponsiblePersons);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("enabled", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.emergencyPlan.WaterInformationInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("enabled", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.emergencyPlan.WorkInformationInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("enabled", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("colSpan", 4)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](69, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("buttonOptions", ctx.buttonOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "pictureTemplate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "xlsxTemplate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "fileTemplate");
    }
  },
  directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_4__.DxFormComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxiItemComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoLabelComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoPagingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_5__.DxiColumnComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__.DxTemplateDirective, devextreme_angular__WEBPACK_IMPORTED_MODULE_8__.DxTextBoxComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxFileUploaderComponent],
  styles: ["#dropzone-external {\n  width: 350px;\n  height: 350px;\n  background-color: rgba(183, 183, 183, 0.1);\n  border-width: 2px;\n  border-style: dashed;\n  padding: 10px;\n}\n\n  #dropzone-external > * {\n  pointer-events: none;\n}\n\n  #dropzone-external.dropzone-active {\n  border-style: solid;\n}\n\n  .custom-container > span {\n  font-size: 22px;\n  font-weight: bold;\n  margin-bottom: 16px;\n}\n\n  .custom-container img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n  #dropzone-text > span {\n  font-weight: 100;\n  opacity: 0.5;\n}\n\n  #upload-progress {\n  display: flex;\n  margin-top: 10px;\n}\n\n  .flex-box {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtZXJnZW5jeS1wbGFuLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFDQTtFQUNFLG9CQUFBO0FBRUY7O0FBQUE7RUFDRSxtQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FBTUY7O0FBSkE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFRRiIsImZpbGUiOiJlbWVyZ2VuY3ktcGxhbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwICNkcm9wem9uZS1leHRlcm5hbCB7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODMsIDE4MywgMTgzLCAwLjEpO1xyXG4gIGJvcmRlci13aWR0aDogMnB4O1xyXG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuOjpuZy1kZWVwICNkcm9wem9uZS1leHRlcm5hbCA+ICoge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbjo6bmctZGVlcCAjZHJvcHpvbmUtZXh0ZXJuYWwuZHJvcHpvbmUtYWN0aXZlIHtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbjo6bmctZGVlcCAuY3VzdG9tLWNvbnRhaW5lciA+IHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcbjo6bmctZGVlcCAuY3VzdG9tLWNvbnRhaW5lciBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcbjo6bmctZGVlcCAjZHJvcHpvbmUtdGV4dCA+IHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbjo6bmctZGVlcCAjdXBsb2FkLXByb2dyZXNzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5mbGV4LWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 17875:
/*!************************************************************************************!*\
  !*** ./src/app/pages/forms/evacuation-info-form/evacuation-info-form.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EvacuationInfoFormComponent": () => (/* binding */ EvacuationInfoFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/custom-response */ 47782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);








class EvacuationInfoFormComponent {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
    this.dataSource = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__.default({
      key: 'id',
      load: () => this.getRecords(),
      insert: values => this.sendRequest("/", "POST", {
        values
      }),
      update: (key, values) => this.sendRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => this.sendRequest("/", "DELETE", {
        key
      })
    });
  }

  ngOnInit() {}

  sendRequest(url, method = "GET", data = {}) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this.url + "tEvacuationInfo";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      let result = new _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__.CustomResponse();

      switch (method) {
        case 'PUT':
          record.reservoirid = _this.reservoir;
          result = yield _this.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          record.reservoirid = _this.reservoir;
          result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  getRecords() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tEvacuationInfo/list";
      const data = {
        reservoirid: _this2.reservoir
      };
      const httpParams = data;
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers,
        body: httpParams
      };
      const result = yield _this2.http.post(postUrl, httpParams, httpOptions).toPromise();
      return result.data;
    })();
  }

}

EvacuationInfoFormComponent.ɵfac = function EvacuationInfoFormComponent_Factory(t) {
  return new (t || EvacuationInfoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

EvacuationInfoFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: EvacuationInfoFormComponent,
  selectors: [["app-evacuation-info-form"]],
  decls: 9,
  vars: 6,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [3, "dataSource", "repaintChangesOnly", "showBorders"], ["dataGrid", ""], ["mode", "row", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["dataField", "settlementid", "caption", "\u5B89\u7F6E\u70B9\u5E8F\u53F7"], ["dataField", "routepoint", "caption", "\u64A4\u79BB\u8DEF\u7EBF\u9014\u5F84\u70B9"], ["dataField", "time", "caption", "\u64A4\u79BB\u65F6\u95F4"], ["dataField", "transport", "caption", "\u64A4\u79BB\u4EA4\u901A\u5DE5\u5177"]],
  template: function EvacuationInfoFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "dx-data-grid", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "dxo-editing", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "dxi-column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "dxi-column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "dxi-column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "dxi-column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("repaintChangesOnly", true)("showBorders", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
    }
  },
  directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxiColumnComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJldmFjdWF0aW9uLWluZm8tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 71931:
/*!******************************************************************************!*\
  !*** ./src/app/pages/forms/flood-resp-person/flood-resp-person.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloodRespPersonComponent": () => (/* binding */ FloodRespPersonComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/custom-response */ 47782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);








class FloodRespPersonComponent {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
    this.dataSource = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__.default({
      key: 'id',
      load: () => this.getRecords(),
      insert: values => this.sendRequest("/", "POST", {
        values
      }),
      update: (key, values) => this.sendRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => this.sendRequest("/", "DELETE", {
        key
      })
    });
  }

  ngOnInit() {}

  sendRequest(url, method = "GET", data = {}) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this.url + "tFloodRespPerson";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      let result = new _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__.CustomResponse();

      switch (method) {
        case 'PUT':
          result = yield _this.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  getRecords() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tFloodRespPerson/list";
      const data = {
        reservoirid: _this2.reservoir
      };
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers,
        body: data
      };
      const result = yield _this2.http.post(postUrl, data, httpOptions).toPromise();
      return result.data;
    })();
  }

}

FloodRespPersonComponent.ɵfac = function FloodRespPersonComponent_Factory(t) {
  return new (t || FloodRespPersonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

FloodRespPersonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FloodRespPersonComponent,
  selectors: [["app-flood-resp-person"]],
  decls: 10,
  vars: 6,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [3, "dataSource", "repaintChangesOnly", "showBorders"], ["dataGrid", ""], ["mode", "row", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["caption", "\u9632\u6C5B\u8D23\u4EFB\u4EBA", "dataField", "positionname"], ["caption", "\u5355\u4F4D", "dataField", "unit"], ["caption", "\u804C\u52A1", "dataField", "position"], ["caption", "\u59D3\u540D", "dataField", "personname"], ["caption", "\u8054\u7CFB\u65B9\u5F0F", "dataField", "contact"]],
  template: function FloodRespPersonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "dx-data-grid", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "dxo-editing", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "dxi-column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "dxi-column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "dxi-column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "dxi-column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "dxi-column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("repaintChangesOnly", true)("showBorders", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
    }
  },
  directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxiColumnComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmbG9vZC1yZXNwLXBlcnNvbi5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 36160:
/*!****************************************************************************!*\
  !*** ./src/app/pages/forms/person-info-form/person-info-form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonInfoFormComponent": () => (/* binding */ PersonInfoFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/custom-response */ 47782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var _shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/reservoir-info.service */ 92484);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);









class PersonInfoFormComponent {
  constructor(http, authService, reservoirInfoService) {
    this.http = http;
    this.authService = authService;
    this.reservoirInfoService = reservoirInfoService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
      reservoirInfoService.getAllReservoir().then(e => {
        this.reservoirs = e;
      });
    });
    this.url = this.authService.getApiUrl();
    this.dataSource = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__.default({
      key: 'id',
      load: () => this.getRecords(),
      insert: values => this.sendRequest("/", "POST", {
        values
      }),
      update: (key, values) => this.sendRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => this.sendRequest("/", "DELETE", {
        key
      })
    });
  }

  ngOnInit() {}

  sendRequest(url, method = "GET", data = {}) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this.url + "tPersonInfo";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      let result = new _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__.CustomResponse();

      switch (method) {
        case 'PUT':
          result = yield _this.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  getRecords() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tPersonInfo/list";
      const data = {
        reservoirid: _this2.reservoir
      };
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers,
        body: data
      };
      const result = yield _this2.http.post(postUrl, data, httpOptions).toPromise();
      return result.data;
    })();
  }

}

PersonInfoFormComponent.ɵfac = function PersonInfoFormComponent_Factory(t) {
  return new (t || PersonInfoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_4__.ReservoirInfoService));
};

PersonInfoFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: PersonInfoFormComponent,
  selectors: [["app-person-info-form"]],
  decls: 10,
  vars: 7,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [3, "dataSource", "repaintChangesOnly", "showBorders"], ["dataGrid", ""], ["mode", "row", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["dataField", "name", "caption", "\u59D3\u540D"], ["dataField", "position", "caption", "\u804C\u4F4D"], ["dataField", "reservoirid", "caption", "\u6C34\u5E93"], ["displayExpr", "name", "valueExpr", "id", 3, "dataSource"], ["dataField", "unit", "caption", "\u5355\u4F4D"]],
  template: function PersonInfoFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "dx-data-grid", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "dxo-editing", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "dxi-column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "dxi-column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "dxi-column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "dxo-lookup", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "dxi-column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.dataSource)("repaintChangesOnly", true)("showBorders", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.reservoirs);
    }
  },
  directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_7__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__.DxoLookupComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb24taW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 25019:
/*!********************************************************************************!*\
  !*** ./src/app/pages/forms/project-props-form/project-props-form.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectPropsFormComponent": () => (/* binding */ ProjectPropsFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/custom-response */ 47782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);








class ProjectPropsFormComponent {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
    });
    this.url = this.authService.getApiUrl();
    this.dataSource = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__.default({
      key: 'id',
      load: () => this.getRecords(this.reservoir),
      insert: values => this.sendRequest("/", "POST", {
        values
      }),
      update: (key, values) => this.sendRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => this.sendRequest("/", "DELETE", {
        key
      })
    });
  }

  ngOnInit() {}

  getRecords(reservoir) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let postUrl;
      postUrl = _this.url + "tProjectProps/list";
      const data = {
        reservoirid: ((_a = _this.user) === null || _a === void 0 ? void 0 : _a.reservoir) || 0
      };
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: data
      };
      const result = yield _this.http.post(postUrl, data, httpOptions).toPromise();
      return result.data;
    })();
  }

  sendRequest(url, method = "GET", data = {}) {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let postUrl;
      postUrl = _this2.url + "tProjectProps";
      const record = data.values;
      record.reservoirid = (_a = _this2.user) === null || _a === void 0 ? void 0 : _a.reservoir;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers,
        body: httpParams
      };
      let result = new _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__.CustomResponse();

      switch (method) {
        case 'PUT':
          result = yield _this2.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          result = yield _this2.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this2.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

}

ProjectPropsFormComponent.ɵfac = function ProjectPropsFormComponent_Factory(t) {
  return new (t || ProjectPropsFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

ProjectPropsFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ProjectPropsFormComponent,
  selectors: [["app-project-props-form"]],
  decls: 10,
  vars: 8,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [3, "dataSource", "repaintChangesOnly", "showBorders"], ["dataGrid", ""], ["mode", "form", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["dataField", "location", "caption", "\u90E8\u4F4D", 3, "groupIndex"], ["dataField", "propname", "caption", "\u7279\u6027\u540D"], ["dataField", "propvalue", "caption", "\u7279\u6027\u503C"], [3, "autoExpandAll"], ["expand", ""]],
  template: function ProjectPropsFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "dx-data-grid", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "dxo-editing", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "dxi-column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "dxi-column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "dxi-column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "dxo-grouping", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("repaintChangesOnly", true)("showBorders", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("groupIndex", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("autoExpandAll", true);
    }
  },
  directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxoGroupingComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LXByb3BzLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 34474:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/forms/reservoir-detail-form/reservoir-detail-form.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservoirDetailFormComponent": () => (/* binding */ ReservoirDetailFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/models/reservoir-detail */ 30006);
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/ui/notify */ 61756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var _shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/reservoir-info.service */ 92484);
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/form */ 57962);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/core */ 35523);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ 49172);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ 19474);












const _c0 = function () {
  return [".jpg", ".jpeg", ".gif", ".png"];
};

function ReservoirDetailFormComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "dx-text-box", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function ReservoirDetailFormComponent_div_50_Template_dx_text_box_valueChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const data_r1 = restoredCtx.$implicit;
      return data_r1.component.option("formData")[data_r1.dataField].filename = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "dx-file-uploader", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onUploaded", function ReservoirDetailFormComponent_div_50_Template_dx_file_uploader_onUploaded_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const data_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r5.onUploaded($event, data_r1);
    })("onProgress", function ReservoirDetailFormComponent_div_50_Template_dx_file_uploader_onProgress_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r6.onProgress($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", data_r1.component.option("formData")[data_r1.dataField].filename)("visible", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", data_r1.component.option("formData")[data_r1.dataField].fileurl, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("multiple", false)("allowedFileExtensions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](8, _c0))("visible", true)("uploadHeaders", ctx_r0.headers)("uploadUrl", "/api/files/upload");
  }
}

const _c1 = function () {
  return {
    height: 140
  };
};

class ReservoirDetailFormComponent {
  constructor(http, authService, reservoirInfoService) {
    this.http = http;
    this.authService = authService;
    this.reservoirInfoService = reservoirInfoService;
    this.isDropZoneActive = false;
    this.progressVisible = false;
    this.progressValue = 0;
    this.textVisible = true;
    this.buttonOptions = {
      text: "提交",
      type: "success",
      useSubmitBehavior: true
    };
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
      reservoirInfoService.getReservoir(this.reservoir).then(e => {
        this.currentReservoir = e;
      });
      reservoirInfoService.getReservoirDetails().then(e => {
        this.reservoirDetails = e;
      });
    });
    this.reservoirDetails = new _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_1__.ReservoirDetail();
    this.url = this.authService.getApiUrl(); // this.customUploadFile = this.customUploadFile.bind(this);
    // this.onUploaded = this.onUploaded.bind(this);
  }

  customUploadFile(file) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      const formData = new FormData();
      formData.append("file", file);
      _this.uploadResponse = yield _this.http.post("http://localhost:4200/api/files/upload", formData).toPromise();
      console.log(_this.uploadResponse);
    })();
  }

  onUploaded(e, data) {
    const response = JSON.parse(e.request.responseText);

    if (response.code === 200) {
      this.imageSource = this.url + response.data.path;
      data.component.option('formData')[data.dataField] = response.data;
      data.component.option('formData')[data.dataField].filename = response.data.filename;
      data.component.option('formData')[data.dataField].fileurl = this.imageSource;
      data.component.option('formData')[data.dataField].path = this.imageSource;
      const file = e.file;
      const fileReader = new FileReader();

      fileReader.onload = () => {
        this.isDropZoneActive = false;
        this.imageSource = fileReader.result;
      };

      fileReader.readAsDataURL(file);
      this.textVisible = false;
      this.progressVisible = false;
      this.progressValue = 0;
    } else {
      e.message = data.message;
    }
  }

  onProgress(e) {
    this.progressValue = e.bytesLoaded / e.bytesTotal * 100;
  }

  ngOnInit() {}

  getRecords() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tReservoirDetail";
      let data;
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers
      };
      const result = yield _this2.http.get(postUrl, httpOptions).toPromise();
      data = result.data;
      return data;
    })();
  }

  onFormSubmit($event) {
    var _this3 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      $event.preventDefault();
      console.log(_this3.reservoirDetails);
      let postUrl;
      postUrl = _this3.url + "tReservoirDetail";
      const record = _this3.reservoirDetails;

      if (_this3.reservoir != null) {
        record.reservoirid = _this3.reservoir;
      }

      if (record.infonatureimagepath !== null) {
        record.infonatureimage = record.infonatureimagepath.id;
      }

      if (record.infoprojectimagepath !== null) {
        record.infoprojectimage = record.infoprojectimagepath.id;
      }

      if (record.infoprojectlayoutimagepath !== null) {
        record.infoprojectlayoutimage = record.infoprojectlayoutimagepath.id;
      }

      if (record.infosectionimagepath !== null) {
        record.infosectionimage = record.infosectionimagepath.id;
      }

      if (record.infogeoimagepath !== null) {
        record.infogeoimage = record.infogeoimagepath.id;
      }

      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this3.headers,
        body: httpParams
      };
      let result;

      if (record.id === null || record.id === undefined) {
        result = yield _this3.http.post(postUrl, httpParams, httpOptions).toPromise();
      } else {
        result = yield _this3.http.put(postUrl, httpParams, httpOptions).toPromise();
      }

      if (result.code == 200) {
        console.log("success");
        (0,devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_2__.default)({
          message: "提交成功",
          position: {
            my: "center top",
            at: "center top"
          }
        }, "success", 3000);
      }
    })();
  }

}

ReservoirDetailFormComponent.ɵfac = function ReservoirDetailFormComponent_Factory(t) {
  return new (t || ReservoirDetailFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_4__.ReservoirInfoService));
};

ReservoirDetailFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ReservoirDetailFormComponent,
  selectors: [["app-reservoir-detail-form"]],
  decls: 52,
  vars: 53,
  consts: [[1, "content-block"], [1, "dx-card"], [1, "dx-card", "responsive-paddings"], ["action", "/", 3, "submit"], [3, "formData"], ["itemType", "group", "caption", "1\u3001\u81EA\u7136\u6982\u51B5", "colCount", "4"], ["dataField", "infonature", "helpText", "\u5305\u62EC\u6240\u5728\u6D41\u57DF\u3001\u6C34\u5E93\u5927\u575D\u5730\u7406\u4F4D\u7F6E\u3001\u4E0A\u4E0B\u6E38\u57CE\u533A\u8DDD\u79BB\u3001\u6C14\u5019\u7279\u5F81\u3001\u6D41\u57DF\u6C34\u6587\u60C5\u51B5\u3001\u4E0A\u4E0B\u6E38\u6C34\u6587\u7AD9\u3001\u4E0A\u4E0B\u6E38\u91CD\u8981\u6C34\u5DE5\u5EFA\u7B51\u7269", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], [3, "visible"], ["template", "pictureTemplate", "dataField", "infonatureimagepath"], ["itemType", "group", "colCount", "4", "caption", "2\u3001\u7ECF\u6D4E\u6982\u51B5"], ["dataField", "infoeconomy", "helpText", "\u4E0B\u6E38\u9632\u6D2A\u6807\u51C6\u3001\u57CE\u533A\u6751\u5E84\u4EBA\u53E3\u60C5\u51B5\u3001\u4E0B\u6E38\u91CD\u8981\u516C\u8DEF\u3001\u94C1\u8DEF\u3001\u4F01\u4E8B\u4E1A\u5355\u4F4D\u3001\u519C\u7530\u8015\u5730\u7B49\u3002", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["itemType", "group", "colCount", "4", "caption", "3\u3001\u5DE5\u7A0B\u6982\u51B5"], ["dataField", "infoproject", "helpText", "\u5DE5\u7A0B\u6982\u51B5", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["template", "pictureTemplate", "dataField", "infoprojectimagepath"], ["itemType", "group", "colCount", "4", "caption", "4\u3001\u5DE5\u7A0B\u5E03\u7F6E"], ["dataField", "infoprojectlayout", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["template", "pictureTemplate", "dataField", "infoprojectlayoutimagepath"], ["template", "pictureTemplate", "dataField", "infosectionimagepath"], ["itemType", "group", "colCount", "4", "caption", "5\u3001\u6C34\u96E8\u60C5\u548C\u5DE5\u60C5\u76D1\u6D4B\u60C5\u51B5"], ["dataField", "infomonitor", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["itemType", "group", "colCount", "4", "caption", "6\u3001\u5DE5\u7A0B\u5730\u8D28\u4E0E\u5730\u9707"], ["dataField", "infogeo", "helpText", "\u7B80\u8FF0\u5DE5\u7A0B\u4E3B\u8981\u5730\u5C42\u7279\u5F81\u53CA\u5176\u5730\u9707\u57FA\u672C\u70C8\u5EA6\u7B49", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["template", "pictureTemplate", "dataField", "infogeoimagepath"], ["itemType", "group", "colCount", "4", "caption", "7\u3001\u7BA1\u7406\u673A\u6784"], ["dataField", "infoorganize", "helpText", "\u7B80\u8FF0\u7BA1\u7406\u673A\u6784", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["itemType", "group", "colCount", "4", "caption", "8\u3001\u7BA1\u7406\u5236\u5EA6"], ["dataField", "infocontrol", "helpText", "\u7B80\u8FF0\u7BA1\u7406\u673A\u6784", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["itemType", "group", "colCount", "4", "caption", "9\u3001\u5DE5\u7A0B\u5EFA\u8BBE\u53CA\u52A0\u56FA\u60C5\u51B5"], ["dataField", "infoconstructhistory", "helpText", "\u7B80\u8FF0\u5DE5\u7A0B\u5EFA\u8BBE\u53CA\u52A0\u56FA\u60C5\u51B5", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["itemType", "group", "colCount", "4", "caption", "10\u3001\u53D1\u751F\u8FC7\u7684\u5927\u6D2A\u6C34\u3001\u5730\u8D28\u707E\u5BB3\u7B49\u60C5\u51B5"], ["dataField", "infohistory", "helpText", "\u7B80\u8FF0\u53D1\u751F\u8FC7\u7684\u5927\u6D2A\u6C34\u3001\u5730\u8D28\u707E\u5BB3\u7B49\u60C5\u51B5", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], ["itemType", "group", "colCount", "4", "caption", "11\u3001\u5DE5\u7A0B\u5B89\u5168\u9274\u5B9A"], ["dataField", "infodetect", "helpText", "\u7B80\u8FF0\u5DE5\u7A0B\u5B89\u5168\u9274\u5B9A", "editorType", "dxTextArea", 3, "colSpan", "editorOptions"], [4, "dxTemplate", "dxTemplateOf"], ["itemType", "button", "horizontalAlignment", "left", 3, "buttonOptions"], [3, "value", "visible", "valueChange"], [1, "custom-container"], ["alt", "img", 3, "src"], ["selectButtonText", "\u9009\u62E9\u56FE\u7247", "labelText", "", "uploadMode", "instantly", 3, "multiple", "allowedFileExtensions", "visible", "uploadHeaders", "uploadUrl", "onUploaded", "onProgress"], ["fileUploader", ""]],
  template: function ReservoirDetailFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("submit", function ReservoirDetailFormComponent_Template_form_submit_5_listener($event) {
        return ctx.onFormSubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "dx-form", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "dxi-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "dxi-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "dxi-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "dxi-item", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "dxi-item", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "dxi-item", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "dxi-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "dxi-item", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "dxi-item", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "dxi-item", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "dxi-item", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "dxi-item", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "dxi-item", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "dxi-item", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "dxi-item", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "dxi-item", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "dxi-item", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "dxi-item", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "dxi-item", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "dxi-item", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "dxi-item", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "dxi-item", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "dxi-item", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "dxi-item", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "dxi-item", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "dxi-item", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "dxi-item", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "dxo-label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, ReservoirDetailFormComponent_div_50_Template, 6, 9, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "dxi-item", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("\u5F53\u524D\u6C34\u5E93\u4E3A\uFF1A", ctx.currentReservoir == null ? null : ctx.currentReservoir.name, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formData", ctx.reservoirDetails);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](42, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](43, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](44, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colSpan", 2)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](45, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](46, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](47, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](48, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](49, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](50, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](51, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("colSpan", 3)("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](52, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dxTemplateOf", "pictureTemplate");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonOptions", ctx.buttonOptions);
    }
  },
  directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_7__.DxFormComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__.DxiItemComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_8__.DxoLabelComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_9__.DxTemplateDirective, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxTextBoxComponent, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxFileUploaderComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNlcnZvaXItZGV0YWlsLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 35634:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/forms/reservoir-info-form/reservoir-info-form.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservoirInfoFormComponent": () => (/* binding */ ReservoirInfoFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/custom-response */ 47782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);








class ReservoirInfoFormComponent {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
    this.dataSource = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__.default({
      key: 'id',
      load: () => this.getRecords(),
      insert: values => this.sendRequest("/", "POST", {
        values
      }),
      update: (key, values) => this.sendRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => this.sendRequest("/", "DELETE", {
        key
      })
    });
  }

  ngOnInit() {}

  sendRequest(url, method = "GET", data = {}) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this.url + "tReservoirInfo";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      let result = new _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__.CustomResponse();

      switch (method) {
        case 'PUT':
          result = yield _this.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  getRecords() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tReservoirInfo/list";
      const data = {};
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers
      };
      const result = yield _this2.http.get(postUrl, httpOptions).toPromise();
      return result.data;
    })();
  }

}

ReservoirInfoFormComponent.ɵfac = function ReservoirInfoFormComponent_Factory(t) {
  return new (t || ReservoirInfoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

ReservoirInfoFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ReservoirInfoFormComponent,
  selectors: [["app-reservoir-info-form"]],
  decls: 17,
  vars: 6,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [3, "dataSource", "repaintChangesOnly", "showBorders"], ["dataGrid", ""], ["mode", "form", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["dataField", "name", "caption", "\u540D\u79F0", "alignment", "center"], ["dataField", "longitude", "caption", "\u7ECF\u5EA6", "alignment", "center"], ["dataField", "latitude", "caption", "\u7EAC\u5EA6", "alignment", "center"], ["dataField", "checkfloodlevel", "caption", "\u6821\u6838\u6D2A\u6C34\u4F4D", "alignment", "center"], ["dataField", "designfloodlevel", "caption", "\u8BBE\u8BA1\u6D2A\u6C34\u4F4D", "alignment", "center"], ["dataField", "normalstoragelevel", "caption", "\u6B63\u5E38\u84C4\u6C34\u4F4D", "alignment", "center"], ["dataField", "floodlimitlevel", "caption", "\u9632\u6D2A\u9650\u5236\u6C34\u4F4D", "alignment", "center"], ["dataField", "deadwaterlevel", "caption", "\u6B7B\u6C34\u4F4D", "alignment", "center"], ["dataField", "managementunit", "caption", "\u7BA1\u7406\u5355\u4F4D", "alignment", "center"], ["dataField", "administrator", "caption", "\u884C\u653F\u8D23\u4EFB\u4EBA", "alignment", "center"], ["dataField", "inspectionperson", "caption", "\u5DE1\u68C0\u8D23\u4EFB\u4EBA", "alignment", "center"], ["dataField", "technicalperson", "caption", "\u6280\u672F\u8D1F\u8D23\u4EBA", "alignment", "center"]],
  template: function ReservoirInfoFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "dx-data-grid", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "dxo-editing", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "dxi-column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "dxi-column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "dxi-column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "dxi-column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "dxi-column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "dxi-column", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "dxi-column", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "dxi-column", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "dxi-column", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "dxi-column", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "dxi-column", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "dxi-column", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("repaintChangesOnly", true)("showBorders", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
    }
  },
  directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxiColumnComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNlcnZvaXItaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 89085:
/*!**************************************************************************!*\
  !*** ./src/app/pages/forms/settlement-form/settlement-form.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettlementFormComponent": () => (/* binding */ SettlementFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/custom-response */ 47782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);








class SettlementFormComponent {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
    this.dataSource = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__.default({
      key: 'id',
      load: () => this.getRecords(),
      insert: values => this.sendRequest("/", "POST", {
        values
      }),
      update: (key, values) => this.sendRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => this.sendRequest("/", "DELETE", {
        key
      })
    });
  }

  ngOnInit() {}

  sendRequest(url, method = "GET", data = {}) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this.url + "tSettlement";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      let result = new _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__.CustomResponse();

      switch (method) {
        case 'PUT':
          result = yield _this.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  getRecords() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tSettlement/list";
      const data = {
        reservoirid: _this2.reservoir
      };
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers,
        body: data
      };
      const result = yield _this2.http.post(postUrl, data, httpOptions).toPromise();
      return result.data;
    })();
  }

}

SettlementFormComponent.ɵfac = function SettlementFormComponent_Factory(t) {
  return new (t || SettlementFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

SettlementFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SettlementFormComponent,
  selectors: [["app-settlement-form"]],
  decls: 10,
  vars: 6,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [3, "dataSource", "repaintChangesOnly", "showBorders"], ["dataGrid", ""], ["mode", "row", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["dataField", "indexnumber", "caption", "\u5E8F\u53F7"], ["dataField", "capacity", "caption", "\u5BB9\u7EB3\u4EBA\u53E3\u6570\u91CF"], ["dataField", "longitude", "caption", "\u7ECF\u5EA6"], ["dataField", "lantitude", "caption", "\u7EAC\u5EA6"], ["dataField", "reservoirid", "caption", "\u6C34\u5E93\u7F16\u53F7"]],
  template: function SettlementFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "dx-data-grid", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "dxo-editing", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "dxi-column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "dxi-column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "dxi-column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "dxi-column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "dxi-column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("repaintChangesOnly", true)("showBorders", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
    }
  },
  directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxiColumnComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0bGVtZW50LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 75410:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/forms/supplies-storage-form/supplies-storage-form.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuppliesStorageFormComponent": () => (/* binding */ SuppliesStorageFormComponent)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/data/custom_store */ 81998);
/* harmony import */ var _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/custom-response */ 47782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services */ 17253);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);








class SuppliesStorageFormComponent {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
    this.dataSource = new devextreme_data_custom_store__WEBPACK_IMPORTED_MODULE_1__.default({
      key: 'id',
      load: () => this.getRecords(),
      insert: values => this.sendRequest("/", "POST", {
        values
      }),
      update: (key, values) => this.sendRequest("/", "PUT", {
        key,
        values
      }),
      remove: key => this.sendRequest("/", "DELETE", {
        key
      })
    });
  }

  ngOnInit() {}

  sendRequest(url, method = "GET", data = {}) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this.url + "tSuppliesStorage";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      let result = new _shared_models_custom_response__WEBPACK_IMPORTED_MODULE_2__.CustomResponse();

      switch (method) {
        case 'PUT':
          result = yield _this.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  getRecords() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tSuppliesStorage/list";
      const data = {
        reservoirid: _this2.reservoir
      };
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers,
        body: data
      };
      const result = yield _this2.http.post(postUrl, data, httpOptions).toPromise();
      return result.data;
    })();
  }

}

SuppliesStorageFormComponent.ɵfac = function SuppliesStorageFormComponent_Factory(t) {
  return new (t || SuppliesStorageFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

SuppliesStorageFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: SuppliesStorageFormComponent,
  selectors: [["app-supplies-storage-form"]],
  decls: 10,
  vars: 6,
  consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [3, "dataSource", "repaintChangesOnly", "showBorders"], ["dataGrid", ""], ["mode", "row", 3, "allowAdding", "allowUpdating", "allowDeleting"], ["dataField", "name", "caption", "\u6551\u63F4\u7269\u8D28\u540D\u79F0"], ["dataField", "personid", "caption", "\u4EBA\u5458\u7F16\u7801"], ["dataField", "quantity", "caption", "\u6570\u91CF"], ["dataField", "storagepoint", "caption", "\u5B58\u653E\u70B9"], ["dataField", "reservoirid", "caption", "\u6C34\u5E93\u7F16\u7801"]],
  template: function SuppliesStorageFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "dx-data-grid", 2, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "dxo-editing", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "dxi-column", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "dxi-column", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "dxi-column", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "dxi-column", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "dxi-column", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource)("repaintChangesOnly", true)("showBorders", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("allowAdding", true)("allowUpdating", true)("allowDeleting", true);
    }
  },
  directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_6__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxoEditingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_7__.DxiColumnComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllcy1zdG9yYWdlLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 25245:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class HomeComponent {
    constructor() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["ng-component"]], decls: 59, vars: 0, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "logos-container"], ["viewBox", "0 0 200 34", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "devextreme-logo"], ["d", "M21.269 16.6304C21.269 21.9331 20.1851 25.9907 18.0171 28.8032C15.8638 31.6011 12.7583 33 8.70068 33H0.834473V0.875977H9.42578C13.1611 0.875977 16.0688 2.26025 18.1489 5.02881C20.229 7.78271 21.269 11.6499 21.269 16.6304ZM15.1387 16.8062C15.1387 9.62842 13.1611 6.03955 9.20605 6.03955H6.81104V27.7705H8.74463C10.9272 27.7705 12.5386 26.8623 13.5786 25.0459C14.6187 23.2148 15.1387 20.4683 15.1387 16.8062ZM33.7504 33.4395C30.6889 33.4395 28.2719 32.3555 26.4994 30.1875C24.7416 28.0049 23.8627 24.9214 23.8627 20.937C23.8627 16.894 24.661 13.7373 26.2577 11.4668C27.8544 9.19629 30.081 8.06104 32.9374 8.06104C35.6034 8.06104 37.7055 9.03516 39.2436 10.9834C40.7816 12.917 41.5507 15.6343 41.5507 19.1353V22.2554H29.7953C29.8393 24.438 30.286 26.064 31.1356 27.1333C31.9853 28.188 33.1571 28.7153 34.6513 28.7153C36.5556 28.7153 38.5038 28.1221 40.496 26.9355V31.7476C38.621 32.8755 36.3725 33.4395 33.7504 33.4395ZM32.8935 12.5654C32.0585 12.5654 31.37 13.0122 30.828 13.9058C30.286 14.7847 29.9711 16.1543 29.8832 18.0146H35.8158C35.7865 16.2275 35.5155 14.8726 35.0028 13.9497C34.4901 13.0269 33.787 12.5654 32.8935 12.5654ZM48.429 33L42.035 8.52246H48.0994L51.2195 22.6948C51.3514 23.354 51.5052 24.3208 51.681 25.5952C51.8714 26.855 51.9886 27.7632 52.0325 28.3198H52.1204C52.1351 27.8804 52.1937 27.2505 52.2962 26.4302C52.4134 25.6099 52.5306 24.8555 52.6478 24.167C52.7649 23.4785 53.8929 18.2637 56.0315 8.52246H62.096L55.68 33H48.429ZM78.5324 33H64.0524V0.875977H78.5324V6.03955H70.029V13.686H77.9172V18.8716H70.029V27.7705H78.5324V33ZM86.1798 20.4976L80.0714 8.52246H86.1358L89.3878 15.9932L92.398 8.52246H98.4186L92.2662 20.4976L98.6822 33H92.5738L89.1021 25.1777L85.8722 33H79.7857L86.1798 20.4976ZM109.12 28.4956C109.94 28.4956 110.827 28.2905 111.779 27.8804V32.4507C110.827 33.1099 109.398 33.4395 107.494 33.4395C105.37 33.4395 103.795 32.8096 102.77 31.5498C101.745 30.2754 101.232 28.3711 101.232 25.8369V13.1587H98.8589V10.5439L101.913 8.43457L103.407 3.24902H107.143V8.52246H111.581V13.1587H107.143V26.0347C107.143 27.6753 107.802 28.4956 109.12 28.4956ZM124.744 8.06104C125.461 8.06104 126.164 8.1709 126.853 8.39062L126.172 14.0596C125.762 13.9131 125.227 13.8398 124.568 13.8398C123.147 13.8398 122.056 14.4038 121.294 15.5317C120.532 16.645 120.151 18.271 120.151 20.4097V33H114.307V8.52246H119.119L119.778 12.3457H119.975C120.62 10.8076 121.323 9.70898 122.085 9.0498C122.847 8.39062 123.733 8.06104 124.744 8.06104ZM137.598 33.4395C134.537 33.4395 132.12 32.3555 130.347 30.1875C128.59 28.0049 127.711 24.9214 127.711 20.937C127.711 16.894 128.509 13.7373 130.106 11.4668C131.702 9.19629 133.929 8.06104 136.785 8.06104C139.451 8.06104 141.554 9.03516 143.092 10.9834C144.63 12.917 145.399 15.6343 145.399 19.1353V22.2554H133.643C133.687 24.438 134.134 26.064 134.984 27.1333C135.833 28.188 137.005 28.7153 138.499 28.7153C140.404 28.7153 142.352 28.1221 144.344 26.9355V31.7476C142.469 32.8755 140.221 33.4395 137.598 33.4395ZM136.742 12.5654C135.907 12.5654 135.218 13.0122 134.676 13.9058C134.134 14.7847 133.819 16.1543 133.731 18.0146H139.664C139.635 16.2275 139.364 14.8726 138.851 13.9497C138.338 13.0269 137.635 12.5654 136.742 12.5654ZM172.668 33V18.4102C172.668 14.8213 171.781 13.0269 170.009 13.0269C168.72 13.0269 167.797 13.6714 167.24 14.9604C166.684 16.2349 166.405 18.2856 166.405 21.1128V33H160.517V18.4102C160.517 14.8213 159.616 13.0269 157.814 13.0269C156.554 13.0269 155.639 13.6641 155.068 14.9385C154.496 16.2129 154.211 18.3149 154.211 21.2446V33H148.366V8.52246H153.002L153.705 11.6646H154.079C154.665 10.4194 155.463 9.51123 156.474 8.93994C157.499 8.354 158.591 8.06104 159.748 8.06104C162.736 8.06104 164.728 9.47461 165.724 12.3018H165.944C167.189 9.47461 169.189 8.06104 171.943 8.06104C174.111 8.06104 175.751 8.82275 176.864 10.3462C177.992 11.8696 178.556 14.0962 178.556 17.0259V33H172.668ZM191.433 33.4395C188.372 33.4395 185.955 32.3555 184.182 30.1875C182.424 28.0049 181.546 24.9214 181.546 20.937C181.546 16.894 182.344 13.7373 183.941 11.4668C185.537 9.19629 187.764 8.06104 190.62 8.06104C193.286 8.06104 195.388 9.03516 196.926 10.9834C198.464 12.917 199.233 15.6343 199.233 19.1353V22.2554H187.478C187.522 24.438 187.969 26.064 188.818 27.1333C189.668 28.188 190.84 28.7153 192.334 28.7153C194.238 28.7153 196.187 28.1221 198.179 26.9355V31.7476C196.304 32.8755 194.055 33.4395 191.433 33.4395ZM190.576 12.5654C189.741 12.5654 189.053 13.0122 188.511 13.9058C187.969 14.7847 187.654 16.1543 187.566 18.0146H193.499C193.469 16.2275 193.198 14.8726 192.686 13.9497C192.173 13.0269 191.47 12.5654 190.576 12.5654Z", "fill", "#F05B41"], ["viewBox", "0 0 22 22", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "plus"], ["d", "M21.6309 13.3433H13.1714V21.8027H8.73291V13.3433H0.229492V8.88281H8.73291V0.379395H13.1714V8.88281H21.6309V13.3433Z", "fill", "#BCBCBC"], ["viewBox", "0 0 512 139", "xmlns", "http://www.w3.org/2000/svg", 1, "angular-logo"], ["fill", "none", "fill-rule", "evenodd"], ["fill", "#B52E31"], ["d", "M150.6 102.8v-63h8.1l38.5 50.7V39.8h7.7v63h-8.1l-38.5-51.2v51.2h-7.7zM267.6 100.3c-5.1 1.9-10.6 2.9-16.4 2.9-22.8 0-34.2-10.9-34.2-32.8 0-20.7 11-31.1 33-31.1 6.3 0 12.2.9 17.6 2.6v7c-5.4-2.1-11-3.1-16.7-3.1-17.2 0-25.8 8.2-25.8 24.4 0 17.5 8.5 26.2 25.4 26.2 2.7 0 5.7-.4 9-1.1V74.2h8.1v26.1zM280.6 78.5V39.8h8.1v38.7c0 12.1 6 18.2 18.1 18.2 12 0 18.1-6.1 18.1-18.2V39.8h8.1v38.7c0 16.5-8.7 24.8-26.2 24.8s-26.2-8.3-26.2-24.8zM355.6 39.8v56.4h33v6.6h-41.1v-63h8.1zM400.3 102.8h-8.5l31.3-71.3 31.3 71.3h-9L437.3 83h-20.8l2.2-6.6h15.9l-11.8-28.5-22.5 54.9zM463.1 102.8v-63H490c12 0 18 5 18 15.1 0 8.2-5.9 14.3-17.6 18.2l21.6 29.7h-10.7l-20-28.3v-5.3c12-1.9 18.1-6.5 18.1-13.9 0-5.8-3.3-8.7-10-8.7h-18v56.2h-8.3z"], ["d", "M0 23L64.5 0l66.2 22.6-10.7 85.3-55.5 30.7-54.6-30.3L0 23z", "fill", "#E23237"], ["d", "M130.7 22.6L64.5 0v138.6l55.5-30.7 10.7-85.3z", "fill", "#B52E31"], ["d", "M64.6 16.2l-40.2 89.4 15-.3 8.1-20.2H83.4l8.8 20.4 14.3.3-41.9-89.6zm.1 28.7l13.6 28.4H52.8l11.9-28.4z", "fill", "#FFF"], ["href", "https://cli.angular.io/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://js.devexpress.com/Documentation/Guide/Common/DevExtreme_CLI/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://js.devexpress.com/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://js.devexpress.com/Documentation/Guide/Widgets/Form/Overview/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://js.devexpress.com/Documentation/Guide/Widgets/Drawer/Getting_Started_with_Navigation_Drawer/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://js.devexpress.com/Documentation/Guide/Angular_Components/Application_Template/#Layouts", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://js.devexpress.com/Documentation/Guide/Angular_Components/Application_Template/#Add_a_New_View", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://js.devexpress.com/Documentation/Guide/Angular_Components/Application_Template/#Configure_the_Navigation_Menu", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://js.devexpress.com/Documentation/Guide/Angular_Components/Application_Template/#Configure_Themes", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://js.devexpress.com/documentation/", "target", "_blank", "rel", "noopener noreferrer"], ["href", "https://js.devexpress.com/Demos/Widgetsgallery/", "target", "_blank", "rel", "noopener noreferrer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Thanks for using the DevExtreme Angular App Template.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "This application was built using ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Angular CLI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "DevExtreme CLI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " and includes the following DevExtreme components:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "DataGrid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Drawer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "To customize your DevExtreme Angular application further, please refer to the following help topics:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Add a New View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Configure the Navigation Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Configure Themes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "For technical content related to DevExtreme Angular components, feel free to explore our ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "online documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "technical demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logos-container[_ngcontent-%COMP%] {\n  margin: 20px 0 40px 0;\n  text-align: center;\n}\n.logos-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.devextreme-logo[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 34px;\n  margin-bottom: 13px;\n}\n.angular-logo[_ngcontent-%COMP%] {\n  width: 220px;\n  height: 62px;\n}\n.plus[_ngcontent-%COMP%] {\n  margin: 15px 10px;\n  width: 22px;\n  height: 22px;\n}\n.screen-x-small[_nghost-%COMP%]   .logos-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .screen-x-small   [_nghost-%COMP%]   .logos-container[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.screen-x-small[_nghost-%COMP%]   .logos-container[_ngcontent-%COMP%]   svg.plus[_ngcontent-%COMP%], .screen-x-small   [_nghost-%COMP%]   .logos-container[_ngcontent-%COMP%]   svg.plus[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLHFCQUFBO0FBRUo7QUFFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBR0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQUFKO0FBQ0k7RUFDRSxTQUFBO0FBQ04iLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvcy1jb250YWluZXIge1xuICBtYXJnaW46IDIwcHggMCA0MHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgc3ZnIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cblxuLmRldmV4dHJlbWUtbG9nbyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xufVxuXG4uYW5ndWxhci1sb2dvIHtcbiAgd2lkdGg6IDIyMHB4O1xuICBoZWlnaHQ6IDYycHg7XG59XG5cbi5wbHVzIHtcbiAgbWFyZ2luOiAxNXB4IDEwcHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG59XG5cbjpob3N0LWNvbnRleHQoLnNjcmVlbi14LXNtYWxsKSAubG9nb3MtY29udGFpbmVyIHtcbiAgc3ZnIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICAmLnBsdXMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 8283:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/monitoring-and-warning/monitoring-and-warning.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MonitoringAndWarningComponent": () => (/* binding */ MonitoringAndWarningComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme-angular/ui/tree-view */ 35166);


class MonitoringAndWarningComponent {
    constructor() {
        this.infos = this.getInfos();
    }
    ngOnInit() {
    }
    selectItem($event) {
    }
    getInfos() {
        let infos = [{
                id: "1",
                text: "监测",
                expanded: false,
                items: [{
                        id: "1_1",
                        text: "查询"
                    }, {
                        id: "1_2",
                        text: "特征值"
                    }, {
                        id: "1_3",
                        text: "过程线"
                    }, {
                        id: "1_4",
                        text: "线性回归"
                    }]
            }, {
                id: "2",
                text: "预警",
                expanded: false,
                items: [{
                        id: "2_1",
                        text: "预警级别"
                    }]
            }];
        return infos;
    }
}
MonitoringAndWarningComponent.ɵfac = function MonitoringAndWarningComponent_Factory(t) { return new (t || MonitoringAndWarningComponent)(); };
MonitoringAndWarningComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MonitoringAndWarningComponent, selectors: [["app-monitoring-and-warning"]], decls: 5, vars: 2, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "form"], ["id", "treeview", 3, "items", "width", "onItemClick"], ["id", "details"]], template: function MonitoringAndWarningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "dx-tree-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onItemClick", function MonitoringAndWarningComponent_Template_dx_tree_view_onItemClick_3_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.infos)("width", 300);
    } }, directives: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_1__.DxTreeViewComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb25pdG9yaW5nLWFuZC13YXJuaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 80410:
/*!**********************************************************************!*\
  !*** ./src/app/pages/person-info-page/person-info-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonInfoPageComponent": () => (/* binding */ PersonInfoPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/models/reservoir-detail */ 30006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services */ 17253);
/* harmony import */ var _shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/reservoir-info.service */ 92484);
/* harmony import */ var _shared_services_person_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/person-info.service */ 61560);
/* harmony import */ var _shared_services_flood_person_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/flood-person.service */ 77706);
/* harmony import */ var _shared_services_emergency_manager_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/emergency-manager.service */ 98442);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular */ 70079);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular/ui/tree-view */ 35166);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);












function PersonInfoPageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "dx-data-grid", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "dxo-paging", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "dxi-column", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "dxi-column", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "dxi-column", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\u4E09\u7EA7\u9632\u6C5B\u8D23\u4EFB\u4EBA");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "dx-data-grid", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "dxo-paging", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "dxi-column", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "dxi-column", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "dxi-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "dxi-column", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "dxi-column", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.reservoirDetails.infocontrol || ctx_r0.managerOverview);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r0.managerData)("showBorders", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSize", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r0.floodPersonData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enabled", false);
} }
function PersonInfoPageComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "dx-data-grid", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "dxo-paging", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "dxi-column", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "dxi-column", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "dxi-column", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "dxi-column", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "dxi-column", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "dxi-column", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r1.emergencyPersonData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("enabled", false);
} }
class PersonInfoPageComponent {
    constructor(http, authService, reservoirInfoService, personInfoService, floodPersonService, emergencyManagerService) {
        this.http = http;
        this.authService = authService;
        this.reservoirInfoService = reservoirInfoService;
        this.personInfoService = personInfoService;
        this.floodPersonService = floodPersonService;
        this.emergencyManagerService = emergencyManagerService;
        this.authService.getUser().then((e) => {
            var _a, _b;
            this.user = e.data;
            this.headers = {
                Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
            };
            this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
            reservoirInfoService.getReservoirDetails().then((e) => {
                this.reservoirDetails = e;
            });
            personInfoService.getPerson().then((e) => {
                this.managerData = e;
            });
            floodPersonService.getFloodPerson().then((e) => {
                this.floodPersonData = e;
            });
            emergencyManagerService.getEmergencyManager().then((e) => {
                this.emergencyPersonData = e;
            });
        });
        this.reservoirDetails = new _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_0__.ReservoirDetail();
        this.treeInfo = PersonInfoPageComponent.getInfo();
        this.IsReservoirManager = true;
        this.managerOverview = "双城水库管理所筹建于水库建设初期，事业单位编制(企业管理)，隶属县水务局领导，编制12人，其中管理人员编制2名、专业技术人员编制8名、工勤人员2名，股级领导2名（1正1副）";
    }
    ngOnInit() {
    }
    selectItem($event) {
        this.currentItem = $event.itemData;
        if (this.currentItem.value === "ReservoirManager") {
            this.setAllFalse();
            this.IsReservoirManager = true;
        }
        else if (this.currentItem.value === "EmergencyManager") {
            this.setAllFalse();
            this.IsEmergencyManager = true;
        }
    }
    setAllFalse() {
        this.IsReservoirManager = false;
        this.IsEmergencyManager = false;
    }
    static getInfo() {
        let infos = [{
                id: "1",
                text: "水库管理人员",
                value: "ReservoirManager",
            }, {
                id: "2",
                text: "应急管理人员",
                value: "EmergencyManager",
            }];
        return infos;
    }
}
PersonInfoPageComponent.ɵfac = function PersonInfoPageComponent_Factory(t) { return new (t || PersonInfoPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_2__.ReservoirInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_person_info_service__WEBPACK_IMPORTED_MODULE_3__.PersonInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_flood_person_service__WEBPACK_IMPORTED_MODULE_4__.FloodPersonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_emergency_manager_service__WEBPACK_IMPORTED_MODULE_5__.EmergencyManagerService)); };
PersonInfoPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PersonInfoPageComponent, selectors: [["app-person-info-page"]], decls: 13, vars: 10, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], ["singleColumnScreen", "xs sm"], [3, "ratio"], [3, "row", "col"], ["id", "treeview", 3, "items", "onItemClick"], ["class", "dx-card responsive-paddings", "id", "reservoirManager", 4, "ngIf"], ["class", "dx-card responsive-paddings", "id", "emergencyPerson", 4, "ngIf"], ["id", "reservoirManager", 1, "dx-card", "responsive-paddings"], [3, "dataSource", "showBorders"], [3, "pageSize"], ["dataField", "name", "caption", "\u59D3\u540D"], ["dataField", "position", "caption", "\u6C34\u5E93\u5355\u4F4D\u804C\u52A1"], ["dataField", "contact ", "caption", "\u8054\u7CFB\u65B9\u5F0F"], [3, "dataSource"], ["grid", ""], [3, "enabled"], ["caption", "\u9632\u6C5B\u8D23\u4EFB\u4EBA", "dataField", "positionname"], ["caption", "\u5355\u4F4D", "dataField", "unit"], ["caption", "\u804C\u52A1", "dataField", "position"], ["caption", "\u59D3\u540D", "dataField", "personname"], ["caption", "\u8054\u7CFB\u65B9\u5F0F", "dataField", "contact"], ["id", "emergencyPerson", 1, "dx-card", "responsive-paddings"], ["caption", "\u90E8\u95E8\u6216\u5355\u4F4D", "dataField", "unit"], ["caption", "\u8D1F\u8D23\u4EBA", "dataField", "chargeperson"], ["caption", "\u7535\u8BDD", "dataField", "phone"], ["caption", "\u804C\u8D23", "dataField", "duty"], ["caption", "\u5907\u6CE8", "dataField", "remark"]], template: function PersonInfoPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "dx-responsive-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "dxi-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "dxi-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "dxi-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "dxi-location", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "dx-tree-view", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onItemClick", function PersonInfoPageComponent_Template_dx_tree_view_onItemClick_8_listener($event) { return ctx.selectItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "dxi-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "dxi-location", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, PersonInfoPageComponent_div_11_Template, 19, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, PersonInfoPageComponent_div_12_Template, 10, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ratio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ratio", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("row", 0)("col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("items", ctx.treeInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("row", 0)("col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.IsReservoirManager);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.IsEmergencyManager);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_8__.DxResponsiveBoxComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__.DxiRowComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__.DxiColComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__.DxiItemComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__.DxiLocationComponent, devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_10__.DxTreeViewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__.DxoPagingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_9__.DxiColumnComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJzb24taW5mby1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 74634:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/person-info/emergency-person/emergency-person.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyPersonComponent": () => (/* binding */ EmergencyPersonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_emergency_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/services/emergency-manager.service */ 98442);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);




class EmergencyPersonComponent {
    constructor(emergencyManagerService) {
        this.emergencyManagerService = emergencyManagerService;
        emergencyManagerService.getEmergencyManager().then((e) => {
            this.emergencyPersonData = e;
        });
    }
    ngOnInit() {
    }
}
EmergencyPersonComponent.ɵfac = function EmergencyPersonComponent_Factory(t) { return new (t || EmergencyPersonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_emergency_manager_service__WEBPACK_IMPORTED_MODULE_0__.EmergencyManagerService)); };
EmergencyPersonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmergencyPersonComponent, selectors: [["app-emergency-person"]], decls: 12, vars: 2, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "custom-container"], [3, "dataSource"], ["grid", ""], [3, "enabled"], ["caption", "\u90E8\u95E8\u6216\u5355\u4F4D", "dataField", "unit"], ["caption", "\u804C\u52A1", "dataField", "position"], ["caption", "\u8D1F\u8D23\u4EBA", "dataField", "chargeperson"], ["caption", "\u7535\u8BDD", "dataField", "phone"], ["caption", "\u804C\u8D23", "dataField", "duty"], ["caption", "\u5907\u6CE8", "dataField", "remark"]], template: function EmergencyPersonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "dx-data-grid", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "dxo-paging", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dxi-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "dxi-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dxi-column", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "dxi-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "dxi-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dxi-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.emergencyPersonData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("enabled", false);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxoPagingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxiColumnComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWVyZ2VuY3ktcGVyc29uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2480:
/*!************************************************************************************!*\
  !*** ./src/app/pages/person-info/reservoir-manager/reservoir-manager.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservoirManagerComponent": () => (/* binding */ ReservoirManagerComponent)
/* harmony export */ });
/* harmony import */ var _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models/reservoir-detail */ 30006);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/reservoir-info.service */ 92484);
/* harmony import */ var _shared_services_person_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/person-info.service */ 61560);
/* harmony import */ var _shared_services_flood_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/flood-person.service */ 77706);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);







class ReservoirManagerComponent {
    constructor(reservoirInfoService, personInfoService, floodPersonService) {
        this.reservoirInfoService = reservoirInfoService;
        this.personInfoService = personInfoService;
        this.floodPersonService = floodPersonService;
        reservoirInfoService.getReservoirDetails().then((e) => {
            this.reservoirDetails = e;
        });
        personInfoService.getPerson().then((e) => {
            this.managerData = e;
        });
        floodPersonService.getFloodPerson().then((e) => {
            this.floodPersonData = e;
        });
        this.reservoirDetails = new _shared_models_reservoir_detail__WEBPACK_IMPORTED_MODULE_0__.ReservoirDetail();
    }
    ngOnInit() {
    }
}
ReservoirManagerComponent.ɵfac = function ReservoirManagerComponent_Factory(t) { return new (t || ReservoirManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_reservoir_info_service__WEBPACK_IMPORTED_MODULE_1__.ReservoirInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_person_info_service__WEBPACK_IMPORTED_MODULE_2__.PersonInfoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_flood_person_service__WEBPACK_IMPORTED_MODULE_3__.FloodPersonService)); };
ReservoirManagerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ReservoirManagerComponent, selectors: [["app-reservoir-manager"]], decls: 21, vars: 6, consts: [[1, "content-block"], [1, "dx-card", "responsive-paddings"], [1, "custom-container"], [3, "dataSource", "showBorders"], [3, "pageSize"], ["dataField", "name", "caption", "\u59D3\u540D"], ["dataField", "position", "caption", "\u6C34\u5E93\u5355\u4F4D\u804C\u52A1"], ["dataField", "contact ", "caption", "\u8054\u7CFB\u65B9\u5F0F"], [3, "dataSource"], ["grid", ""], [3, "enabled"], ["caption", "\u9632\u6C5B\u8D23\u4EFB\u4EBA", "dataField", "positionname"], ["caption", "\u5355\u4F4D", "dataField", "unit"], ["caption", "\u804C\u52A1", "dataField", "position"], ["caption", "\u59D3\u540D", "dataField", "personname"], ["caption", "\u8054\u7CFB\u65B9\u5F0F", "dataField", "contact"]], template: function ReservoirManagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "dx-data-grid", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "dxo-paging", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "dxi-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "dxi-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "dxi-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "\u4E09\u7EA7\u9632\u6C5B\u8D23\u4EFB\u4EBA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "dx-data-grid", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "dxo-paging", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "dxi-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "dxi-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "dxi-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "dxi-column", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "dxi-column", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.reservoirDetails.infocontrol);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.managerData)("showBorders", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.floodPersonData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("enabled", false);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_5__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxoPagingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiColumnComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXNlcnZvaXItbWFuYWdlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 58220:
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/services */ 17253);
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/form */ 57962);



class ProfileComponent {
    constructor(authService) {
        this.authService = authService;
        this.authService.getUser().then((e) => {
            var _a, _b;
            this.user = e.data;
            this.headers = {
                Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
            };
            this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
        });
        this.employee = {
            ID: 7,
            FirstName: 'Sandra',
            LastName: 'Johnson',
            Prefix: 'Mrs.',
            Position: 'Controller',
            Picture: 'images/employees/06.png',
            BirthDate: new Date('1974/11/15'),
            HireDate: new Date('2005/05/11'),
            /* tslint:disable-next-line:max-line-length */
            Notes: 'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.',
            Address: '4600 N Virginia Rd.'
        };
        this.colCountByScreen = {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4
        };
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["ng-component"]], decls: 7, vars: 4, consts: [[1, "content-block", "dx-card", "responsive-paddings"], [1, "form-avatar"], [3, "src"], ["id", "form", "labelLocation", "top", 3, "formData", "colCountByScreen"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dx-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/", ctx.employee.Picture, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.employee.Notes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formData", ctx.user)("colCountByScreen", ctx.colCountByScreen);
    } }, directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_2__.DxFormComponent], styles: [".form-avatar[_ngcontent-%COMP%] {\n  float: left;\n  height: 120px;\n  width: 120px;\n  margin-right: 20px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: #fff;\n  overflow: hidden;\n}\n.form-avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 120px;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tYXZhdGFyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 29056:
/*!************************************************!*\
  !*** ./src/app/pages/tasks/tasks.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksComponent": () => (/* binding */ TasksComponent)
/* harmony export */ });
/* harmony import */ var devextreme_data_odata_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devextreme/data/odata/store */ 5069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular */ 77849);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);




class TasksComponent {
    constructor() {
        this.dataSource = {
            store: {
                type: 'odata',
                key: 'Task_ID',
                url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
            },
            expand: 'ResponsibleEmployee',
            select: [
                'Task_ID',
                'Task_Subject',
                'Task_Start_Date',
                'Task_Due_Date',
                'Task_Status',
                'Task_Priority',
                'Task_Completion',
                'ResponsibleEmployee/Employee_Full_Name'
            ]
        };
        this.priority = [
            { name: 'High', value: 4 },
            { name: 'Urgent', value: 3 },
            { name: 'Normal', value: 2 },
            { name: 'Low', value: 1 }
        ];
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(); };
TasksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["ng-component"]], decls: 14, vars: 23, consts: [[1, "dx-card", "wide-card", 3, "dataSource", "showBorders", "focusedRowEnabled", "focusedRowIndex", "columnAutoWidth", "columnHidingEnabled"], [3, "pageSize"], [3, "showPageSizeSelector", "showInfo"], [3, "visible"], ["dataField", "Task_ID", 3, "width", "hidingPriority"], ["dataField", "Task_Subject", "caption", "Subject", 3, "width", "hidingPriority"], ["dataField", "Task_Status", "caption", "Status", 3, "hidingPriority"], ["dataField", "Task_Priority", "caption", "Priority", 3, "hidingPriority"], ["valueExpr", "value", "displayExpr", "name", 3, "dataSource"], ["dataField", "ResponsibleEmployee.Employee_Full_Name", "caption", "Assigned To", 3, "allowSorting", "hidingPriority"], ["dataField", "Task_Start_Date", "caption", "Start Date", "dataType", "date", 3, "hidingPriority"], ["dataField", "Task_Due_Date", "caption", "Due Date", "dataType", "date", 3, "hidingPriority"], ["dataField", "Task_Priority", "caption", "Priority", "name", "Priority", 3, "hidingPriority"], ["dataField", "Task_Completion", "caption", "Completion", 3, "hidingPriority"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "dx-data-grid", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "dxo-paging", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "dxo-pager", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "dxo-filter-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "dxi-column", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "dxi-column", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "dxi-column", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "dxi-column", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "dxo-lookup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "dxi-column", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "dxi-column", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "dxi-column", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "dxi-column", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "dxi-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource)("showBorders", false)("focusedRowEnabled", true)("focusedRowIndex", 0)("columnAutoWidth", true)("columnHidingEnabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showPageSizeSelector", true)("showInfo", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("visible", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 90)("hidingPriority", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", 190)("hidingPriority", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidingPriority", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidingPriority", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.priority);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("allowSorting", false)("hidingPriority", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidingPriority", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidingPriority", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidingPriority", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidingPriority", 0);
    } }, directives: [devextreme_angular__WEBPACK_IMPORTED_MODULE_2__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxoPagingComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxoPagerComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxoFilterRowComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_3__.DxoLookupComponent], encapsulation: 2 });


/***/ }),

/***/ 5796:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/change-password-form/change-password-form.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordFormComponent": () => (/* binding */ ChangePasswordFormComponent),
/* harmony export */   "ChangePasswordFormModule": () => (/* binding */ ChangePasswordFormModule)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/form */ 57962);
/* harmony import */ var devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/ui/load-indicator */ 26774);
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/ui/notify */ 61756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ 17253);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/core */ 35523);















function ChangePasswordFormComponent_ng_container_11_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "dx-load-indicator", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", true);
  }
}

function ChangePasswordFormComponent_ng_container_11_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Continue");
  }
}

function ChangePasswordFormComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ChangePasswordFormComponent_ng_container_11_ng_container_2_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ChangePasswordFormComponent_ng_container_11_ng_template_3_Template, 1, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.loading)("ngIfElse", _r3);
  }
}

const _c0 = function () {
  return {
    stylingMode: "filled",
    placeholder: "Password",
    mode: "password"
  };
};

const _c1 = function () {
  return {
    stylingMode: "filled",
    placeholder: "Confirm Password",
    mode: "password"
  };
};

class ChangePasswordFormComponent {
  constructor(authService, router, route) {
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.loading = false;
    this.formData = {};
    this.recoveryCode = '';

    this.confirmPassword = e => {
      return e.value === this.formData.password;
    };
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.recoveryCode = params.get('recoveryCode') || '';
    });
  }

  onSubmit(e) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      e.preventDefault();
      const {
        password
      } = _this.formData;
      _this.loading = true;
      const result = yield _this.authService.changePassword(password, _this.recoveryCode);
      _this.loading = false;

      if (result.isOk) {
        _this.router.navigate(['/login-form']);
      } else {
        (0,devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__.default)(result.message, 'error', 2000);
      }
    })();
  }

}

ChangePasswordFormComponent.ɵfac = function ChangePasswordFormComponent_Factory(t) {
  return new (t || ChangePasswordFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
};

ChangePasswordFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ChangePasswordFormComponent,
  selectors: [["app-change-passsword-form"]],
  decls: 12,
  vars: 12,
  consts: [[3, "submit"], [3, "formData", "disabled"], ["dataField", "password", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "required", "message", "Password is required"], [3, "visible"], ["dataField", "confirmedPassword", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "custom", "message", "Passwords do not match", 3, "validationCallback"], ["itemType", "button"], ["width", "100%", "type", "default", 3, "useSubmitBehavior", "template"], [4, "dxTemplate", "dxTemplateOf"], [1, "dx-button-text"], [4, "ngIf", "ngIfElse"], ["notLoading", ""], ["width", "24px", "height", "24px", 3, "visible"]],
  template: function ChangePasswordFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ChangePasswordFormComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dx-form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "dxi-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxi-validation-rule", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxo-label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "dxi-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "dxi-validation-rule", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "dxi-validation-rule", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "dxo-label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "dxi-item", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "dxo-button-options", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ChangePasswordFormComponent_ng_container_11_Template, 5, 2, "ng-container", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formData", ctx.formData)("disabled", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("validationCallback", ctx.confirmPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("useSubmitBehavior", true)("template", "changePasswordTemplate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dxTemplateOf", "changePasswordTemplate");
    }
  },
  directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__.DxFormComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiItemComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiValidationRuleComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxoLabelComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxoButtonOptionsComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__.DxTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__.DxLoadIndicatorComponent],
  encapsulation: 2
});
class ChangePasswordFormModule {}

ChangePasswordFormModule.ɵfac = function ChangePasswordFormModule_Factory(t) {
  return new (t || ChangePasswordFormModule)();
};

ChangePasswordFormModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ChangePasswordFormModule
});
ChangePasswordFormModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__.DxFormModule, devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__.DxLoadIndicatorModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ChangePasswordFormModule, {
    declarations: [ChangePasswordFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__.DxFormModule, devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__.DxLoadIndicatorModule],
    exports: [ChangePasswordFormComponent]
  });
})();

/***/ }),

/***/ 42823:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/create-account-form/create-account-form.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateAccountFormComponent": () => (/* binding */ CreateAccountFormComponent),
/* harmony export */   "CreateAccountFormModule": () => (/* binding */ CreateAccountFormModule)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/form */ 57962);
/* harmony import */ var devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/ui/load-indicator */ 26774);
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/ui/notify */ 61756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ 17253);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/core */ 35523);















function CreateAccountFormComponent_ng_container_28_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "dx-load-indicator", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", true);
  }
}

function CreateAccountFormComponent_ng_container_28_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Create a new account");
  }
}

function CreateAccountFormComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, CreateAccountFormComponent_ng_container_28_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CreateAccountFormComponent_ng_container_28_ng_template_3_Template, 1, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.loading)("ngIfElse", _r3);
  }
}

const _c0 = function () {
  return {
    stylingMode: "filled",
    placeholder: "Email",
    mode: "email"
  };
};

const _c1 = function () {
  return {
    stylingMode: "filled",
    placeholder: "Password",
    mode: "password"
  };
};

const _c2 = function () {
  return {
    stylingMode: "filled",
    placeholder: "Confirm Password",
    mode: "password"
  };
};

class CreateAccountFormComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.formData = {};

    this.confirmPassword = e => {
      return e.value === this.formData.password;
    };
  }

  onSubmit(e) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      e.preventDefault();
      const {
        email,
        password
      } = _this.formData;
      _this.loading = true;
      const result = yield _this.authService.createAccount(email, password);
      _this.loading = false;

      if (result.isOk) {
        _this.router.navigate(['/login-form']);
      } else {
        (0,devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__.default)(result.message, 'error', 2000);
      }
    })();
  }

}

CreateAccountFormComponent.ɵfac = function CreateAccountFormComponent_Factory(t) {
  return new (t || CreateAccountFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

CreateAccountFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CreateAccountFormComponent,
  selectors: [["app-create-account-form"]],
  decls: 29,
  vars: 15,
  consts: [[1, "create-account-form", 3, "submit"], [3, "formData", "disabled"], ["dataField", "email", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "required", "message", "Email is required"], ["type", "email", "message", "Email is invalid"], [3, "visible"], ["dataField", "password", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "required", "message", "Password is required"], ["dataField", "confirmedPassword", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "custom", "message", "Passwords do not match", 3, "validationCallback"], [1, "policy-info"], ["routerLink", "#"], ["itemType", "button"], ["width", "100%", "type", "default", 3, "useSubmitBehavior", "template"], [1, "login-link"], ["routerLink", "/login"], [4, "dxTemplate", "dxTemplateOf"], [1, "dx-button-text"], [4, "ngIf", "ngIfElse"], ["notLoading", ""], ["width", "24px", "height", "24px", 3, "visible"]],
  template: function CreateAccountFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function CreateAccountFormComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dx-form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "dxi-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxi-validation-rule", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxi-validation-rule", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "dxo-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "dxi-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "dxi-validation-rule", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "dxo-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "dxi-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "dxi-validation-rule", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "dxi-validation-rule", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "dxo-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "dxi-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " By creating an account, you agree to the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Terms of Service");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " and ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "dxi-item", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "dxo-button-options", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "dxi-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Have an account? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, CreateAccountFormComponent_ng_container_28_Template, 5, 2, "ng-container", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formData", ctx.formData)("disabled", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("validationCallback", ctx.confirmPassword);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("useSubmitBehavior", true)("template", "createAccountTemplate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dxTemplateOf", "createAccountTemplate");
    }
  },
  directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__.DxFormComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiItemComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiValidationRuleComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxoLabelComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxoButtonOptionsComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__.DxTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__.DxLoadIndicatorComponent],
  styles: [".create-account-form[_ngcontent-%COMP%]   .policy-info[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  color: rgba(0, 0, 0, 0.609);\n  font-size: 14px;\n  font-style: normal;\n}\n.create-account-form[_ngcontent-%COMP%]   .policy-info[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.609);\n}\n.create-account-form[_ngcontent-%COMP%]   .login-link[_ngcontent-%COMP%] {\n  color: #03a9f4;\n  font-size: 16px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1hY2NvdW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdGhlbWVzXFxnZW5lcmF0ZWRcXHZhcmlhYmxlcy5iYXNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUlJO0VBQ0UsMkJBQUE7QUFGTjtBQU1FO0VBQ0UsY0NmVTtFRGdCVixlQUFBO0VBQ0Esa0JBQUE7QUFKSiIsImZpbGUiOiJjcmVhdGUtYWNjb3VudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xuXG4uY3JlYXRlLWFjY291bnQtZm9ybSB7XG4gIC5wb2xpY3ktaW5mbyB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgY29sb3I6IHJnYmEoJGJhc2UtdGV4dC1jb2xvciwgYWxwaGEoJGJhc2UtdGV4dC1jb2xvcikgKiAwLjcpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG5cbiAgICBhIHtcbiAgICAgIGNvbG9yOiByZ2JhKCRiYXNlLXRleHQtY29sb3IsIGFscGhhKCRiYXNlLXRleHQtY29sb3IpICogMC43KTtcbiAgICB9XG4gIH1cblxuICAubG9naW4tbGluayB7XG4gICAgY29sb3I6ICRiYXNlLWFjY2VudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCIkYmFzZS1hY2NlbnQ6ICMwM2E5ZjQ7XG4kYmFzZS10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuJGJhc2UtYmc6ICNmZmY7XG4kYmFzZS1ib3JkZXItY29sb3I6ICNlMGUwZTA7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4iXX0= */"]
});
class CreateAccountFormModule {}

CreateAccountFormModule.ɵfac = function CreateAccountFormModule_Factory(t) {
  return new (t || CreateAccountFormModule)();
};

CreateAccountFormModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CreateAccountFormModule
});
CreateAccountFormModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__.DxFormModule, devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__.DxLoadIndicatorModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CreateAccountFormModule, {
    declarations: [CreateAccountFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__.DxFormModule, devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__.DxLoadIndicatorModule],
    exports: [CreateAccountFormComponent]
  });
})();

/***/ }),

/***/ 66526:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent),
/* harmony export */   "FooterModule": () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

const _c0 = ["*"];
class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], ngContentSelectors: _c0, decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n  color: rgba(0, 0, 0, 0.609);\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  padding-top: 20px;\n  padding-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQURGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5iYXNlLnNjc3NcIjtcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHJnYmEoJGJhc2UtdGV4dC1jb2xvciwgYWxwaGEoJGJhc2UtdGV4dC1jb2xvcikgKiAwLjcpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59XG4iXX0= */"] });
class FooterModule {
}
FooterModule.ɵfac = function FooterModule_Factory(t) { return new (t || FooterModule)(); };
FooterModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterModule });
FooterModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, { declarations: [FooterComponent], exports: [FooterComponent] }); })();


/***/ }),

/***/ 36290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent),
/* harmony export */   "HeaderModule": () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../user-panel/user-panel.component */ 83829);
/* harmony import */ var devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular/ui/button */ 4706);
/* harmony import */ var devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular/ui/toolbar */ 12805);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ 17253);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/core */ 35523);














const _c0 = function (a2) { return { icon: "menu", stylingMode: "text", onClick: a2 }; };
function HeaderComponent_dxi_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "dxi-item", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](1, _c0, ctx_r0.toggleMenu));
} }
function HeaderComponent_dxi_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "dxi-item", 6);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("text", ctx_r1.title);
} }
function HeaderComponent_div_5_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-user-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", ctx_r5.user)("menuItems", ctx_r5.userMenuItems);
} }
function HeaderComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "dx-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderComponent_div_5_div_2_Template, 2, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "content");
} }
function HeaderComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-user-panel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("user", ctx_r3.user)("menuItems", ctx_r3.userMenuItems);
} }
class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.menuToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.menuToggleEnabled = false;
        this.user = { username: '' };
        this.userMenuItems = [{
                text: '详细信息',
                icon: 'user',
                onClick: () => {
                    this.router.navigate(['/profile']);
                }
            },
            {
                text: '注销',
                icon: 'runner',
                onClick: () => {
                    this.authService.logOut();
                }
            }];
        this.toggleMenu = () => {
            this.menuToggle.emit();
        };
    }
    ngOnInit() {
        this.authService.getUser().then((e) => this.user = e.data);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { menuToggleEnabled: "menuToggleEnabled", title: "title" }, outputs: { menuToggle: "menuToggle" }, decls: 7, vars: 4, consts: [[1, "header-toolbar"], ["location", "before", "widget", "dxButton", "cssClass", "menu-button", 3, "options", 4, "ngIf"], ["location", "before", "cssClass", "header-title", 3, "text", 4, "ngIf"], ["location", "after", "locateInMenu", "auto", "menuItemTemplate", "menuItem"], [4, "dxTemplate", "dxTemplateOf"], ["location", "before", "widget", "dxButton", "cssClass", "menu-button", 3, "options"], ["location", "before", "cssClass", "header-title", 3, "text"], ["width", "210px", "height", "100%", "stylingMode", "text", 1, "user-button", "authorization"], ["menuMode", "context", 3, "user", "menuItems"], ["menuMode", "list", 3, "user", "menuItems"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "dx-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HeaderComponent_dxi_item_2_Template, 1, 3, "dxi-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HeaderComponent_dxi_item_3_Template, 1, 1, "dxi-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "dxi-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.menuToggleEnabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "item");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dxTemplateOf", "menuItem");
    } }, directives: [devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__.DxToolbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiItemComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__.DxTemplateDirective, devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_8__.DxButtonComponent, _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_0__.UserPanelComponent], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0px;\n  min-height: 100%;\n  height: 100%;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.content[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.content-block[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.screen-x-small[_ngcontent-%COMP%]   .content-block[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.responsive-paddings[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 800px;\n}\n\n.screen-large[_ngcontent-%COMP%]   .responsive-paddings[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.dx-card.wide-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-right: 0;\n  border-left: 0;\n}\n\n.with-footer[_ngcontent-%COMP%]    > .dx-scrollable-wrapper[_ngcontent-%COMP%]    > .dx-scrollable-container[_ngcontent-%COMP%]    > .dx-scrollable-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.with-footer[_ngcontent-%COMP%]    > .dx-scrollable-wrapper[_ngcontent-%COMP%]    > .dx-scrollable-container[_ngcontent-%COMP%]    > .dx-scrollable-content[_ngcontent-%COMP%]    > .dx-scrollview-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n  #treeview {\n  display: inline-block;\n}\n\n  .custom-container > .title {\n  text-align: center;\n  font-size: 2em;\n  margin: 5px;\n}\n\n  .custom-container {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(236, 236, 236, 0.1);\n  padding: 10px;\n  text-align: center;\n}\n\n  .custom-container > div {\n  text-indent: 2em;\n  text-align: left;\n  font-size: 1.5em;\n  margin: 5px;\n}\n\n  .custom-container > img {\n  width: 50%;\n  max-height: 100%;\n  margin-top: 5px;\n}\n\n  .buttons-column {\n  flex-wrap: nowrap;\n  display: flex;\n}\n\n  .buttons-column > div {\n  margin: 10px 10px;\n  text-align: center;\n}\n\n  .left-content {\n  margin: 10px 10px;\n  text-align: center;\n}\n\n  .right-content > img {\n  max-width: 100%;\n  max-height: 100%;\n  margin-top: 5px;\n}\n\n[_nghost-%COMP%] {\n  flex: 0 0 auto;\n  z-index: 1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n[_nghost-%COMP%]     .dx-toolbar .dx-toolbar-item.menu-button > .dx-toolbar-item-content .dx-icon {\n  color: #03a9f4;\n}\n\n  .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after {\n  padding: 0 40px;\n}\n\n.screen-x-small[_nghost-%COMP%]     .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after, .screen-x-small   [_nghost-%COMP%]     .dx-toolbar.header-toolbar .dx-toolbar-items-container .dx-toolbar-after {\n  padding: 0 20px;\n}\n\n  .dx-toolbar .dx-toolbar-item.menu-button {\n  width: 60px;\n  text-align: center;\n  padding: 0;\n}\n\n  .header-title .dx-item-content {\n  padding: 0;\n  margin: 0;\n}\n\n.dx-theme-generic[_nghost-%COMP%]   .dx-toolbar[_ngcontent-%COMP%], .dx-theme-generic   [_nghost-%COMP%]   .dx-toolbar[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n\n.dx-theme-generic[_nghost-%COMP%]   .user-button[_ngcontent-%COMP%]    > .dx-button-content[_ngcontent-%COMP%], .dx-theme-generic   [_nghost-%COMP%]   .user-button[_ngcontent-%COMP%]    > .dx-button-content[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkeC1zdHlsZXMuc2NzcyIsImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx0aGVtZXNcXGdlbmVyYXRlZFxcdmFyaWFibGVzLmJhc2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBRENFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURHQTtFQUNFLFNBQUE7QUNBRjs7QURFRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURJQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ0RGOztBREdFO0VBQ0UsYUFBQTtBQ0RKOztBREtBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFFRSxZQUFBO0FDSEY7O0FES0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0hKOztBRFNBO0VBQ0UscUJBQUE7QUNORjs7QURXQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNSRjs7QURXQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFHQSxhQUFBO0VBQ0Esa0JBQUE7QUNWRjs7QURhQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNWRjs7QURhQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNWRjs7QURZQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQ1RGOztBRFlBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRFlBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ1RGOztBRFlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1RGOztBQW5HQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0Esd0VBQUE7QUFzR0Y7O0FBcEdFO0VBQ0UsY0NUVTtBRCtHZDs7QUFsR0E7RUFDRSxlQUFBO0FBcUdGOztBQW5HRTtFQUNFLGVBQUE7QUFxR0o7O0FBakdBO0VBQ0UsV0RtQ3FCO0VDbENyQixrQkFBQTtFQUNBLFVBQUE7QUFvR0Y7O0FBakdBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFvR0Y7O0FBaEdFO0VBQ0UsZUFBQTtBQW1HSjs7QUFoR0U7RUFDRSxZQUFBO0FBa0dKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwsIGJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMS41O1xuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5cbi5jb250ZW50LWJsb2NrIHtcbiAgbWFyZ2luOiAwO1xuXG4gIC5zY3JlZW4teC1zbWFsbCAmIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuLnJlc3BvbnNpdmUtcGFkZGluZ3Mge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OjgwMHB4O1xuXG4gIC5zY3JlZW4tbGFyZ2UgJiB7XG4gICAgcGFkZGluZzogNDBweDtcbiAgfVxufVxuXG4uZHgtY2FyZC53aWRlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4ud2l0aC1mb290ZXIgPiAuZHgtc2Nyb2xsYWJsZS13cmFwcGVyID5cbi5keC1zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC5keC1zY3JvbGxhYmxlLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgJiA+IC5keC1zY3JvbGx2aWV3LWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbiRzaWRlLXBhbmVsLW1pbi13aWR0aDogNjBweDtcblxuOjpuZy1kZWVwICN0cmVldmlldyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi8vOjpuZy1kZWVwICNiYXNpbk92ZXJ2aWV3IHtcbi8vICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vL31cbjo6bmctZGVlcCAuY3VzdG9tLWNvbnRhaW5lciA+IC50aXRsZXtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyMzYsIDIzNiwgMC4xKTtcbiAgLy9ib3JkZXItd2lkdGg6IDVweDtcbiAgLy9ib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbS1jb250YWluZXIgPiBkaXZ7XG4gIHRleHQtaW5kZW50OiAyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogNXB4O1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbS1jb250YWluZXIgPiBpbWcge1xuICB3aWR0aDogNTAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG46Om5nLWRlZXAgLmJ1dHRvbnMtY29sdW1uIHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbjo6bmctZGVlcCAuYnV0dG9ucy1jb2x1bW4gPiBkaXZ7XG4gIG1hcmdpbjogMTBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6bmctZGVlcCAubGVmdC1jb250ZW50IHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5yaWdodC1jb250ZW50ID4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4iLCJodG1sLCBib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb250ZW50IHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5jb250ZW50IGgyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGVudC1ibG9jayB7XG4gIG1hcmdpbjogMDtcbn1cbi5zY3JlZW4teC1zbWFsbCAuY29udGVudC1ibG9jayB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5yZXNwb25zaXZlLXBhZGRpbmdzIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogODAwcHg7XG59XG4uc2NyZWVuLWxhcmdlIC5yZXNwb25zaXZlLXBhZGRpbmdzIHtcbiAgcGFkZGluZzogNDBweDtcbn1cblxuLmR4LWNhcmQud2lkZS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogMDtcbn1cblxuLndpdGgtZm9vdGVyID4gLmR4LXNjcm9sbGFibGUtd3JhcHBlciA+IC5keC1zY3JvbGxhYmxlLWNvbnRhaW5lciA+IC5keC1zY3JvbGxhYmxlLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud2l0aC1mb290ZXIgPiAuZHgtc2Nyb2xsYWJsZS13cmFwcGVyID4gLmR4LXNjcm9sbGFibGUtY29udGFpbmVyID4gLmR4LXNjcm9sbGFibGUtY29udGVudCA+IC5keC1zY3JvbGx2aWV3LWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG46Om5nLWRlZXAgI3RyZWV2aWV3IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbS1jb250YWluZXIgPiAudGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDVweDtcbn1cblxuOjpuZy1kZWVwIC5jdXN0b20tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjEpO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tLWNvbnRhaW5lciA+IGRpdiB7XG4gIHRleHQtaW5kZW50OiAyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogNXB4O1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbS1jb250YWluZXIgPiBpbWcge1xuICB3aWR0aDogNTAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbjo6bmctZGVlcCAuYnV0dG9ucy1jb2x1bW4ge1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuOjpuZy1kZWVwIC5idXR0b25zLWNvbHVtbiA+IGRpdiB7XG4gIG1hcmdpbjogMTBweCAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6bmctZGVlcCAubGVmdC1jb250ZW50IHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5yaWdodC1jb250ZW50ID4gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbjpob3N0IHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cbjpob3N0IDo6bmctZGVlcCAuZHgtdG9vbGJhciAuZHgtdG9vbGJhci1pdGVtLm1lbnUtYnV0dG9uID4gLmR4LXRvb2xiYXItaXRlbS1jb250ZW50IC5keC1pY29uIHtcbiAgY29sb3I6ICMwM2E5ZjQ7XG59XG5cbjo6bmctZGVlcCAuZHgtdG9vbGJhci5oZWFkZXItdG9vbGJhciAuZHgtdG9vbGJhci1pdGVtcy1jb250YWluZXIgLmR4LXRvb2xiYXItYWZ0ZXIge1xuICBwYWRkaW5nOiAwIDQwcHg7XG59XG46aG9zdC1jb250ZXh0KC5zY3JlZW4teC1zbWFsbCkgOjpuZy1kZWVwIC5keC10b29sYmFyLmhlYWRlci10b29sYmFyIC5keC10b29sYmFyLWl0ZW1zLWNvbnRhaW5lciAuZHgtdG9vbGJhci1hZnRlciB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuOjpuZy1kZWVwIC5keC10b29sYmFyIC5keC10b29sYmFyLWl0ZW0ubWVudS1idXR0b24ge1xuICB3aWR0aDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG46Om5nLWRlZXAgLmhlYWRlci10aXRsZSAuZHgtaXRlbS1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG46aG9zdC1jb250ZXh0KC5keC10aGVtZS1nZW5lcmljKSAuZHgtdG9vbGJhciB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjpob3N0LWNvbnRleHQoLmR4LXRoZW1lLWdlbmVyaWMpIC51c2VyLWJ1dHRvbiA+IC5keC1idXR0b24tY29udGVudCB7XG4gIHBhZGRpbmc6IDNweDtcbn0iLCIkYmFzZS1hY2NlbnQ6ICMwM2E5ZjQ7XG4kYmFzZS10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuJGJhc2UtYmc6ICNmZmY7XG4kYmFzZS1ib3JkZXItY29sb3I6ICNlMGUwZTA7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4iXX0= */"] });
class HeaderModule {
}
HeaderModule.ɵfac = function HeaderModule_Factory(t) { return new (t || HeaderModule)(); };
HeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HeaderModule });
HeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_8__.DxButtonModule,
            _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_0__.UserPanelModule,
            devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__.DxToolbarModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HeaderModule, { declarations: [HeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        devextreme_angular_ui_button__WEBPACK_IMPORTED_MODULE_8__.DxButtonModule,
        _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_0__.UserPanelModule,
        devextreme_angular_ui_toolbar__WEBPACK_IMPORTED_MODULE_4__.DxToolbarModule], exports: [HeaderComponent] }); })();


/***/ }),

/***/ 7667:
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* reexport safe */ _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent),
/* harmony export */   "FooterModule": () => (/* reexport safe */ _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterModule),
/* harmony export */   "HeaderComponent": () => (/* reexport safe */ _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent),
/* harmony export */   "HeaderModule": () => (/* reexport safe */ _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderModule),
/* harmony export */   "LoginFormComponent": () => (/* reexport safe */ _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__.LoginFormComponent),
/* harmony export */   "LoginFormModule": () => (/* reexport safe */ _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__.LoginFormModule),
/* harmony export */   "ResetPasswordFormComponent": () => (/* reexport safe */ _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordFormComponent),
/* harmony export */   "ResetPasswordFormModule": () => (/* reexport safe */ _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordFormModule),
/* harmony export */   "CreateAccountFormComponent": () => (/* reexport safe */ _create_account_form_create_account_form_component__WEBPACK_IMPORTED_MODULE_4__.CreateAccountFormComponent),
/* harmony export */   "CreateAccountFormModule": () => (/* reexport safe */ _create_account_form_create_account_form_component__WEBPACK_IMPORTED_MODULE_4__.CreateAccountFormModule),
/* harmony export */   "ChangePasswordFormComponent": () => (/* reexport safe */ _change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_5__.ChangePasswordFormComponent),
/* harmony export */   "ChangePasswordFormModule": () => (/* reexport safe */ _change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_5__.ChangePasswordFormModule),
/* harmony export */   "SideNavigationMenuComponent": () => (/* reexport safe */ _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_6__.SideNavigationMenuComponent),
/* harmony export */   "SideNavigationMenuModule": () => (/* reexport safe */ _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_6__.SideNavigationMenuModule),
/* harmony export */   "UserPanelComponent": () => (/* reexport safe */ _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_7__.UserPanelComponent),
/* harmony export */   "UserPanelModule": () => (/* reexport safe */ _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_7__.UserPanelModule)
/* harmony export */ });
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 66526);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 36290);
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form/login-form.component */ 58246);
/* harmony import */ var _reset_password_form_reset_password_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset-password-form/reset-password-form.component */ 64496);
/* harmony import */ var _create_account_form_create_account_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-account-form/create-account-form.component */ 42823);
/* harmony import */ var _change_password_form_change_password_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-form/change-password-form.component */ 5796);
/* harmony import */ var _side_navigation_menu_side_navigation_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./side-navigation-menu/side-navigation-menu.component */ 30220);
/* harmony import */ var _user_panel_user_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-panel/user-panel.component */ 83829);










/***/ }),

/***/ 58246:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/login-form/login-form.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFormComponent": () => (/* binding */ LoginFormComponent),
/* harmony export */   "LoginFormModule": () => (/* binding */ LoginFormModule)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/form */ 57962);
/* harmony import */ var devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/ui/load-indicator */ 26774);
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/ui/notify */ 61756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ 17253);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/core */ 35523);















function LoginFormComponent_ng_container_18_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "dx-load-indicator", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", true);
  }
}

function LoginFormComponent_ng_container_18_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "\u767B\u5F55");
  }
}

function LoginFormComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LoginFormComponent_ng_container_18_ng_container_2_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LoginFormComponent_ng_container_18_ng_template_3_Template, 1, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.loading)("ngIfElse", _r3);
  }
}

const _c0 = function () {
  return {
    stylingMode: "filled",
    placeholder: "\u7528\u6237\u540D",
    mode: "string"
  };
};

const _c1 = function () {
  return {
    stylingMode: "filled",
    placeholder: "\u5BC6\u7801",
    mode: "password"
  };
};

const _c2 = function () {
  return {
    class: "form-text"
  };
};

const _c3 = function (a1) {
  return {
    text: "\u8BB0\u4F4F\u6211",
    elementAttr: a1
  };
};

class LoginFormComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.formData = {};

    this.onCreateAccountClick = () => {
      this.router.navigate(['/create-account']);
    };
  }

  onSubmit(e) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      e.preventDefault();
      const {
        username,
        password,
        rememberMe
      } = _this.formData;
      _this.loading = true;
      const result = yield _this.authService.logIn(username, password, rememberMe);

      if (!result.isOk) {
        _this.loading = false;
        (0,devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__.default)(result.message, 'error', 2000);
      }
    })();
  }

}

LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
  return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

LoginFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: LoginFormComponent,
  selectors: [["app-login-form"]],
  decls: 19,
  vars: 17,
  consts: [[1, "login-form", 3, "submit"], [3, "formData", "disabled"], ["dataField", "username", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "required", "message", "\u8BF7\u586B\u5199\u7528\u6237\u540D"], [3, "visible"], ["dataField", "password", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "required", "message", "\u8BF7\u586B\u5199\u5BC6\u7801"], ["dataField", "rememberMe", "editorType", "dxCheckBox", 3, "editorOptions"], ["itemType", "button"], ["width", "100%", "type", "default", 3, "useSubmitBehavior", "template"], [1, "link"], ["routerLink", "/reset-password"], ["text", "\u521B\u5EFA\u65B0\u7528\u6237", "width", "100%", 3, "onClick"], [4, "dxTemplate", "dxTemplateOf"], [1, "dx-button-text"], [4, "ngIf", "ngIfElse"], ["notLoading", ""], ["width", "24px", "height", "24px", 3, "visible"]],
  template: function LoginFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function LoginFormComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dx-form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "dxi-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxi-validation-rule", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxo-label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "dxi-item", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "dxi-validation-rule", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "dxo-label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "dxi-item", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "dxo-label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "dxi-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "dxo-button-options", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "dxi-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u5FD8\u8BB0\u5BC6\u7801?");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "dxi-item", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "dxo-button-options", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, LoginFormComponent_ng_container_18_Template, 5, 2, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formData", ctx.formData)("disabled", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c2)));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("useSubmitBehavior", true)("template", "signInTemplate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("onClick", ctx.onCreateAccountClick);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dxTemplateOf", "signInTemplate");
    }
  },
  directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__.DxFormComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiItemComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiValidationRuleComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxoLabelComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxoButtonOptionsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__.DxTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__.DxLoadIndicatorComponent],
  styles: [".login-form[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  font-style: normal;\n}\n.login-form[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.login-form[_ngcontent-%COMP%]     .form-text {\n  margin: 10px 0;\n  color: rgba(0, 0, 0, 0.609);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0k7RUFDRSxxQkFBQTtBQUhOO0FBT0U7RUFDRSxjQUFBO0VBQ0EsMkJBQUE7QUFMSiIsImZpbGUiOiJsb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lcy9nZW5lcmF0ZWQvdmFyaWFibGVzLmJhc2Uuc2Nzc1wiO1xuXG5cbi5sb2dpbi1mb3JtIHtcbiAgLmxpbmsge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuXG4gICAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgOjpuZy1kZWVwIC5mb3JtLXRleHQge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGNvbG9yOiByZ2JhKCRiYXNlLXRleHQtY29sb3IsIGFscGhhKCRiYXNlLXRleHQtY29sb3IpICogMC43KTtcbiAgfVxufVxuIl19 */"]
});
class LoginFormModule {}

LoginFormModule.ɵfac = function LoginFormModule_Factory(t) {
  return new (t || LoginFormModule)();
};

LoginFormModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LoginFormModule
});
LoginFormModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__.DxFormModule, devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__.DxLoadIndicatorModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginFormModule, {
    declarations: [LoginFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__.DxFormModule, devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__.DxLoadIndicatorModule],
    exports: [LoginFormComponent]
  });
})();

/***/ }),

/***/ 64496:
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/reset-password-form/reset-password-form.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordFormComponent": () => (/* binding */ ResetPasswordFormComponent),
/* harmony export */   "ResetPasswordFormModule": () => (/* binding */ ResetPasswordFormModule)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! devextreme-angular/ui/form */ 57962);
/* harmony import */ var devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular/ui/load-indicator */ 26774);
/* harmony import */ var devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/ui/notify */ 61756);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ 17253);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 92298);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular/core */ 35523);















function ResetPasswordFormComponent_ng_container_13_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "dx-load-indicator", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", true);
  }
}

function ResetPasswordFormComponent_ng_container_13_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, "Reset my password");
  }
}

function ResetPasswordFormComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ResetPasswordFormComponent_ng_container_13_ng_container_2_Template, 2, 1, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ResetPasswordFormComponent_ng_container_13_ng_template_3_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.loading)("ngIfElse", _r3);
  }
}

const _c0 = function () {
  return {
    stylingMode: "filled",
    placeholder: "Email",
    mode: "email"
  };
};

const _c1 = function () {
  return {
    class: "submit-button"
  };
};

const notificationText = 'We\'ve sent a link to reset your password. Check your inbox.';
class ResetPasswordFormComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.formData = {};
  }

  onSubmit(e) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      e.preventDefault();
      const {
        email
      } = _this.formData;
      _this.loading = true;
      const result = yield _this.authService.resetPassword(email);
      _this.loading = false;

      if (result.isOk) {
        _this.router.navigate(['/login-form']);

        (0,devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__.default)(notificationText, 'success', 2500);
      } else {
        (0,devextreme_ui_notify__WEBPACK_IMPORTED_MODULE_1__.default)(result.message, 'error', 2000);
      }
    })();
  }

}

ResetPasswordFormComponent.ɵfac = function ResetPasswordFormComponent_Factory(t) {
  return new (t || ResetPasswordFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
};

ResetPasswordFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ResetPasswordFormComponent,
  selectors: [["app-reset-password-form"]],
  decls: 14,
  vars: 10,
  consts: [[1, "reset-password-form", 3, "submit"], [3, "formData", "disabled"], ["dataField", "email", "editorType", "dxTextBox", 3, "editorOptions"], ["type", "required", "message", "Email is required"], ["type", "email", "message", "Email is invalid"], [3, "visible"], ["itemType", "button"], ["width", "100%", "type", "default", 3, "useSubmitBehavior", "template", "elementAttr"], [1, "login-link"], ["routerLink", "/login"], [4, "dxTemplate", "dxTemplateOf"], [1, "dx-button-text"], [4, "ngIf", "ngIfElse"], ["notLoading", ""], ["width", "24px", "height", "24px", 3, "visible"]],
  template: function ResetPasswordFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("submit", function ResetPasswordFormComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "dx-form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "dxi-item", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "dxi-validation-rule", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "dxi-validation-rule", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "dxo-label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "dxi-item", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "dxo-button-options", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "dxi-item");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Return to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Sign In");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ResetPasswordFormComponent_ng_container_13_Template, 5, 2, "ng-container", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formData", ctx.formData)("disabled", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("editorOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("useSubmitBehavior", true)("template", "resetPasswordTemplate")("elementAttr", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dxTemplateOf", "resetPasswordTemplate");
    }
  },
  directives: [devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__.DxFormComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiItemComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxiValidationRuleComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxoLabelComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_6__.DxoButtonOptionsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_7__.DxTemplateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__.DxLoadIndicatorComponent],
  styles: [".reset-password-form[_ngcontent-%COMP%]     .submit-button {\n  margin-top: 10px;\n}\n.reset-password-form[_ngcontent-%COMP%]   .login-link[_ngcontent-%COMP%] {\n  color: #03a9f4;\n  font-size: 16px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdGhlbWVzXFxnZW5lcmF0ZWRcXHZhcmlhYmxlcy5iYXNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxnQkFBQTtBQUZKO0FBS0U7RUFDRSxjQ1JVO0VEU1YsZUFBQTtFQUNBLGtCQUFBO0FBSEoiLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5iYXNlLnNjc3NcIjtcblxuLnJlc2V0LXBhc3N3b3JkLWZvcm0ge1xuICA6Om5nLWRlZXAgLnN1Ym1pdC1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICAubG9naW4tbGluayB7XG4gICAgY29sb3I6ICRiYXNlLWFjY2VudDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4iLCIkYmFzZS1hY2NlbnQ6ICMwM2E5ZjQ7XG4kYmFzZS10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuJGJhc2UtYmc6ICNmZmY7XG4kYmFzZS1ib3JkZXItY29sb3I6ICNlMGUwZTA7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4iXX0= */"]
});
class ResetPasswordFormModule {}

ResetPasswordFormModule.ɵfac = function ResetPasswordFormModule_Factory(t) {
  return new (t || ResetPasswordFormModule)();
};

ResetPasswordFormModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ResetPasswordFormModule
});
ResetPasswordFormModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__.DxFormModule, devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__.DxLoadIndicatorModule]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ResetPasswordFormModule, {
    declarations: [ResetPasswordFormComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, devextreme_angular_ui_form__WEBPACK_IMPORTED_MODULE_5__.DxFormModule, devextreme_angular_ui_load_indicator__WEBPACK_IMPORTED_MODULE_9__.DxLoadIndicatorModule],
    exports: [ResetPasswordFormComponent]
  });
})();

/***/ }),

/***/ 30220:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/side-navigation-menu/side-navigation-menu.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavigationMenuComponent": () => (/* binding */ SideNavigationMenuComponent),
/* harmony export */   "SideNavigationMenuModule": () => (/* binding */ SideNavigationMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/tree-view */ 35166);
/* harmony import */ var _app_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app-navigation */ 64217);
/* harmony import */ var devextreme_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/events */ 82754);






const _c0 = ["*"];
class SideNavigationMenuComponent {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.selectedItemChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.openMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this._compactMode = false;
    }
    set selectedItem(value) {
        this._selectedItem = value;
        if (!this.menu.instance) {
            return;
        }
        this.menu.instance.selectItem(value);
    }
    get items() {
        if (!this._items) {
            this._items = _app_navigation__WEBPACK_IMPORTED_MODULE_0__.navigation.map((item) => {
                if (item.path && !(/^\//.test(item.path))) {
                    item.path = `/${item.path}`;
                }
                return Object.assign(Object.assign({}, item), { expanded: !this._compactMode });
            });
        }
        return this._items;
    }
    get compactMode() {
        return this._compactMode;
    }
    set compactMode(val) {
        this._compactMode = val;
        if (!this.menu.instance) {
            return;
        }
        if (val) {
            this.menu.instance.collapseAll();
        }
        else {
            this.menu.instance.expandItem(this._selectedItem);
        }
    }
    onItemClick(event) {
        this.selectedItemChanged.emit(event);
    }
    ngAfterViewInit() {
        devextreme_events__WEBPACK_IMPORTED_MODULE_1__.on(this.elementRef.nativeElement, 'dxclick', (e) => {
            this.openMenu.next(e);
        });
    }
    ngOnDestroy() {
        devextreme_events__WEBPACK_IMPORTED_MODULE_1__.off(this.elementRef.nativeElement, 'dxclick');
    }
}
SideNavigationMenuComponent.ɵfac = function SideNavigationMenuComponent_Factory(t) { return new (t || SideNavigationMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef)); };
SideNavigationMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SideNavigationMenuComponent, selectors: [["app-side-navigation-menu"]], viewQuery: function SideNavigationMenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_3__.DxTreeViewComponent, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
    } }, inputs: { selectedItem: "selectedItem", compactMode: "compactMode" }, outputs: { selectedItemChanged: "selectedItemChanged", openMenu: "openMenu" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "menu-container"], ["keyExpr", "path", "selectionMode", "single", "expandEvent", "click", "width", "100%", 3, "items", "focusStateEnabled", "onItemClick"]], template: function SideNavigationMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "dx-tree-view", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onItemClick", function SideNavigationMenuComponent_Template_dx_tree_view_onItemClick_2_listener($event) { return ctx.onItemClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", ctx.items)("focusStateEnabled", false);
    } }, directives: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_3__.DxTreeViewComponent], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0px;\n  min-height: 100%;\n  height: 100%;\n}\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.content[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.content-block[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.screen-x-small[_ngcontent-%COMP%]   .content-block[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.responsive-paddings[_ngcontent-%COMP%] {\n  padding: 20px;\n  min-height: 800px;\n}\n\n.screen-large[_ngcontent-%COMP%]   .responsive-paddings[_ngcontent-%COMP%] {\n  padding: 40px;\n}\n\n.dx-card.wide-card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-right: 0;\n  border-left: 0;\n}\n\n.with-footer[_ngcontent-%COMP%]    > .dx-scrollable-wrapper[_ngcontent-%COMP%]    > .dx-scrollable-container[_ngcontent-%COMP%]    > .dx-scrollable-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.with-footer[_ngcontent-%COMP%]    > .dx-scrollable-wrapper[_ngcontent-%COMP%]    > .dx-scrollable-container[_ngcontent-%COMP%]    > .dx-scrollable-content[_ngcontent-%COMP%]    > .dx-scrollview-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n  #treeview {\n  display: inline-block;\n}\n\n  .custom-container > .title {\n  text-align: center;\n  font-size: 2em;\n  margin: 5px;\n}\n\n  .custom-container {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(236, 236, 236, 0.1);\n  padding: 10px;\n  text-align: center;\n}\n\n  .custom-container > div {\n  text-indent: 2em;\n  text-align: left;\n  font-size: 1.5em;\n  margin: 5px;\n}\n\n  .custom-container > img {\n  width: 50%;\n  max-height: 100%;\n  margin-top: 5px;\n}\n\n  .buttons-column {\n  flex-wrap: nowrap;\n  display: flex;\n}\n\n  .buttons-column > div {\n  margin: 10px 10px;\n  text-align: center;\n}\n\n  .left-content {\n  margin: 10px 10px;\n  text-align: center;\n}\n\n  .right-content > img {\n  max-width: 100%;\n  max-height: 100%;\n  margin-top: 5px;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  height: 100%;\n  width: 250px !important;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%] {\n  min-height: 100%;\n  display: flex;\n  flex: 1;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview {\n  white-space: nowrap;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-item {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-item .dx-icon {\n  width: 60px !important;\n  margin: 0 !important;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node {\n  padding: 0 0 !important;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-toggle-item-visibility {\n  right: 10px;\n  left: auto;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-rtl .dx-treeview-toggle-item-visibility {\n  left: 10px;\n  right: auto;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node[aria-level=\"1\"] {\n  font-weight: bold;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node[aria-level=\"2\"] .dx-treeview-item-content {\n  font-weight: normal;\n  padding: 0 60px;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected:not(.dx-state-focused) > .dx-treeview-item {\n  background: transparent;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected > .dx-treeview-item * {\n  color: #03a9f4;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]     .dx-treeview .dx-treeview-node-container .dx-treeview-node:not(.dx-state-focused) > .dx-treeview-item.dx-state-hover {\n  background-color: white;\n}\n\n[_nghost-%COMP%]   .menu-container[_ngcontent-%COMP%]   .dx-theme-generic[_nghost-%COMP%]    .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected.dx-state-focused > .dx-treeview-item *, .dx-theme-generic   [_nghost-%COMP%]    .dx-treeview .dx-treeview-node-container .dx-treeview-node.dx-state-selected.dx-state-focused > .dx-treeview-item * {\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkeC1zdHlsZXMuc2NzcyIsInNpZGUtbmF2aWdhdGlvbi1tZW51LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHRoZW1lc1xcZ2VuZXJhdGVkXFx2YXJpYWJsZXMuYWRkaXRpb25hbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0UsU0FBQTtBQ0FGOztBREVFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBRElBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDREY7O0FER0U7RUFDRSxhQUFBO0FDREo7O0FES0E7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNGRjs7QURLQTtFQUVFLFlBQUE7QUNIRjs7QURLRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FEU0E7RUFDRSxxQkFBQTtBQ05GOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1JGOztBRFdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUdBLGFBQUE7RUFDQSxrQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ1ZGOztBRGFBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1ZGOztBRFlBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0FDVEY7O0FEWUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDVEY7O0FEWUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDVEY7O0FEWUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDVEY7O0FBbkdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFzR0Y7O0FBcEdFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtBQXNHSjs7QUFwR0k7RUFFRSxtQkFBQTtBQXFHTjs7QUFqR007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFtR1I7O0FBakdRO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtBQW1HVjs7QUE3Rk07RUFDRSx1QkFBQTtBQStGUjs7QUE1Rk07RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQThGUjs7QUEzRk07RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQTZGUjs7QUF2RlE7RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0FBeUZWOztBQXRGUTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQXdGVjs7QUE5RVU7RUFDRSx1QkFBQTtBQWdGWjs7QUE3RVU7RUFDRSxjQ3hFRTtBRHVKZDs7QUE1RVU7RUFDRSx1QkFBQTtBQThFWjs7QUF2RU07RUFDRSxjQUFBO0FBeUVSIiwiZmlsZSI6InNpZGUtbmF2aWdhdGlvbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29udGVudCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG5cbiAgaDIge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cblxuLmNvbnRlbnQtYmxvY2sge1xuICBtYXJnaW46IDA7XG5cbiAgLnNjcmVlbi14LXNtYWxsICYge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxufVxuXG4ucmVzcG9uc2l2ZS1wYWRkaW5ncyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6ODAwcHg7XG5cbiAgLnNjcmVlbi1sYXJnZSAmIHtcbiAgICBwYWRkaW5nOiA0MHB4O1xuICB9XG59XG5cbi5keC1jYXJkLndpZGUtY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG5cbi53aXRoLWZvb3RlciA+IC5keC1zY3JvbGxhYmxlLXdyYXBwZXIgPlxuLmR4LXNjcm9sbGFibGUtY29udGFpbmVyID4gLmR4LXNjcm9sbGFibGUtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcblxuICAmID4gLmR4LXNjcm9sbHZpZXctY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuJHNpZGUtcGFuZWwtbWluLXdpZHRoOiA2MHB4O1xuXG46Om5nLWRlZXAgI3RyZWV2aWV3IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLy86Om5nLWRlZXAgI2Jhc2luT3ZlcnZpZXcge1xuLy8gIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vfVxuOjpuZy1kZWVwIC5jdXN0b20tY29udGFpbmVyID4gLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDVweDtcbn1cblxuOjpuZy1kZWVwIC5jdXN0b20tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjEpO1xuICAvL2JvcmRlci13aWR0aDogNXB4O1xuICAvL2JvcmRlci1zdHlsZTogZGFzaGVkO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tLWNvbnRhaW5lciA+IGRpdntcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tLWNvbnRhaW5lciA+IGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbjo6bmctZGVlcCAuYnV0dG9ucy1jb2x1bW4ge1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuOjpuZy1kZWVwIC5idXR0b25zLWNvbHVtbiA+IGRpdntcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5sZWZ0LWNvbnRlbnQge1xuICBtYXJnaW46IDEwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Om5nLWRlZXAgLnJpZ2h0LWNvbnRlbnQgPiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbiIsImh0bWwsIGJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNvbnRlbnQge1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLmNvbnRlbnQgaDIge1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb250ZW50LWJsb2NrIHtcbiAgbWFyZ2luOiAwO1xufVxuLnNjcmVlbi14LXNtYWxsIC5jb250ZW50LWJsb2NrIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnJlc3BvbnNpdmUtcGFkZGluZ3Mge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiA4MDBweDtcbn1cbi5zY3JlZW4tbGFyZ2UgLnJlc3BvbnNpdmUtcGFkZGluZ3Mge1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG4uZHgtY2FyZC53aWRlLWNhcmQge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4ud2l0aC1mb290ZXIgPiAuZHgtc2Nyb2xsYWJsZS13cmFwcGVyID4gLmR4LXNjcm9sbGFibGUtY29udGFpbmVyID4gLmR4LXNjcm9sbGFibGUtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi53aXRoLWZvb3RlciA+IC5keC1zY3JvbGxhYmxlLXdyYXBwZXIgPiAuZHgtc2Nyb2xsYWJsZS1jb250YWluZXIgPiAuZHgtc2Nyb2xsYWJsZS1jb250ZW50ID4gLmR4LXNjcm9sbHZpZXctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAjdHJlZXZpZXcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tLWNvbnRhaW5lciA+IC50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogNXB4O1xufVxuXG46Om5nLWRlZXAgLmN1c3RvbS1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDAuMSk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5jdXN0b20tY29udGFpbmVyID4gZGl2IHtcbiAgdGV4dC1pbmRlbnQ6IDJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tLWNvbnRhaW5lciA+IGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuOjpuZy1kZWVwIC5idXR0b25zLWNvbHVtbiB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG46Om5nLWRlZXAgLmJ1dHRvbnMtY29sdW1uID4gZGl2IHtcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuOjpuZy1kZWVwIC5sZWZ0LWNvbnRlbnQge1xuICBtYXJnaW46IDEwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46Om5nLWRlZXAgLnJpZ2h0LWNvbnRlbnQgPiBpbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IC5keC10cmVldmlldy1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXRyZWV2aWV3LWl0ZW0gLmR4LWljb24ge1xuICB3aWR0aDogNjBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbjpob3N0IC5tZW51LWNvbnRhaW5lciA6Om5nLWRlZXAgLmR4LXRyZWV2aWV3IC5keC10cmVldmlldy1ub2RlIHtcbiAgcGFkZGluZzogMCAwICFpbXBvcnRhbnQ7XG59XG46aG9zdCAubWVudS1jb250YWluZXIgOjpuZy1kZWVwIC5keC10cmVldmlldyAuZHgtdHJlZXZpZXctdG9nZ2xlLWl0ZW0tdmlzaWJpbGl0eSB7XG4gIHJpZ2h0OiAxMHB4O1xuICBsZWZ0OiBhdXRvO1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXJ0bCAuZHgtdHJlZXZpZXctdG9nZ2xlLWl0ZW0tdmlzaWJpbGl0eSB7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiBhdXRvO1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXRyZWV2aWV3LW5vZGVbYXJpYS1sZXZlbD1cIjFcIl0ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG59XG46aG9zdCAubWVudS1jb250YWluZXIgOjpuZy1kZWVwIC5keC10cmVldmlldyAuZHgtdHJlZXZpZXctbm9kZVthcmlhLWxldmVsPVwiMlwiXSAuZHgtdHJlZXZpZXctaXRlbS1jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcGFkZGluZzogMCA2MHB4O1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXRyZWV2aWV3LW5vZGUtY29udGFpbmVyIC5keC10cmVldmlldy1ub2RlLmR4LXN0YXRlLXNlbGVjdGVkOm5vdCguZHgtc3RhdGUtZm9jdXNlZCkgPiAuZHgtdHJlZXZpZXctaXRlbSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXRyZWV2aWV3LW5vZGUtY29udGFpbmVyIC5keC10cmVldmlldy1ub2RlLmR4LXN0YXRlLXNlbGVjdGVkID4gLmR4LXRyZWV2aWV3LWl0ZW0gKiB7XG4gIGNvbG9yOiAjMDNhOWY0O1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDo6bmctZGVlcCAuZHgtdHJlZXZpZXcgLmR4LXRyZWV2aWV3LW5vZGUtY29udGFpbmVyIC5keC10cmVldmlldy1ub2RlOm5vdCguZHgtc3RhdGUtZm9jdXNlZCkgPiAuZHgtdHJlZXZpZXctaXRlbS5keC1zdGF0ZS1ob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuOmhvc3QgLm1lbnUtY29udGFpbmVyIDpob3N0LWNvbnRleHQoLmR4LXRoZW1lLWdlbmVyaWMpIDo6bmctZGVlcC5keC10cmVldmlldyAuZHgtdHJlZXZpZXctbm9kZS1jb250YWluZXIgLmR4LXRyZWV2aWV3LW5vZGUuZHgtc3RhdGUtc2VsZWN0ZWQuZHgtc3RhdGUtZm9jdXNlZCA+IC5keC10cmVldmlldy1pdGVtICoge1xuICBjb2xvcjogaW5oZXJpdDtcbn0iLCIkYmFzZS1hY2NlbnQ6ICMwM2E5ZjQ7XG4kYmFzZS10ZXh0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuJGJhc2UtYmc6ICNmZmY7XG4kYmFzZS1ib3JkZXItY29sb3I6ICNlMGUwZTA7XG4kYmFzZS1ib3JkZXItcmFkaXVzOiA0cHg7XG4iXX0= */"] });
class SideNavigationMenuModule {
}
SideNavigationMenuModule.ɵfac = function SideNavigationMenuModule_Factory(t) { return new (t || SideNavigationMenuModule)(); };
SideNavigationMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SideNavigationMenuModule });
SideNavigationMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_3__.DxTreeViewModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SideNavigationMenuModule, { declarations: [SideNavigationMenuComponent], imports: [devextreme_angular_ui_tree_view__WEBPACK_IMPORTED_MODULE_3__.DxTreeViewModule], exports: [SideNavigationMenuComponent] }); })();


/***/ }),

/***/ 83829:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/user-panel/user-panel.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPanelComponent": () => (/* binding */ UserPanelComponent),
/* harmony export */   "UserPanelModule": () => (/* binding */ UserPanelModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! devextreme-angular/ui/list */ 59382);
/* harmony import */ var devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme-angular/ui/context-menu */ 13964);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);







const _c0 = function () { return { my: "top", at: "bottom" }; };
function UserPanelComponent_dx_context_menu_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dx-context-menu", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.menuItems)("position", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function UserPanelComponent_dx_list_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dx-list", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.menuItems);
} }
class UserPanelComponent {
    constructor() { }
}
UserPanelComponent.ɵfac = function UserPanelComponent_Factory(t) { return new (t || UserPanelComponent)(); };
UserPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserPanelComponent, selectors: [["app-user-panel"]], inputs: { menuItems: "menuItems", menuMode: "menuMode", user: "user" }, decls: 8, vars: 3, consts: [[1, "user-panel"], [1, "user-info"], [1, "image-container"], [1, "user-image"], [1, "user-name"], ["target", ".user-button", "showEvent", "dxclick", "width", "210px", "cssClass", "user-menu", 3, "items", "position", 4, "ngIf"], ["class", "dx-toolbar-menu-action", 3, "items", 4, "ngIf"], ["target", ".user-button", "showEvent", "dxclick", "width", "210px", "cssClass", "user-menu", 3, "items", "position"], [1, "dx-toolbar-menu-action", 3, "items"]], template: function UserPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserPanelComponent_dx_context_menu_6_Template, 1, 3, "dx-context-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserPanelComponent_dx_list_7_Template, 1, 1, "dx-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user == null ? null : ctx.user.username, " \u5DF2\u767B\u5F55");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuMode === "context");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuMode === "list");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_2__.DxContextMenuComponent, devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_3__.DxListComponent], styles: [".user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.dx-toolbar-menu-section[_nghost-%COMP%]   .user-info[_ngcontent-%COMP%], .dx-toolbar-menu-section   [_nghost-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  padding: 10px 6px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.user-info[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 50%;\n  height: 30px;\n  width: 30px;\n  margin: 0 4px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);\n}\n.user-info[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .user-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: url(\"https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png\") no-repeat #fff;\n  background-size: cover;\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.87);\n  margin: 0 9px;\n}\n.user-panel[_ngcontent-%COMP%]     .dx-list-item .dx-icon {\n  vertical-align: middle;\n  color: rgba(0, 0, 0, 0.87);\n  margin-right: 16px;\n}\n.user-panel[_ngcontent-%COMP%]     .dx-rtl .dx-list-item .dx-icon {\n  margin-right: 0;\n  margin-left: 16px;\n}\n  .dx-context-menu.user-menu.dx-rtl .dx-submenu .dx-menu-items-container .dx-icon {\n  margin-left: 16px;\n}\n  .dx-context-menu.user-menu .dx-submenu .dx-menu-items-container .dx-icon {\n  margin-right: 16px;\n}\n  .dx-context-menu.user-menu .dx-menu-item .dx-menu-item-content {\n  padding: 3px 15px 4px;\n}\n  .dx-theme-generic .user-menu .dx-menu-item-content .dx-menu-item-text {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdGhlbWVzXFxnZW5lcmF0ZWRcXHZhcmlhYmxlcy5iYXNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSwyQ0FBQTtBQURKO0FBSUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSx5Q0FBQTtBQUZKO0FBSUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdIQUFBO0VBQ0Esc0JBQUE7QUFGTjtBQU1FO0VBQ0UsZUFBQTtFQUNBLDBCQzdCYztFRDhCZCxhQUFBO0FBSko7QUFTRTtFQUNFLHNCQUFBO0VBQ0EsMEJDckNjO0VEc0NkLGtCQUFBO0FBTko7QUFRRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQU5KO0FBWUk7RUFDRSxpQkFBQTtBQVROO0FBWUU7RUFDRSxrQkFBQTtBQVZKO0FBWUU7RUFDSSxxQkFBQTtBQVZOO0FBY0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBWEYiLCJmaWxlIjoidXNlci1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZXMvZ2VuZXJhdGVkL3ZhcmlhYmxlcy5iYXNlLnNjc3NcIjtcblxuLnVzZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgOmhvc3QtY29udGV4dCguZHgtdG9vbGJhci1tZW51LXNlY3Rpb24pICYge1xuICAgIHBhZGRpbmc6IDEwcHggNnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cblxuICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgbWFyZ2luOiAwIDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xNSk7XG5cbiAgICAudXNlci1pbWFnZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vanMuZGV2ZXhwcmVzcy5jb20vRGVtb3MvV2lkZ2V0c0dhbGxlcnkvSlNEZW1vcy9pbWFnZXMvZW1wbG95ZWVzLzA2LnBuZ1wiKSBuby1yZXBlYXQgI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICB9XG5cbiAgLnVzZXItbmFtZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAkYmFzZS10ZXh0LWNvbG9yO1xuICAgIG1hcmdpbjogMCA5cHg7XG4gIH1cbn1cblxuLnVzZXItcGFuZWwgOjpuZy1kZWVwIHtcbiAgLmR4LWxpc3QtaXRlbSAuZHgtaWNvbiB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjb2xvcjogJGJhc2UtdGV4dC1jb2xvcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIH1cbiAgLmR4LXJ0bCAuZHgtbGlzdC1pdGVtIC5keC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIH1cbn1cblxuOjpuZy1kZWVwIC5keC1jb250ZXh0LW1lbnUudXNlci1tZW51IHtcbiAgJi5keC1ydGwge1xuICAgIC5keC1zdWJtZW51IC5keC1tZW51LWl0ZW1zLWNvbnRhaW5lciAuZHgtaWNvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICB9XG4gIH1cbiAgLmR4LXN1Ym1lbnUgLmR4LW1lbnUtaXRlbXMtY29udGFpbmVyIC5keC1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIH1cbiAgLmR4LW1lbnUtaXRlbSAuZHgtbWVudS1pdGVtLWNvbnRlbnQge1xuICAgICAgcGFkZGluZzogM3B4IDE1cHggNHB4O1xuICB9XG59XG5cbjo6bmctZGVlcCAuZHgtdGhlbWUtZ2VuZXJpYyAudXNlci1tZW51IC5keC1tZW51LWl0ZW0tY29udGVudCAuZHgtbWVudS1pdGVtLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuIiwiJGJhc2UtYWNjZW50OiAjMDNhOWY0O1xuJGJhc2UtdGV4dC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiRiYXNlLWJnOiAjZmZmO1xuJGJhc2UtYm9yZGVyLWNvbG9yOiAjZTBlMGUwO1xuJGJhc2UtYm9yZGVyLXJhZGl1czogNHB4O1xuIl19 */"] });
class UserPanelModule {
}
UserPanelModule.ɵfac = function UserPanelModule_Factory(t) { return new (t || UserPanelModule)(); };
UserPanelModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserPanelModule });
UserPanelModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_3__.DxListModule,
            devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_2__.DxContextMenuModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserPanelModule, { declarations: [UserPanelComponent], imports: [devextreme_angular_ui_list__WEBPACK_IMPORTED_MODULE_3__.DxListModule,
        devextreme_angular_ui_context_menu__WEBPACK_IMPORTED_MODULE_2__.DxContextMenuModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule], exports: [UserPanelComponent] }); })();


/***/ }),

/***/ 47782:
/*!**************************************************!*\
  !*** ./src/app/shared/models/custom-response.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomResponse": () => (/* binding */ CustomResponse)
/* harmony export */ });
class CustomResponse {
}


/***/ }),

/***/ 48780:
/*!*********************************************************!*\
  !*** ./src/app/shared/models/emergency-organization.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyOrganization": () => (/* binding */ EmergencyOrganization)
/* harmony export */ });
/* harmony import */ var _file_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-path */ 46226);

class EmergencyOrganization {
    constructor() {
        this.emergencyorgimagepath = new _file_path__WEBPACK_IMPORTED_MODULE_0__.FilePath();
        this.floodwaterdepthimagepath = new _file_path__WEBPACK_IMPORTED_MODULE_0__.FilePath();
        this.arrivedtimeimagepath = new _file_path__WEBPACK_IMPORTED_MODULE_0__.FilePath();
        this.evacuationimagepath = new _file_path__WEBPACK_IMPORTED_MODULE_0__.FilePath();
        this.emergencyprocessimagepath = new _file_path__WEBPACK_IMPORTED_MODULE_0__.FilePath();
    }
}


/***/ }),

/***/ 49716:
/*!*************************************************!*\
  !*** ./src/app/shared/models/emergency-plan.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyPlan": () => (/* binding */ EmergencyPlan)
/* harmony export */ });
class EmergencyPlan {
}


/***/ }),

/***/ 46226:
/*!********************************************!*\
  !*** ./src/app/shared/models/file-path.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilePath": () => (/* binding */ FilePath)
/* harmony export */ });
class FilePath {
    constructor() {
        this.filename = "";
        this.storename = "";
        this.path = "";
        this.fileurl = "";
    }
}


/***/ }),

/***/ 30006:
/*!***************************************************!*\
  !*** ./src/app/shared/models/reservoir-detail.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservoirDetail": () => (/* binding */ ReservoirDetail)
/* harmony export */ });
/* harmony import */ var _file_path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-path */ 46226);

class ReservoirDetail {
    constructor() {
        this.infonatureimagepath = new _file_path__WEBPACK_IMPORTED_MODULE_0__.FilePath();
        this.infoprojectimagepath = new _file_path__WEBPACK_IMPORTED_MODULE_0__.FilePath();
        this.infoprojectlayoutimagepath = new _file_path__WEBPACK_IMPORTED_MODULE_0__.FilePath();
        this.infosectionimagepath = new _file_path__WEBPACK_IMPORTED_MODULE_0__.FilePath();
        this.infogeoimagepath = new _file_path__WEBPACK_IMPORTED_MODULE_0__.FilePath();
    }
}


/***/ }),

/***/ 77602:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/app-info.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInfoService": () => (/* binding */ AppInfoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class AppInfoService {
    constructor() { }
    get title() {
        return '兴安盟超标准洪水水库应急调度';
    }
    get currentYear() {
        return new Date().getFullYear();
    }
}
AppInfoService.ɵfac = function AppInfoService_Factory(t) { return new (t || AppInfoService)(); };
AppInfoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppInfoService, factory: AppInfoService.ɵfac });


/***/ }),

/***/ 10629:
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService),
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);




const defaultPath = '/';
const defaultUser = {
  username: 'Test',
  avatarUrl: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png',
  token: ""
  /*"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYzNDkxMTI2MX0.KunVWamDwRq5V90giF5H5zHm1IhG0sNin6adsq39k3As8etyaHqfMAfOSmdWRlxYhc5yZ5RqD6V8fxWhhhdA2g"*/
  ,
  reservoir: 11
};
class AuthService {
  constructor(router, httpClient) {
    this.router = router;
    this.httpClient = httpClient;
    this._user = defaultUser; // private _api: string = "http://localhost:4200/api/";

    this._api = "http://8.136.105.11:6060/api/";
    this._authUrl = this._api + "auth/login";
    this._lastAuthenticatedPath = defaultPath;
  } // private store: LocalStore;


  get loggedIn() {
    var _a, _b;

    return ((_a = this._user) === null || _a === void 0 ? void 0 : _a.token) !== undefined && ((_b = this._user) === null || _b === void 0 ? void 0 : _b.token) !== ""; // return !!this._user;
  }

  set lastAuthenticatedPath(value) {
    this._lastAuthenticatedPath = value;
  }

  logIn(username, password, rememberMe) {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        // Send request
        let body = {
          username: username,
          password: password,
          rememberMe: rememberMe
        };
        const response = yield _this.httpClient.post(_this._authUrl, body).toPromise();
        const token = response.data;
        console.log(username, password, rememberMe);
        _this._user = Object.assign(Object.assign({}, defaultUser), {
          username
        });
        _this._user.token = token; // this.store = new LocalStore({
        //   key:'_user',
        //   data: [this._user]
        // })

        yield _this.router.navigate([_this._lastAuthenticatedPath]);
        return {
          isOk: true,
          data: _this._user
        };
      } catch (_a) {
        return {
          isOk: false,
          message: "认证失败"
        };
      }
    })();
  }

  getUser() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        // Send request
        if (_this2._user === undefined) {
          return {
            isOK: false,
            data: null
          };
        }

        return {
          isOk: true,
          data: _this2._user
        };
      } catch (_a) {
        return {
          isOk: false,
          data: null
        };
      }
    })();
  }

  setCurrentReservoir(id) {
    var _this3 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this3._user != null) {
        _this3._user.reservoir = id;
      }
    })();
  }

  createAccount(email, password) {
    var _this4 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        // Send request
        console.log(email, password);

        _this4.router.navigate(['/create-account']);

        return {
          isOk: true
        };
      } catch (_a) {
        return {
          isOk: false,
          message: "创建账户失败"
        };
      }
    })();
  }

  changePassword(email, recoveryCode) {
    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        // Send request
        console.log(email, recoveryCode);
        return {
          isOk: true
        };
      } catch (_a) {
        return {
          isOk: false,
          message: "修改密码失败"
        };
      }
    })();
  }

  resetPassword(email) {
    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      try {
        // Send request
        console.log(email);
        return {
          isOk: true
        };
      } catch (_a) {
        return {
          isOk: false,
          message: "充值密码失败"
        };
      }
    })();
  }

  logOut() {
    var _this5 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this5._user = null;

      _this5.router.navigate(['/login-form']);
    })();
  }

  getApiUrl() {
    return this._api;
  }

}

AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};

AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac
});
class AuthGuardService {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }

  canActivate(route) {
    var _a, _b;

    const isLoggedIn = this.authService.loggedIn;
    const isAuthForm = ['login-form', 'reset-password', 'create-account', 'change-password/:recoveryCode'].includes(((_a = route.routeConfig) === null || _a === void 0 ? void 0 : _a.path) || defaultPath);

    if (isLoggedIn && isAuthForm) {
      this.authService.lastAuthenticatedPath = defaultPath;
      this.router.navigate([defaultPath]);
      return false;
    }

    if (!isLoggedIn && !isAuthForm) {
      this.router.navigate(['/login-form']);
    }

    if (isLoggedIn) {
      this.authService.lastAuthenticatedPath = ((_b = route.routeConfig) === null || _b === void 0 ? void 0 : _b.path) || defaultPath;
    }

    return isLoggedIn || isAuthForm;
  }

}

AuthGuardService.ɵfac = function AuthGuardService_Factory(t) {
  return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](AuthService));
};

AuthGuardService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuardService,
  factory: AuthGuardService.ɵfac
});

/***/ }),

/***/ 98442:
/*!**************************************************************!*\
  !*** ./src/app/shared/services/emergency-manager.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyManagerService": () => (/* binding */ EmergencyManagerService)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 10629);




class EmergencyManagerService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
  }

  getEmergencyManager() {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      _this.user = (_a = yield _this.authService.getUser()) === null || _a === void 0 ? void 0 : _a.data;
      _this.headers = {
        Authorization: 'Bearer ' + ((_b = _this.user) === null || _b === void 0 ? void 0 : _b.token)
      };
      _this.reservoir = (_c = _this.user) === null || _c === void 0 ? void 0 : _c.reservoir;
      let person;
      let postUrl;
      postUrl = _this.authService.getApiUrl() + "tEmergencyManager" + "/list";
      const httpParams = {
        "reservoirid": _this.reservoir
      };
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      const result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
      person = result.data;
      return person;
    })();
  }

}

EmergencyManagerService.ɵfac = function EmergencyManagerService_Factory(t) {
  return new (t || EmergencyManagerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};

EmergencyManagerService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: EmergencyManagerService,
  factory: EmergencyManagerService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 30551:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/emergency-org.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmergencyOrgService": () => (/* binding */ EmergencyOrgService)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _models_custom_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/custom-response */ 47782);
/* harmony import */ var _models_file_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/file-path */ 46226);
/* harmony import */ var _models_emergency_organization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/emergency-organization */ 48780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ 10629);







class EmergencyOrgService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
  }

  getEmergencyOrg() {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      _this.user = (_a = yield _this.authService.getUser()) === null || _a === void 0 ? void 0 : _a.data;
      _this.headers = {
        Authorization: 'Bearer ' + ((_b = _this.user) === null || _b === void 0 ? void 0 : _b.token)
      };
      _this.url = _this.authService.getApiUrl();
      let reservoir = (_c = _this.user) === null || _c === void 0 ? void 0 : _c.reservoir;
      _this.url = _this.authService.getApiUrl();
      let resultObj = new _models_emergency_organization__WEBPACK_IMPORTED_MODULE_3__.EmergencyOrganization();
      let postUrl;
      postUrl = _this.url + "tEmergencyOrg" + "/list";
      const httpParams = {
        "reservoirid": reservoir
      };
      let data;
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      const result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
      data = result.data[0];
      data.emergencyorgimagepath = yield _this.getImagePath(data.emergencyorgimage);
      data.floodwaterdepthimagepath = yield _this.getImagePath(data.floodwaterdepthimage);
      data.arrivedtimeimagepath = yield _this.getImagePath(data.arrivedtimeimage);
      data.evacuationimagepath = yield _this.getImagePath(data.evacuationimage);
      data.emergencyprocessimagepath = yield _this.getImagePath(data.emergencyprocessimage);
      return data;
    })();
  }

  getHeadquarters() {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      _this2.user = (_a = yield _this2.authService.getUser()) === null || _a === void 0 ? void 0 : _a.data;
      _this2.headers = {
        Authorization: 'Bearer ' + ((_b = _this2.user) === null || _b === void 0 ? void 0 : _b.token)
      };
      _this2.url = _this2.authService.getApiUrl();
      let reservoir = (_c = _this2.user) === null || _c === void 0 ? void 0 : _c.reservoir;
      _this2.url = _this2.authService.getApiUrl();
      let postUrl;
      postUrl = _this2.url + "tHeadquarters" + "/list";
      const httpParams = {
        "reservoirid": reservoir
      };
      let data;
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers,
        body: httpParams
      };
      const result = yield _this2.http.post(postUrl, httpParams, httpOptions).toPromise();
      data = result.data;
      return data;
    })();
  }

  getExperts() {
    var _this3 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      _this3.user = (_a = yield _this3.authService.getUser()) === null || _a === void 0 ? void 0 : _a.data;
      _this3.headers = {
        Authorization: 'Bearer ' + ((_b = _this3.user) === null || _b === void 0 ? void 0 : _b.token)
      };
      _this3.url = _this3.authService.getApiUrl();
      let reservoir = (_c = _this3.user) === null || _c === void 0 ? void 0 : _c.reservoir;
      _this3.url = _this3.authService.getApiUrl();
      let postUrl;
      postUrl = _this3.url + "tExperts" + "/list";
      const httpParams = {
        "reservoirid": reservoir
      };
      let data;
      const httpOptions = {
        withCredentials: true,
        headers: _this3.headers
      };
      const result = yield _this3.http.post(postUrl, httpParams, httpOptions).toPromise();
      data = result.data;
      return data;
    })();
  }

  getFloodInfo() {
    var _this4 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      _this4.user = (_a = yield _this4.authService.getUser()) === null || _a === void 0 ? void 0 : _a.data;
      _this4.headers = {
        Authorization: 'Bearer ' + ((_b = _this4.user) === null || _b === void 0 ? void 0 : _b.token)
      };
      _this4.url = _this4.authService.getApiUrl();
      let reservoir = (_c = _this4.user) === null || _c === void 0 ? void 0 : _c.reservoir;
      _this4.url = _this4.authService.getApiUrl();
      let postUrl;
      postUrl = _this4.url + "tFloodInfo" + "/list";
      const httpParams = {
        "reservoirid": reservoir
      };
      let data;
      const httpOptions = {
        withCredentials: true,
        headers: _this4.headers
      };
      const result = yield _this4.http.post(postUrl, httpParams, httpOptions).toPromise();
      data = result.data;
      return data;
    })();
  }

  getExitRoad() {
    var _this5 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      _this5.user = (_a = yield _this5.authService.getUser()) === null || _a === void 0 ? void 0 : _a.data;
      _this5.headers = {
        Authorization: 'Bearer ' + ((_b = _this5.user) === null || _b === void 0 ? void 0 : _b.token)
      };
      _this5.url = _this5.authService.getApiUrl();
      let reservoir = (_c = _this5.user) === null || _c === void 0 ? void 0 : _c.reservoir;
      _this5.url = _this5.authService.getApiUrl();
      let postUrl;
      postUrl = _this5.url + "tEvacuationInfo" + "/list";
      const httpParams = {
        "reservoirid": reservoir
      };
      let data;
      const httpOptions = {
        withCredentials: true,
        headers: _this5.headers
      };
      const result = yield _this5.http.post(postUrl, httpParams, httpOptions).toPromise();
      data = result.data;
      return data;
    })();
  }

  getVillage() {
    var _this6 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      _this6.user = (_a = yield _this6.authService.getUser()) === null || _a === void 0 ? void 0 : _a.data;
      _this6.headers = {
        Authorization: 'Bearer ' + ((_b = _this6.user) === null || _b === void 0 ? void 0 : _b.token)
      };
      _this6.url = _this6.authService.getApiUrl();
      let reservoir = (_c = _this6.user) === null || _c === void 0 ? void 0 : _c.reservoir;
      _this6.url = _this6.authService.getApiUrl();
      let postUrl;
      postUrl = _this6.url + "tDownstreamVillage" + "/list";
      const httpParams = {
        "reservoirid": reservoir
      };
      let data;
      const httpOptions = {
        withCredentials: true,
        headers: _this6.headers
      };
      const result = yield _this6.http.post(postUrl, httpParams, httpOptions).toPromise();
      data = result.data;
      return data;
    })();
  }

  sendFloodInfoRequest(url, method = "GET", data = {}) {
    var _this7 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this7.url + "tFloodInfo";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this7.headers,
        body: httpParams
      };
      let result = new _models_custom_response__WEBPACK_IMPORTED_MODULE_1__.CustomResponse();

      switch (method) {
        case 'PUT':
          record.reservoirid = _this7.reservoir;
          result = yield _this7.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          record.reservoirid = _this7.reservoir;
          result = yield _this7.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this7.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  sendHeadquartersRequest(url, method = "GET", data = {}) {
    var _this8 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this8.url + "tHeadquarters";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this8.headers,
        body: httpParams
      };
      let result = new _models_custom_response__WEBPACK_IMPORTED_MODULE_1__.CustomResponse();

      switch (method) {
        case 'PUT':
          record.reservoirid = _this8.reservoir;
          result = yield _this8.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          record.reservoirid = _this8.reservoir;
          result = yield _this8.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this8.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  sendExpertsRequest(url, method = "GET", data = {}) {
    var _this9 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this9.url + "tExperts";
      const record = data.values;
      const httpParams = record;
      const httpOptions = {
        withCredentials: true,
        headers: _this9.headers,
        body: httpParams
      };
      let result = new _models_custom_response__WEBPACK_IMPORTED_MODULE_1__.CustomResponse();

      switch (method) {
        case 'PUT':
          record.reservoirid = _this9.reservoir;
          result = yield _this9.http.put(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'POST':
          record.reservoirid = _this9.reservoir;
          result = yield _this9.http.post(postUrl, httpParams, httpOptions).toPromise();
          break;

        case 'DELETE':
          postUrl += '/' + data.key;
          result = yield _this9.http.delete(postUrl, httpOptions).toPromise();
          break;
      }

      return result.data;
    })();
  }

  getImagePath(infonatureimage) {
    var _this10 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (infonatureimage === undefined || infonatureimage === null) return new _models_file_path__WEBPACK_IMPORTED_MODULE_2__.FilePath();
      let postUrl;
      postUrl = _this10.url + "tfiles" + "/" + infonatureimage;
      const httpOptions = {
        withCredentials: true,
        headers: _this10.headers
      };
      const result = yield _this10.http.get(postUrl, httpOptions).toPromise();

      if (result.code === 200) {
        const filePath = result.data;

        if (filePath != null) {
          filePath.fileurl = _this10.url + filePath.path;
          return result.data;
        } else {
          return new _models_file_path__WEBPACK_IMPORTED_MODULE_2__.FilePath();
        }
      } else {
        return new _models_file_path__WEBPACK_IMPORTED_MODULE_2__.FilePath();
      }
    })();
  }

}

EmergencyOrgService.ɵfac = function EmergencyOrgService_Factory(t) {
  return new (t || EmergencyOrgService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService));
};

EmergencyOrgService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
  token: EmergencyOrgService,
  factory: EmergencyOrgService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 77706:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/flood-person.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FloodPersonService": () => (/* binding */ FloodPersonService)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 10629);




class FloodPersonService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
  }

  getFloodPerson() {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      _this.user = (_a = yield _this.authService.getUser()) === null || _a === void 0 ? void 0 : _a.data;
      _this.headers = {
        Authorization: 'Bearer ' + ((_b = _this.user) === null || _b === void 0 ? void 0 : _b.token)
      };
      _this.url = _this.authService.getApiUrl();
      let reservoir = (_c = _this.user) === null || _c === void 0 ? void 0 : _c.reservoir;
      let person;
      let postUrl;
      postUrl = _this.authService.getApiUrl() + "tFloodRespPerson" + "/list";
      const httpParams = {
        "reservoirid": reservoir
      };
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      const result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
      person = result.data;
      return person;
    })();
  }

}

FloodPersonService.ɵfac = function FloodPersonService_Factory(t) {
  return new (t || FloodPersonService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};

FloodPersonService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FloodPersonService,
  factory: FloodPersonService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 17253:
/*!******************************************!*\
  !*** ./src/app/shared/services/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppInfoService": () => (/* reexport safe */ _app_info_service__WEBPACK_IMPORTED_MODULE_0__.AppInfoService),
/* harmony export */   "AuthGuardService": () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthGuardService),
/* harmony export */   "AuthService": () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService),
/* harmony export */   "ScreenService": () => (/* reexport safe */ _screen_service__WEBPACK_IMPORTED_MODULE_2__.ScreenService)
/* harmony export */ });
/* harmony import */ var _app_info_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-info.service */ 77602);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 10629);
/* harmony import */ var _screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screen.service */ 39686);





/***/ }),

/***/ 61560:
/*!********************************************************!*\
  !*** ./src/app/shared/services/person-info.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonInfoService": () => (/* binding */ PersonInfoService)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 10629);




class PersonInfoService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
  }

  getPerson() {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      _this.user = (_a = yield _this.authService.getUser()) === null || _a === void 0 ? void 0 : _a.data;
      _this.headers = {
        Authorization: 'Bearer ' + ((_b = _this.user) === null || _b === void 0 ? void 0 : _b.token)
      };
      _this.url = _this.authService.getApiUrl();
      let reservoir = (_c = _this.user) === null || _c === void 0 ? void 0 : _c.reservoir;
      let person;
      let postUrl;
      postUrl = _this.authService.getApiUrl() + "tPersonInfo" + "/list";
      const httpParams = {
        "reservoirid": reservoir
      };
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers,
        body: httpParams
      };
      const result = yield _this.http.post(postUrl, httpParams, httpOptions).toPromise();
      person = result.data;
      return person;
    })();
  }

}

PersonInfoService.ɵfac = function PersonInfoService_Factory(t) {
  return new (t || PersonInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
};

PersonInfoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PersonInfoService,
  factory: PersonInfoService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 92484:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/reservoir-info.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservoirInfoService": () => (/* binding */ ReservoirInfoService)
/* harmony export */ });
/* harmony import */ var G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 19369);
/* harmony import */ var _models_reservoir_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/reservoir-detail */ 30006);
/* harmony import */ var _models_file_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/file-path */ 46226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 10629);






class ReservoirInfoService {
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.authService.getUser().then(e => {
      var _a, _b;

      this.user = e.data;
      this.headers = {
        Authorization: 'Bearer ' + ((_a = this.user) === null || _a === void 0 ? void 0 : _a.token)
      };
      this.reservoir = (_b = this.user) === null || _b === void 0 ? void 0 : _b.reservoir;
    });
    this.url = this.authService.getApiUrl();
  }

  getAllReservoir() {
    var _this = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b;

      _this.user = (_a = yield _this.authService.getUser()) === null || _a === void 0 ? void 0 : _a.data;
      _this.headers = {
        Authorization: 'Bearer ' + ((_b = _this.user) === null || _b === void 0 ? void 0 : _b.token)
      };
      const postUrl = _this.url + "tReservoirInfo/list";
      const httpOptions = {
        withCredentials: true,
        headers: _this.headers
      };
      const result = yield _this.http.get(postUrl, httpOptions).toPromise();
      return result.data;
    })();
  }

  getReservoir(reservoir) {
    var _this2 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let postUrl;
      postUrl = _this2.url + "tReservoirInfo" + "/" + reservoir;
      const httpOptions = {
        withCredentials: true,
        headers: _this2.headers
      };
      const result = yield _this2.http.get(postUrl, httpOptions).toPromise(); // console.log(result.data)

      return result.data;
    })();
  }

  getReservoirDetails() {
    var _this3 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b;

      _this3.user = (_a = yield _this3.authService.getUser()) === null || _a === void 0 ? void 0 : _a.data;
      _this3.headers = {
        Authorization: 'Bearer ' + ((_b = _this3.user) === null || _b === void 0 ? void 0 : _b.token)
      };
      _this3.url = _this3.authService.getApiUrl();
      let resultObj = new _models_reservoir_detail__WEBPACK_IMPORTED_MODULE_1__.ReservoirDetail();
      let postUrl;
      postUrl = _this3.url + "tReservoirDetail" + "/reservoir=" + _this3.reservoir;
      let data;
      const httpOptions = {
        withCredentials: true,
        headers: _this3.headers
      };
      const result = yield _this3.http.get(postUrl, httpOptions).toPromise();
      data = result.data;
      data.infonatureimagepath = yield _this3.getImagePath(data.infonatureimage);
      data.infoprojectimagepath = yield _this3.getImagePath(data.infoprojectimage);
      data.infoprojectlayoutimagepath = yield _this3.getImagePath(data.infoprojectlayoutimage);
      data.infosectionimagepath = yield _this3.getImagePath(data.infosectionimage);
      data.infogeoimagepath = yield _this3.getImagePath(data.infogeoimage);
      return data;
    })();
  }

  getProjectProps() {
    var _this4 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      _this4.user = (_a = yield _this4.authService.getUser()) === null || _a === void 0 ? void 0 : _a.data;
      _this4.headers = {
        Authorization: 'Bearer ' + ((_b = _this4.user) === null || _b === void 0 ? void 0 : _b.token)
      };
      _this4.url = _this4.authService.getApiUrl();
      let reservoir = (_c = _this4.user) === null || _c === void 0 ? void 0 : _c.reservoir;
      let postUrl;
      postUrl = _this4.url + "tProjectProps/list";
      const data = {
        reservoirid: reservoir
      };
      const httpOptions = {
        withCredentials: true,
        headers: _this4.headers,
        body: data
      };
      const result = yield _this4.http.post(postUrl, data, httpOptions).toPromise();
      return result.data;
    })();
  }

  getImagePath(infonatureimage) {
    var _this5 = this;

    return (0,G_riskmanagement_webfront_ng_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (infonatureimage === undefined || infonatureimage === null) return new _models_file_path__WEBPACK_IMPORTED_MODULE_2__.FilePath();
      let postUrl;
      postUrl = _this5.url + "tfiles" + "/" + infonatureimage;
      const httpOptions = {
        withCredentials: true,
        headers: _this5.headers
      };
      const result = yield _this5.http.get(postUrl, httpOptions).toPromise();

      if (result.code === 200) {
        const filePath = result.data;

        if (filePath != null) {
          filePath.fileurl = _this5.url + filePath.path;
          return result.data;
        } else {
          return new _models_file_path__WEBPACK_IMPORTED_MODULE_2__.FilePath();
        }
      } else {
        return new _models_file_path__WEBPACK_IMPORTED_MODULE_2__.FilePath();
      }
    })();
  }

}

ReservoirInfoService.ɵfac = function ReservoirInfoService_Factory(t) {
  return new (t || ReservoirInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
};

ReservoirInfoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: ReservoirInfoService,
  factory: ReservoirInfoService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 39686:
/*!***************************************************!*\
  !*** ./src/app/shared/services/screen.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenService": () => (/* binding */ ScreenService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 66883);




class ScreenService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.XSmall, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Medium, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Large])
            .subscribe(() => this.changed.next());
    }
    isLargeScreen() {
        const isLarge = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Large);
        const isXLarge = this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.XLarge);
        return isLarge || isXLarge;
    }
    get sizes() {
        return {
            'screen-x-small': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.XSmall),
            'screen-small': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Small),
            'screen-medium': this.breakpointObserver.isMatched(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Medium),
            'screen-large': this.isLargeScreen(),
        };
    }
}
ScreenService.ɵfac = function ScreenService_Factory(t) { return new (t || ScreenService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver)); };
ScreenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScreenService, factory: ScreenService.ɵfac });


/***/ }),

/***/ 51950:
/*!********************************************!*\
  !*** ./src/app/unauthenticated-content.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnauthenticatedContentComponent": () => (/* binding */ UnauthenticatedContentComponent),
/* harmony export */   "UnauthenticatedContentModule": () => (/* binding */ UnauthenticatedContentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/layouts */ 80205);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _layouts_single_card_single_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/single-card/single-card.component */ 36130);






class UnauthenticatedContentComponent {
    constructor(router) {
        this.router = router;
    }
    get title() {
        const path = this.router.url.split('/')[1];
        switch (path) {
            case 'login-form': return '登录';
            case 'reset-password': return '重置密码';
            case 'create-account': return '注册';
            case 'change-password': return '更改密码';
            default: return '';
        }
    }
    get description() {
        const path = this.router.url.split('/')[1];
        switch (path) {
            case 'reset-password': return 'Please enter the email address that you used to register, and we will send you a link to reset your password via Email.';
            default: return '';
        }
    }
}
UnauthenticatedContentComponent.ɵfac = function UnauthenticatedContentComponent_Factory(t) { return new (t || UnauthenticatedContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
UnauthenticatedContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UnauthenticatedContentComponent, selectors: [["app-unauthenticated-content"]], decls: 2, vars: 2, consts: [[3, "title", "description"]], template: function UnauthenticatedContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-single-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", ctx.title)("description", ctx.description);
    } }, directives: [_layouts_single_card_single_card_component__WEBPACK_IMPORTED_MODULE_1__.SingleCardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuYXV0aGVudGljYXRlZC1jb250ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFBTiIsImZpbGUiOiJ1bmF1dGhlbnRpY2F0ZWQtY29udGVudC50cyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIDpob3N0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgIl19 */"] });
class UnauthenticatedContentModule {
}
UnauthenticatedContentModule.ɵfac = function UnauthenticatedContentModule_Factory(t) { return new (t || UnauthenticatedContentModule)(); };
UnauthenticatedContentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UnauthenticatedContentModule });
UnauthenticatedContentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
            src_app_layouts__WEBPACK_IMPORTED_MODULE_0__.SingleCardModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UnauthenticatedContentModule, { declarations: [UnauthenticatedContentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule,
        src_app_layouts__WEBPACK_IMPORTED_MODULE_0__.SingleCardModule], exports: [UnauthenticatedContentComponent] }); })();


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var devextreme_ui_themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devextreme/ui/themes */ 78279);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 92340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
devextreme_ui_themes__WEBPACK_IMPORTED_MODULE_0__.default.initialized(() => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
        .catch(err => console.error(err));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map