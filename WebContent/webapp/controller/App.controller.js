sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/m/MessageBox" ], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.nlpt.app.controller.App", {

		model : new sap.ui.model.json.JSONModel(),
		data : {
			navigation : [ {
				title : 'Root Item',
				icon : 'sap-icon://employee',
				expanded : true,
				key : 'root1',
				items : [ {
					title : 'Child Item 1',
					key : 'page1'
				}, {
					title : 'Child Item 2',
					key : 'page2'
				} ]
			}, {
				title : 'Root Item',
				icon : 'sap-icon://building',
				key : 'root2'
			}, {
				title : 'Root Item',
				icon : 'sap-icon://card',
				expanded : false,
				items : [ {
					title : 'Child Item'
				}, {
					title : 'Child Item'
				} ]
			} ],
			fixedNavigation : [ {
				title : 'Fixed Item 1',
				icon : 'sap-icon://employee'
			}, {
				title : 'Fixed Item 2',
				icon : 'sap-icon://building'
			}, {
				title : 'Fixed Item 3',
				icon : 'sap-icon://card'
			} ],
			headerItems : []
		},
		onInit : function() {
			this.model.setData(this.data);
			this.getView().setModel(this.model, "navModel");

			this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);
		},

		onSideNavButtonPress : function() {
			var viewId = this.getView().getId();
			var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			var sideExpanded = toolPage.getSideExpanded();

			this._setToggleButtonTooltip(sideExpanded);

			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},

		_setToggleButtonTooltip : function(bLarge) {
			var toggleButton = this.getView().byId('sideNavigationToggleButton');
			if (bLarge) {
				toggleButton.setTooltip('Large Size Navigation');
			} else {
				toggleButton.setTooltip('Small Size Navigation');
			}
		}

	});

});