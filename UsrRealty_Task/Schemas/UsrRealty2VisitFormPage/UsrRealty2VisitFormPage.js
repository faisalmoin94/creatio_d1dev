define("UsrRealty2VisitFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_5jgph73",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRealty2VisitDS_UsrVisitDateTime_y6tsyfb",
					"labelPosition": "above",
					"control": "$UsrRealty2VisitDS_UsrVisitDateTime_y6tsyfb"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_3t887xo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealty2VisitDS_UsrPotentialCustomer_4gmaubu",
					"labelPosition": "above",
					"control": "$UsrRealty2VisitDS_UsrPotentialCustomer_4gmaubu",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_rz0bj6z",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_rz0bj6z_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_3t887xo",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_uh5978d",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealty2VisitDS_UsrComment_bgvfyc0",
					"labelPosition": "above",
					"control": "$UsrRealty2VisitDS_UsrComment_bgvfyc0"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
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
					"UsrRealty2VisitDS_UsrVisitDateTime_y6tsyfb": {
						"modelConfig": {
							"path": "UsrRealty2VisitDS.UsrVisitDateTime"
						}
					},
					"UsrRealty2VisitDS_UsrPotentialCustomer_4gmaubu": {
						"modelConfig": {
							"path": "UsrRealty2VisitDS.UsrPotentialCustomer"
						}
					},
					"UsrRealty2VisitDS_UsrComment_bgvfyc0": {
						"modelConfig": {
							"path": "UsrRealty2VisitDS.UsrComment"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrRealty2VisitDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealty2Visit",
								"loadParameters": {
									"options": {
										"pagingConfig": {
											"rowCount": 1,
											"rowsOffset": -1
										},
										"sortingConfig": {
											"columns": []
										}
									}
								},
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrRealty2VisitDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});