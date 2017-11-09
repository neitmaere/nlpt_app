var appController = null;
sap.ui.define([ "com/nlpt/app/controller/BaseController", "sap/ui/model/json/JSONModel", "sap/m/MessageBox" ], function(
		BaseController, JSONModel, MessageBox) {
	"use strict";

	return BaseController.extend("com.nlpt.app.controller.Overview", {
		_year: '0000',

		onInit : function() {
			appController = this;
			var router = this.getRouter();
			router.getRoute("overview").attachMatched(this._onRouteMatched, this);
		},

		_onRouteMatched : function(oEvent) {
			var parameter;
			var that = this;
			parameter = oEvent.getParameter("arguments");
			this._year = parameter.year
			switch (parameter.year) {
			case "2018":
				this._refreshOverviewModel(parameter.year);
				break;
			case "2017":
				this._refreshOverviewModel(parameter.year);
				break;
			case "2016":
				this._refreshOverviewModel(parameter.year);
				break;
			case "2015":
				this._refreshOverviewModel(parameter.year);
				break;
			}
		},

		onMaintainGamerPress : function(fragment) {
			if (!this._gamerEditDialog) {
				this._gamerEditDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.GamerEditDialog", this);
				this.getView().addDependent(this._gamerEditDialog);
			}
			this._gamerEditDialog.open();
		},

		onSaveGamers : function() {
			var that = this;
			var data = this.getView().getModel("Gamers").getJSON();
			$.ajax({
				type : "POST",
				url : "../../nlpt_php/postGamerData.php?year="+that._year,
				data : data,
				success : function(data, response) {
					MessageBox.success("Gamers updated");
					that._gamerEditDialog.close();
					that._refreshOverviewModel(that._year);
				},
				error : function(response) {
					MessageBox.error(response.responseText);
				},
				dataType : "json"
			});
		},

		onGenerateGamerNumbers : function() {
			var arr = []
			while (arr.length < 16) {
				var randomnumber = Math.ceil(Math.random() * 16)
				var found = false;
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] == randomnumber) {
						found = true;
						break
					}
				}
				if (!found)
					arr[arr.length] = randomnumber;
			}

			for (var i = 0; i <= 15; i++) {
				console.log(sap.ui.getCore().byId("gamersEditTable").getItems()[i].getCells()[1].setValue(arr[i]));
			}
		},

		_refreshOverviewModel : function(year) {
			this.getView().getModel("Gamers").loadData("../../nlpt_php/Gamer.php?year=" + year);
			this.getView().getModel("GamerPoints").loadData("../../nlpt_php/GamerPoints.php?year=" + year);
		}

	});

});