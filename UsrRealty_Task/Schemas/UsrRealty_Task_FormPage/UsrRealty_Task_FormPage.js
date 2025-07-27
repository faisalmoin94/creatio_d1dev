define("UsrRealty_Task_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
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
					"entitySchemaName": "UsrRealty_Task"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "fb5f9678-3fe1-4830-8f32-2173ac6b0314",
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
					"label": "$Resources.Strings.PDS_UsrPrice_jk1ngn1",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_jk1ngn1"
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
					"label": "$Resources.Strings.PDS_UsrArea_noof6ws",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_noof6ws"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Commission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_mj4481r",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_mj4481r",
					"visible": true,
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
				"name": "Title",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.PDS_UsrTitle_gfmqkhg",
					"labelPosition": "auto",
					"control": "$PDS_UsrTitle_gfmqkhg"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_117bgn3",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_117bgn3",
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
				"name": "ComboBox_i62mpuj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_vb87s16",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_vb87s16",
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
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_wuyynnd",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_wuyynnd",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_038t0ce",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_038t0ce_title)#",
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_caudo15",
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
				"parentName": "ExpansionPanel_038t0ce",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_4yuyyw2",
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
				"parentName": "GridContainer_caudo15",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_3ck9lsf",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_3ck9lsf_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealty2Visit",
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
				"parentName": "FlexContainer_4yuyyw2",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_obeg0w7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_obeg0w7_caption)#",
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
							"dataSourceName": "GridDetail_g6le91lDS"
						}
					}
				},
				"parentName": "FlexContainer_4yuyyw2",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_4mpheco",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_4mpheco_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_4yuyyw2",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_pt9joi4",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_pt9joi4_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "Realty2VisitGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_4mpheco",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_h5eypfs",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_h5eypfs_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealty2Visit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_4mpheco",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_tjxyt75",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_tjxyt75_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_tjxyt75_GridDetail_g6le91l",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_g6le91l"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_tjxyt75_SearchValue",
							"GridDetailSearchFilter_tjxyt75_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_4yuyyw2",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_98d4ehv",
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
				"parentName": "ExpansionPanel_038t0ce",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Realty2VisitGridDetail",
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
						}
					},
					"items": "$GridDetail_g6le91l",
					"activeRow": "$GridDetail_g6le91l_ActiveRow",
					"selectionState": "$GridDetail_g6le91l_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_g6le91l_SelectionState"
					},
					"primaryColumnName": "GridDetail_g6le91lDS_Id",
					"columns": [
						{
							"id": "c02b442d-661e-97ca-fca4-cc6d075d8b35",
							"code": "GridDetail_g6le91lDS_UsrOwner",
							"caption": "#ResourceString(GridDetail_g6le91lDS_UsrOwner)#",
							"dataValueType": 10
						},
						{
							"id": "4befd724-d521-2649-8064-13f01bc3d238",
							"code": "GridDetail_g6le91lDS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_g6le91lDS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "59dce351-adef-dd6a-ee0a-964a2370fc41",
							"code": "GridDetail_g6le91lDS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_g6le91lDS_UsrPotentialCustomer)#",
							"dataValueType": 10
						},
						{
							"id": "0246fafe-e88b-0ab9-d072-5e83e1ebe2a3",
							"code": "GridDetail_g6le91lDS_UsrComment",
							"caption": "#ResourceString(GridDetail_g6le91lDS_UsrComment)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_98d4ehv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_g6le91l_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_g6le91lDS",
							"filters": "$GridDetail_g6le91l | crt.ToCollectionFilters : 'GridDetail_g6le91l' : $GridDetail_g6le91l_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_g6le91l_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "Realty2VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_g6le91l_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_g6le91lDS",
							"filters": "$GridDetail_g6le91l | crt.ToCollectionFilters : 'GridDetail_g6le91l' : $GridDetail_g6le91l_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_g6le91l_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_g6le91l_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_g6le91l_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "Realty2VisitGridDetail",
							"filters": "$GridDetail_g6le91l | crt.ToCollectionFilters : 'GridDetail_g6le91l' : $GridDetail_g6le91l_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_g6le91l_SelectionState"
						}
					}
				},
				"parentName": "Realty2VisitGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_g6le91l_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_g6le91lDS",
							"filters": "$GridDetail_g6le91l | crt.ToCollectionFilters : 'GridDetail_g6le91l' : $GridDetail_g6le91l_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_g6le91l_SelectionState"
						}
					}
				},
				"parentName": "Realty2VisitGridDetail",
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
					"PDS_UsrPrice_jk1ngn1": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_noof6ws": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrTitle_gfmqkhg": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrComment_wuyynnd": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
		                    /* Flag the field as required. */
		                    "required": {
		                        "type": "crt.Required"
		                    }
						}
					},
					"PDS_UsrOfferType_vb87s16": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrType_117bgn3": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrCommission_mj4481r": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"GridDetail_g6le91l": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_g6le91lDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_tjxyt75_GridDetail_g6le91l",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "UsrOwner"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_g6le91lDS_UsrOwner": {
									"modelConfig": {
										"path": "GridDetail_g6le91lDS.UsrOwner"
									}
								},
								"GridDetail_g6le91lDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_g6le91lDS.UsrVisitDateTime"
									}
								},
								"GridDetail_g6le91lDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_g6le91lDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_g6le91lDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_g6le91lDS.UsrComment"
									}
								},
								"GridDetail_g6le91lDS_Id": {
									"modelConfig": {
										"path": "GridDetail_g6le91lDS.Id"
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
						"GridDetail_g6le91lDS": [
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
							"entitySchemaName": "UsrRealty_Task"
						},
						"scope": "page"
					},
					"GridDetail_g6le91lDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealty2Visit",
							"attributes": {
								"UsrOwner": {
									"path": "UsrOwner"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
			    request: "crt.HandleViewModelAttributeChangeRequest",
			    /* The custom implementation of the system query handler. */
			    handler: async (request, next) => {
			        if (request.attributeName === 'PDS_UsrPrice_jk1ngn1' ||
			            request.attributeName === 'PDS_UsrOfferType_vb87s16' ) {
						debugger;
			            var price = await request.$context.PDS_UsrPrice_jk1ngn1;
			            var percent = 0;
						if ((request.$context.PDS_UsrOfferType_vb87s16.__zone_symbol__value.displayValue === 'Rental'))
							percent = 60;						
						if ((request.$context.PDS_UsrOfferType_vb87s16.__zone_symbol__value.displayValue  === 'Sale'))
							percent = 2.5;
			            var commission = price * percent / 100;
			            request.$context.PDS_UsrCommission_mj4481r = commission;
			        }
			        /* Call the next handler if it exists and return its result. */ 
			        return next?.handle(request);
			
			    }
			},
			{
                request: "crt.HandleViewModelAttributeChangeRequest",
                handler: async (request, next) => {
                    if (request.attributeName === 'PDS_UsrPrice_jk1ngn1') {
						debugger;
			            var price = await request.$context.PDS_UsrPrice_jk1ngn1;
						const MinPrice= (new Promise( (resolve, reject) => {  Terrasoft.SysSettings.querySysSettingsItem( "MinPriceToRequireRealtyComment", function(result) { resolve(result); }); })).__zone_symbol__value;
                        if (price > MinPrice) {
                            request.$context.enableAttributeValidator('PDS_UsrComment_wuyynnd', 'required');
                        } else {
                            request.$context.disableAttributeValidator('PDS_UsrComment_wuyynnd', 'required');
                        }
                    }
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
		                let valueIsCorrect = value > minValue;
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