sap.ui.define([ "com/nlpt/app/controller/BaseController", "sap/ui/model/json/JSONModel" ], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("com.nlpt.app.controller.Gamers", {

		onInit : function() {
			var router = this.getRouter();
			router.getRoute("gamers").attachMatched(this._onRouteMatched, this);
		},

		_onRouteMatched : function(oEvent) {
			var parameter;
			var that = this;
			this._refreshOverviewModel("0000");
		},
		
		_refreshOverviewModel : function(year) {
			this.getView().getModel("GamerOverview").loadData("../../nlpt_php/GamerOverview.php");
		}

	});

});