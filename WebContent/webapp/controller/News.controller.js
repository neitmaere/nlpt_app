sap.ui.define([ "com/nlpt/app/controller/BaseController", "sap/ui/model/json/JSONModel" ], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("com.nlpt.app.controller.News", {

		onInit : function() {
			var router = this.getRouter();
			router.getRoute("news").attachMatched(this._onRouteMatched, this);
		},
		
		onAfterRendering: function(){
			this.getView().byId("news").addContent(new sap.ui.core.HTML({
				preferDOM : true,
				content : "<iframe width=100% height=1080px src='http://lan.seibelalexander.de/?page_id=10'></iframe>"
			}));
		},

		_onRouteMatched : function(oEvent) {
			
		},

	});

});