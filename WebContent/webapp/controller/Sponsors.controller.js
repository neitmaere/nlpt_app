sap.ui.define([
		"com/nlpt/app/controller/BaseController",
		"sap/ui/model/json/JSONModel"
	], function (BaseController, JSONModel) {
		"use strict";

		return BaseController.extend("com.nlpt.app.controller.Sponsors", {

		onInit : function() {
			var router = this.getRouter();
			router.getRoute("sponsors").attachMatched(this._onRouteMatched, this);
		},
		
		_onRouteMatched : function(oEvent) {
			this.getView().getModel("settingModel").setProperty("/busy", false);
		},

	});

});