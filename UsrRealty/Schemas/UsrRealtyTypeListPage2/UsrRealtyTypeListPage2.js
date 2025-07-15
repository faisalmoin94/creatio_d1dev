define("UsrRealtyTypeListPage2", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "DataGrid_90pc1a9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 10,
						"row": 1,
						"rowSpan": 4
					},
					"type": "crt.DataGrid",
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$DataGrid_90pc1a9",
					"primaryColumnName": "DataGrid_90pc1a9DS_Id",
					"columns": [
						{
							"id": "ed276327-b506-fe0c-bce9-090aaa9fe62b",
							"code": "DataGrid_90pc1a9DS_Name",
							"caption": "#ResourceString(DataGrid_90pc1a9DS_Name)#",
							"dataValueType": 28,
							"width": 182.99998474121094
						},
						{
							"id": "1d93a1cf-6d60-ac1c-7f60-d155b66a4d62",
							"code": "DataGrid_90pc1a9DS_UsrMyColor",
							"caption": "#ResourceString(DataGrid_90pc1a9DS_UsrMyColor)#",
							"dataValueType": 18,
							"width": 183.99998474121094
						},
						{
							"id": "5a7dfa2c-94a6-4012-857c-0e5e70b7aae4",
							"code": "DataGrid_90pc1a9DS_Description",
							"caption": "#ResourceString(DataGrid_90pc1a9DS_Description)#",
							"dataValueType": 28,
							"width": 169.99998474121094
						},
						{
							"id": "5e85a421-2b5a-42f8-6ecf-5476d9a38344",
							"code": "DataGrid_90pc1a9DS_CreatedOn",
							"caption": "#ResourceString(DataGrid_90pc1a9DS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "TopAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"DataGrid_90pc1a9": {
						"isCollection": true,
						"modelConfig": {
							"path": "DataGrid_90pc1a9DS"
						},
						"viewModelConfig": {
							"attributes": {
								"DataGrid_90pc1a9DS_Name": {
									"modelConfig": {
										"path": "DataGrid_90pc1a9DS.Name"
									}
								},
								"DataGrid_90pc1a9DS_UsrMyColor": {
									"modelConfig": {
										"path": "DataGrid_90pc1a9DS.UsrMyColor"
									}
								},
								"DataGrid_90pc1a9DS_Description": {
									"modelConfig": {
										"path": "DataGrid_90pc1a9DS.Description"
									}
								},
								"DataGrid_90pc1a9DS_CreatedOn": {
									"modelConfig": {
										"path": "DataGrid_90pc1a9DS.CreatedOn"
									}
								},
								"DataGrid_90pc1a9DS_Id": {
									"modelConfig": {
										"path": "DataGrid_90pc1a9DS.Id"
									}
								}
							}
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
						"DataGrid_90pc1a9DS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "UsrRealtyType",
								"attributes": {
									"Name": {
										"path": "Name"
									},
									"UsrMyColor": {
										"path": "UsrMyColor"
									},
									"Description": {
										"path": "Description"
									},
									"CreatedOn": {
										"path": "CreatedOn"
									}
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});