var appController = null;
sap.ui.define([ "com/nlpt/app/controller/BaseController", "sap/ui/model/json/JSONModel", "sap/m/MessageBox" ], function(
		BaseController, JSONModel, MessageBox) {
	"use strict";

	return BaseController.extend("com.nlpt.app.controller.Overview", {

		onInit : function() {
			appController = this;
			var router = this.getRouter();
			router.getRoute("overview").attachMatched(this._onRouteMatched, this);
		},

		_onRouteMatched : function(oEvent) {
			var parameter;
			var that = this;
			parameter = oEvent.getParameter("arguments");
			switch (parameter.year) {
			case "2018":
				this._refreshOverviewModel(2018);
				break;
			case "2017":
				this._refreshOverviewModel(2017);
				break;
			case "2016":
				this._refreshOverviewModel(2016);
				break;
			case "2015":
				this._refreshOverviewModel(2015);
				break;
			}
		},

		onMaintainGamerPress : function(fragment) {
			// create dialog lazily
			if (!this._gamerEditDialog) {
				// create dialog via fragment factory
				this._gamerEditDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.GamerEditDialog", this);
				// connect dialog to view (models, lifecycle)
				this.getView().addDependent(this._gamerEditDialog);
			}
			this._gamerEditDialog.open();
		},

		onSaveGamers : function() {
			var data = this.getView().getModel("Gamers").getJSON();
			$.ajax({
				type : "POST",
				url : "../../nlpt_php/postGamerData.php",
				data : data,
				success : function(data, response) {
					MessageBox.success("Gamers updated");
					appController._gamerEditDialog.close();
					appController._refreshAllModels();
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
			// appController.getView().getModel("Shooter").loadData("../../nlpt_php/Shooter.php");
			// appController.getView().getModel("Sport").loadData("../../nlpt_php/Sport.php");
			// appController.getView().getModel("Strategy").loadData("../../nlpt_php/Strategy.php");
			// appController.getView().getModel("Racing1").loadData("../../nlpt_php/Racing.php?round=1");
			// appController.getView().getModel("Racing2").loadData("../../nlpt_php/Racing.php?round=2");
			// appController.getView().getModel("Racing3").loadData("../../nlpt_php/Racing.php?round=3");
			// appController.getView().getModel("Racing4").loadData("../../nlpt_php/Racing.php?round=4");
			// appController.getView().getModel("Survival1").loadData("../../nlpt_php/Survival.php?round=1");
			// appController.getView().getModel("Survival2").loadData("../../nlpt_php/Survival.php?round=2");
			// appController.getView().getModel("Survival3").loadData("../../nlpt_php/Survival.php?round=3");
		}

	});

});