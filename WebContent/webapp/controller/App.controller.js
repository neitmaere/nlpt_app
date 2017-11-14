sap.ui.define([ "com/nlpt/app/controller/BaseController", "sap/ui/model/json/JSONModel", "sap/m/MessageBox" ], function(
		BaseController, JSONModel, MessageBox) {
	"use strict";

	return BaseController.extend("com.nlpt.app.controller.App", {

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
					key : 'overview2018'
				}, {
					title : 'Punkte & Platzierungen',
					key : 'categories2018'
				} ]
			}, {
				title : 'NLPT 2017',
				icon : 'sap-icon://org-chart',
				items : [ {
					title : 'Teilnehmer',
					key : 'overview2017'
				}, {
					title : 'Punkte & Platzierungen',
					key : 'categories2017'
				} ]
			}, {
				title : 'NLPT 2016',
				icon : 'sap-icon://org-chart',
				expanded : false,
				items : [ {
					title : 'Teilnehmer',
					key : 'overview2016'
				}, {
					title : 'Punkte & Platzierungen',
					key : 'categories2016'
				} ]
			}, {
				title : 'NLPT 2015',
				icon : 'sap-icon://org-chart',
				expanded : false,
				items : [ {
					title : 'Teilnehmer',
					key : 'overview2015'
				}, {
					title : 'Punkte & Platzierungen',
					key : 'categories2015'
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

			// //////////// Overviews //////////////

			case "overview2018":
				this.getRouter().navTo("overview", {
					year : "2018"
				});
				break;
			case "overview2017":
				this.getRouter().navTo("overview", {
					year : "2017"
				});
				break;
			case "overview2016":
				this.getRouter().navTo("overview", {
					year : "2016"
				});
				break;
			case "overview2015":
				this.getRouter().navTo("overview", {
					year : "2015"
				});
				break;

			// //////////// CATEGORIES //////////////

			case "categories2018":
				this.getRouter().navTo("categories", {
					year : "2018"
				});
				break;
			case "categories2017":
				this.getRouter().navTo("categories", {
					year : "2017"
				});
				break;
			case "categories2016":
				this.getRouter().navTo("categories", {
					year : "2016"
				});
				break;
			case "categories2015":
				this.getRouter().navTo("categories", {
					year : "2015"
				});
				break;

			// //////////// OTHER //////////////

			case "news":
				this.getRouter().navTo("news");
				break;
			case "gamers":
				this.getRouter().navTo("gamers");
				break;
			case "sponsors":
				this.getRouter().navTo("sponsors");
				break;
			case "website":
				window.open("http://lan.seibelalexander.de");
				break;
			}
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
		},

		onLoginPressed : function() {
			if (!this._loginDialog) {
				this._loginDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.LoginDialog", this);
				this.getView().addDependent(this._loginDialog);
			}
			this._loginDialog.open();
		},

		onAfterLogin : function() {
			this.getView().getModel("authModel").loadData("../../nlpt_php/wp_getUserInfo.php");
			this._loginDialog.close();
		},

		onLogoutPressed : function() {
			if (!this._logoutDialog) {
				this._logoutDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.LogoutDialog", this);
				this.getView().addDependent(this._logoutDialog);
			}
			this._logoutDialog.open();
		},

		onAfterLogout : function() {
			this.getView().getModel("authModel").loadData("../../nlpt_php/wp_getUserInfo.php");
			this._logoutDialog.close();
		},

	});

});