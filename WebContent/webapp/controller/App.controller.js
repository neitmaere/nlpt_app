sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/m/MessageBox" ], function(Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.nlpt.app.controller.App", {

		model : new sap.ui.model.json.JSONModel(),
		data : {
			navigation : [ {
				title : 'News',
				icon : 'sap-icon://newspaper',
				key : 'news'
			}, {
				title : 'Gamers',
				icon : 'sap-icon://customer-and-supplier',
				key : 'gamers'
			}, {
				title : 'NLPT 2018',
				icon : 'sap-icon://org-chart',
				items : [ {
					title : 'Teilnehmer',
					key : 'gamers2018'
				}, {
					title : 'Punkteübersicht',
					key : 'points2018'
				} ]
			}, {
				title : 'NLPT 2017',
				icon : 'sap-icon://org-chart',
				expanded : false,
				items : [ {
					title : 'Teilnehmer',
					key : 'gamers2017'
				}, {
					title : 'Punkteübersicht',
					key : 'points2017'
				} ]
			}, {
				title : 'NLPT 2016',
				icon : 'sap-icon://org-chart',
				expanded : false,
				items : [ {
					title : 'Teilnehmer',
					key : 'gamers2016'
				}, {
					title : 'Punkteübersicht',
					key : 'points2016'
				} ]
			}, {
				title : 'NLPT 2015',
				icon : 'sap-icon://org-chart',
				expanded : false,
				items : [ {
					title : 'Teilnehmer',
					key : 'gamers2015'
				}, {
					title : 'Punkteübersicht',
					key : 'points2015'
				} ]
			} ],
			fixedNavigation : [ {
				title : 'Sponsoren',
				icon : 'sap-icon://monitor-payments',
				key : 'sponsors'
			}, {
				title : 'Webseite',
				icon : 'sap-icon://internet-browser',
				key : 'website'
			}, {
				title : 'Feedback',
				icon : 'sap-icon://thing-type',
				key : 'feedback'
			} ],
			headerItems : []
		},
		onInit : function() {
			this.model.setData(this.data);
			this.getView().setModel(this.model, "navModel");

			this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);
		},

		onItemSelect : function(oEvent) {
			var item = oEvent.getParameter('item');

			switch (item.getKey()) {
			case "news":
				break;
			case "gamers":
				break;
			case "website":
				window.open("http://lan.seibelalexander.de");
				break;
			}

//			var viewId = this.getView().getId();
//			sap.ui.getCore().byId(viewId + "--pageContainer").to(viewId + "--" + item.getKey());
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