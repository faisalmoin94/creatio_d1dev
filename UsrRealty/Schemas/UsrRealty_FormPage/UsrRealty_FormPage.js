define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "6a104aea-8099-4526-9e45-57c2bfd69391",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ActionsButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ActionsButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunCalcAvgPriceProcessMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunCalcAvgPriceProcessMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAverageRealtyPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "process-button-icon"
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MaxPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MaxPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					}
				},
				"parentName": "ActionsButton",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest",
						"params": {
							"showSuccessMessage": true,
							"messageTextAfterCompletion": "#ResourceString(PushMeButton_messageTextAfterCompletion)#"
						}
					},
					"clickMode": "default",
					"icon": "send-test-email-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_1738rrm",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_1738rrm"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Area",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_7xdmhb5",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_7xdmhb5"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Comission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrColumn9_ir6au1b",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn9_ir6au1b",
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RealtyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_ibh7kqx",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_ibh7kqx",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ControlAction_lhakwaj",
				"values": {
					"code": "goToRecordList",
					"type": "crt.ComboboxAction",
					"icon": "combobox-go-to-source",
					"caption": "ComboBox.OpenSection",
					"clicked": {
						"request": "crt.OpenLookupSourceRequest",
						"params": {}
					}
				},
				"parentName": "RealtyType",
				"propertyName": "controlActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrColumn8_orw6eaa",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn8_orw6eaa",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_nq5xqsd",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_149dqfi",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_149dqfi",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_6x580i9",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_6x580i9",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Input_3agm13t",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn8_oki09mn",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn8_oki09mn",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_du4h4me",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrComission_tfy8v2o",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferTypeUsrComission_tfy8v2o",
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "CategoryMultiSelect",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(CategoryMultiSelect_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentRealty",
					"selectSchemaName": "UsrCategoryInRealty",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_xc61u39",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_xc61u39_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_e7cj1fk",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_xc61u39",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ylqd2tc",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_e7cj1fk",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_nfe71od",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_nfe71od_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_ylqd2tc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_s0exftn",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_s0exftn_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_n4qkngbDS"
						}
					}
				},
				"parentName": "FlexContainer_ylqd2tc",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_zpr634b",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_zpr634b_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ylqd2tc",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_kio5nmv",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_kio5nmv_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_zpr634b",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_jycs8t3",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_jycs8t3_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_zpr634b",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_q0l85w6",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_q0l85w6_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_q0l85w6_GridDetail_n4qkngb",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_n4qkngb"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_q0l85w6_SearchValue",
							"GridDetailSearchFilter_q0l85w6_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_ylqd2tc",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_fkmmuqe",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_xc61u39",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RealtyVisitGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_n4qkngb",
					"activeRow": "$GridDetail_n4qkngb_ActiveRow",
					"selectionState": "$GridDetail_n4qkngb_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_n4qkngb_SelectionState"
					},
					"primaryColumnName": "GridDetail_n4qkngbDS_Id",
					"columns": [
						{
							"id": "8da753fc-51be-5935-c140-f573e4312321",
							"code": "GridDetail_n4qkngbDS_UsrComment",
							"caption": "#ResourceString(GridDetail_n4qkngbDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "1a5835a6-54fb-5b46-cd43-f940dead1716",
							"code": "GridDetail_n4qkngbDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_n4qkngbDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "42f78271-1abb-cdae-b662-afd8d46b028c",
							"code": "GridDetail_n4qkngbDS_UsrManager",
							"caption": "#ResourceString(GridDetail_n4qkngbDS_UsrManager)#",
							"dataValueType": 10
						},
						{
							"id": "5cbd4a17-6bb9-92de-4bd7-5572e2458611",
							"code": "GridDetail_n4qkngbDS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_n4qkngbDS_UsrParentRealty)#",
							"dataValueType": 10
						},
						{
							"id": "79fe16e7-ae63-bc80-ae22-ea9c680ccc05",
							"code": "GridDetail_n4qkngbDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_n4qkngbDS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "84cfed85-01e1-caf0-6e90-dc3f6f66a39b",
							"code": "GridDetail_n4qkngbDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_n4qkngbDS_UsrVisitDateTime)#",
							"dataValueType": 7
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_fkmmuqe",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_n4qkngb_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_n4qkngbDS",
							"filters": "$GridDetail_n4qkngb | crt.ToCollectionFilters : 'GridDetail_n4qkngb' : $GridDetail_n4qkngb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_n4qkngb_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_n4qkngb_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_n4qkngbDS",
							"filters": "$GridDetail_n4qkngb | crt.ToCollectionFilters : 'GridDetail_n4qkngb' : $GridDetail_n4qkngb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_n4qkngb_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_n4qkngb_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_n4qkngb_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RealtyVisitGridDetail",
							"filters": "$GridDetail_n4qkngb | crt.ToCollectionFilters : 'GridDetail_n4qkngb' : $GridDetail_n4qkngb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_n4qkngb_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_n4qkngb_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_n4qkngbDS",
							"filters": "$GridDetail_n4qkngb | crt.ToCollectionFilters : 'GridDetail_n4qkngb' : $GridDetail_n4qkngb_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_n4qkngb_SelectionState"
						}
					}
				},
				"parentName": "RealtyVisitGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_1738rrm": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_7xdmhb5": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 100,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrType_ibh7kqx": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrComment_149dqfi": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_6x580i9": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrColumn8_orw6eaa": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrColumn8_oki09mn": {
						"modelConfig": {
							"path": "PDS.UsrColumn8"
						}
					},
					"PDS_UsrColumn9_ir6au1b": {
						"modelConfig": {
							"path": "PDS.UsrComission"
						}
					},
					"PDS_UsrOfferTypeUsrComission_tfy8v2o": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrComission_tfy8v2o"
						}
					},
					"GridDetail_n4qkngb": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_n4qkngbDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_q0l85w6_GridDetail_n4qkngb",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "CreatedOn"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_n4qkngbDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_n4qkngbDS.UsrComment"
									}
								},
								"GridDetail_n4qkngbDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_n4qkngbDS.CreatedOn"
									}
								},
								"GridDetail_n4qkngbDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_n4qkngbDS.UsrManager"
									}
								},
								"GridDetail_n4qkngbDS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_n4qkngbDS.UsrParentRealty"
									}
								},
								"GridDetail_n4qkngbDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_n4qkngbDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_n4qkngbDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_n4qkngbDS.UsrVisitDateTime"
									}
								},
								"GridDetail_n4qkngbDS_Id": {
									"modelConfig": {
										"path": "GridDetail_n4qkngbDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_n4qkngbDS": [
							{
								"attributePath": "UsrParentRealty",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrComission_tfy8v2o": {
									"path": "UsrOfferType.UsrComission",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_n4qkngbDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/*
				Implementation of the custom query handler. */
				handler: async (request, next) => {
				    console.log("Button works...");
				    Terrasoft.showInformation("My button was pressed.");
				    var price = await request.$context.PDS_UsrPrice_1738rrm;
				    console.log("Price = " + price);
				    request.$context.PDS_UsrArea_7xdmhb5 = 1000;
				    /* Call the next handler if it exists and return its result. */ 
					return next?.handle (request);
				}
			},
			{
			    request: "crt.HandleViewModelAttributeChangeRequest",
			    /* The custom implementation of the system query handler. */
			    handler: async (request, next) => {
			        if (request.attributeName === 'PDS_UsrPrice_1738rrm' ||
			            request.attributeName === 'PDS_UsrOfferTypeUsrComission_tfy8v2o' ) {
						debugger;
			            var price = await request.$context.PDS_UsrPrice_1738rrm;
			            var percent = await request.$context.PDS_UsrOfferTypeUsrComission_tfy8v2o;
			            var commission = price * percent / 100;
			            request.$context.PDS_UsrColumn9_ir6au1b = commission;
			        }
			        /* Call the next handler if it exists and return its result. */ 
			        return next?.handle(request);
			
			    }
			},
			{
				request: "usr.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");

					// get id from type lookup type object
					var typeObject = await request.$context.PDS_UsrType_ibh7kqx;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}

					// get id from type lookup offer type object
					var offerTypeObject = await request.$context.PDS_UsrColumn8_orw6eaa;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}

					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();
					/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "RealtyService";
					const methodName = "GetMaxPriceByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://localhost/D1_Studio/0/rest/RealtyService/GetMaxPriceByTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.DGValidator": {
		        validator: function (config) {
		            return function (control) {
		                let value = control.value;
		                let minValue = config.minValue;
		                let valueIsCorrect = value >= minValue;
		                var result;
		                if (valueIsCorrect) {
		                    result = null;
		                } else {
		                    result = {
		                        "usr.DGValidator": {
		                            message: config.message
		                        }
		                    };
		                }
		                return result;
		            };
		        },
		        params:[
		            {
		                name: "minValue"
		            },
		            {
		                name: "message"
		            }
		        ],
		        async: false
		    }
		}/**SCHEMA_VALIDATORS*/
	};
});