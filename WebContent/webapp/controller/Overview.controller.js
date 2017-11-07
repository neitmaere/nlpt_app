var appController = null;
sap.ui.define([ "com/nlpt/app/controller/BaseController", "sap/ui/model/json/JSONModel", "sap/m/MessageBox" ], function(
		BaseController, JSONModel, MessageBox) {
	"use strict";

	return BaseController.extend("com.nlpt.app.controller.Overview", {

		onInit : function() {
			appController = this;
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

		onMaintainShooterPress : function() {
			// create dialog lazily
			if (!this._shooterEditDialog) {
				// create dialog via fragment factory
				this._shooterEditDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.ShooterEditDialog", this);
				// connect dialog to view (models, lifecycle)
				this.getView().addDependent(this._shooterEditDialog);
			}
			this._shooterEditDialog.open();
		},

		onSaveShooter : function() {
			var data = this.getView().getModel("Shooter").getJSON();
			$.ajax({
				type : "POST",
				url : "../../nlpt_php/postTournamentData.php",
				data : data,
				success : function(data, response) {
					MessageBox.success("Shooter table updated");
					appController._shooterEditDialog.close();
					appController._refreshAllModels();
				},
				error : function(response) {
					MessageBox.error(response.responseText);
				},
				dataType : "json"
			});
		},

		onMaintainSportPress : function() {
			// create dialog lazily
			if (!this._sportEditDialog) {
				// create dialog via fragment factory
				this._sportEditDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.SportEditDialog", this);
				// connect dialog to view (models, lifecycle)
				this.getView().addDependent(this._sportEditDialog);
			}
			this._sportEditDialog.open();
		},

		onSaveSport : function() {
			var data = this.getView().getModel("Sport").getJSON();
			$.ajax({
				type : "POST",
				url : "../../nlpt_php/postTournamentData.php",
				data : data,
				success : function(data, response) {
					MessageBox.success("Sport table updated");
					appController._sportEditDialog.close();
					appController._refreshAllModels();
				},
				error : function(response) {
					MessageBox.error(response.responseText);
				},
				dataType : "json"
			});
		},

		onMaintainStrategyPress : function() {
			// create dialog lazily
			if (!this._strategyEditDialog) {
				// create dialog via fragment factory
				this._strategyEditDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.StrategyEditDialog", this);
				// connect dialog to view (models, lifecycle)
				this.getView().addDependent(this._strategyEditDialog);
			}
			this._strategyEditDialog.open();
		},

		onSaveStrategy : function() {
			var data = this.getView().getModel("Strategy").getJSON();
			$.ajax({
				type : "POST",
				url : "../../nlpt_php/postTournamentData.php",
				data : data,
				success : function(data, response) {
					MessageBox.success("Strategy table updated");
					appController._strategyEditDialog.close();
					appController._refreshAllModels();
				},
				error : function(response) {
					MessageBox.error(response.responseText);
				},
				dataType : "json"
			});
		},

		onMaintainRacingPress : function() {
			// create dialog lazily
			if (!this._racingEditDialog) {
				// create dialog via fragment factory
				this._racingEditDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.RacingEditDialog", this);
				// connect dialog to view (models, lifecycle)
				this.getView().addDependent(this._racingEditDialog);
			}
			this._racingEditDialog.open();
		},

		onSaveRacing : function() {
			var data = this.getView().getModel("Racing1").getJSON();
			$.ajax({
				type : "POST",
				url : "../../nlpt_php/postTournamentData.php",
				data : data,
				success : function(data, response) {
					// MessageBox.success("Racing tables updated");
					appController._racingEditDialog.close();
					appController._refreshAllModels();
				},
				error : function(response) {
					MessageBox.error(response.responseText);
				},
				dataType : "json"
			});
			var data = this.getView().getModel("Racing2").getJSON();
			$.ajax({
				type : "POST",
				url : "../../nlpt_php/postTournamentData.php",
				data : data,
				success : function(data, response) {
					// MessageBox.success("Racing tables updated");
					appController._racingEditDialog.close();
					appController._refreshAllModels();
				},
				error : function(response) {
					MessageBox.error(response.responseText);
				},
				dataType : "json"
			});
			var data = this.getView().getModel("Racing3").getJSON();
			$.ajax({
				type : "POST",
				url : "../../nlpt_php/postTournamentData.php",
				data : data,
				success : function(data, response) {
					// MessageBox.success("Racing tables updated");
					appController._racingEditDialog.close();
					appController._refreshAllModels();
				},
				error : function(response) {
					MessageBox.error(response.responseText);
				},
				dataType : "json"
			});
			var data = this.getView().getModel("Racing4").getJSON();
			$.ajax({
				type : "POST",
				url : "../../nlpt_php/postTournamentData.php",
				data : data,
				success : function(data, response) {
					MessageBox.success("Racing tables updated");
					appController._racingEditDialog.close();
					appController._refreshAllModels();
				},
				error : function(response) {
					MessageBox.error(response.responseText);
				},
				dataType : "json"
			});
		},

		onMaintainSurvivalPress : function() {
			// create dialog lazily
			if (!this._survivalEditDialog) {
				// create dialog via fragment factory
				this._survivalEditDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.SurvivalEditDialog", this);
				// connect dialog to view (models, lifecycle)
				this.getView().addDependent(this._survivalEditDialog);
			}
			this._survivalEditDialog.open();
		},

		onSaveSurvival : function() {
			var data = this.getView().getModel("Survival1").getJSON();
			$.ajax({
				type : "POST",
				url : "../../nlpt_php/postTournamentData.php",
				data : data,
				success : function(data, response) {
					// MessageBox.success("Survival tables updated");
					appController._survivalEditDialog.close();
					appController._refreshAllModels();
				},
				error : function(response) {
					MessageBox.error(response.responseText);
				},
				dataType : "json"
			});
			var data = this.getView().getModel("Survival2").getJSON();
			$.ajax({
				type : "POST",
				url : "../../nlpt_php/postTournamentData.php",
				data : data,
				success : function(data, response) {
					// MessageBox.success("Survival tables updated");
					appController._survivalEditDialog.close();
					appController._refreshAllModels();
				},
				error : function(response) {
					MessageBox.error(response.responseText);
				},
				dataType : "json"
			});
			var data = this.getView().getModel("Survival3").getJSON();
			$.ajax({
				type : "POST",
				url : "../../nlpt_php/postTournamentData.php",
				data : data,
				success : function(data, response) {
					MessageBox.success("Survival tables updated");
					appController._survivalEditDialog.close();
					appController._refreshAllModels();
				},
				error : function(response) {
					MessageBox.error(response.responseText);
				},
				dataType : "json"
			});
		},

		_refreshAllModels : function() {
			appController.getView().getModel("GamerPoints").loadData("../../nlpt_php/GamerPoints.php");
			appController.getView().getModel("Shooter").loadData("../../nlpt_php/Shooter.php");
			appController.getView().getModel("Sport").loadData("../../nlpt_php/Sport.php");
			appController.getView().getModel("Strategy").loadData("../../nlpt_php/Strategy.php");
			appController.getView().getModel("Racing1").loadData("../../nlpt_php/Racing.php?round=1");
			appController.getView().getModel("Racing2").loadData("../../nlpt_php/Racing.php?round=2");
			appController.getView().getModel("Racing3").loadData("../../nlpt_php/Racing.php?round=3");
			appController.getView().getModel("Racing4").loadData("../../nlpt_php/Racing.php?round=4");
			appController.getView().getModel("Survival1").loadData("../../nlpt_php/Survival.php?round=1");
			appController.getView().getModel("Survival2").loadData("../../nlpt_php/Survival.php?round=2");
			appController.getView().getModel("Survival3").loadData("../../nlpt_php/Survival.php?round=3");
		}

	});

});