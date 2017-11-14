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
			this.getView().getModel("settingModel").setProperty("/busy", false);
		},
		
		_refreshOverviewModel : function(year) {
			this.getView().getModel("Gamers").loadData("../../nlpt_php/Gamer.php?year=" + year);
		}

	});

});