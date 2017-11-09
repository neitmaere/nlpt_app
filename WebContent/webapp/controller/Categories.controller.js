sap.ui.define([ "com/nlpt/app/controller/BaseController", "sap/ui/model/json/JSONModel", "sap/m/MessageBox" ], function(
		BaseController, JSONModel, MessageBox) {
	"use strict";

	return BaseController.extend("com.nlpt.app.controller.Categories", {
		_year : '0000',

		onInit : function() {
			var router = this.getRouter();
			router.getRoute("categories").attachMatched(this._onRouteMatched, this);
		},

		_onRouteMatched : function(oEvent) {
			var parameter;
			var that = this;

			parameter = oEvent.getParameter("arguments");
			this._resetModels();
			this.getView().getModel("Gamers").loadData("../../nlpt_php/Gamer.php?year=" + parameter.year);
			this._year = parameter.year;
			switch (parameter.year) {
			case "2018":
				this._refreshModel("Shooter", parameter.year, 0);
				this._refreshModel("Strategy", parameter.year, 0);
				this._refreshModel("Sport", parameter.year, 0);
				this._refreshModel("Racing", parameter.year, 0);
				break;
			case "2017":
				this._refreshModel("Shooter", parameter.year, 0);
				this._refreshModel("Strategy", parameter.year, 0);
				this._refreshModel("Racing", parameter.year, 4);
				this._refreshModel("Sport", parameter.year, 0);
				this._refreshModel("Survival", parameter.year, 3);
				break;
			case "2016":
				break;
			case "2015":
				break;
			}
		},

		onMaintainShooterPress : function() {
			if (!this._shooterEditDialog) {
				this._shooterEditDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.ShooterEditDialog", this);
				this.getView().addDependent(this._shooterEditDialog);
			}
			this._shooterEditDialog.open();
		},

		onSaveShooter : function() {
			var that = this;
			var data = this.getView().getModel("Shooter1").getJSON();
			if (data) {
				$.ajax({
					type : "POST",
					url : "../../nlpt_php/postTournamentData.php?year=" + that._year,
					data : data,
					success : function(data, response) {
						MessageBox.success("Shooter table updated");
						that._shooterEditDialog.close();
						that._refreshModel("Shooter", that._year, 0);
					},
					error : function(response) {
						MessageBox.error(response.responseText);
					},
					dataType : "json"
				});
			}
		},

		onMaintainSportPress : function() {
			if (!this._sportEditDialog) {
				this._sportEditDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.SportEditDialog", this);
				this.getView().addDependent(this._sportEditDialog);
			}
			this._sportEditDialog.open();
		},

		onSaveSport : function() {
			var that = this;
			var data = this.getView().getModel("Sport1").getJSON();
			if (data) {
				$.ajax({
					type : "POST",
					url : "../../nlpt_php/postTournamentData.php?year=" + that._year,
					data : data,
					success : function(data, response) {
						MessageBox.success("Sport table updated");
						that._sportEditDialog.close();
						that._refreshModel("Sport", that._year, 0);
					},
					error : function(response) {
						MessageBox.error(response.responseText);
					},
					dataType : "json"
				});
			}
		},

		onMaintainStrategyPress : function() {
			if (!this._strategyEditDialog) {
				this._strategyEditDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.StrategyEditDialog", this);
				this.getView().addDependent(this._strategyEditDialog);
			}
			this._strategyEditDialog.open();
		},

		onSaveStrategy : function() {
			var that = this;
			var data = this.getView().getModel("Strategy1").getJSON();
			if (data) {
				$.ajax({
					type : "POST",
					url : "../../nlpt_php/postTournamentData.php?year=" + that._year,
					data : data,
					success : function(data, response) {
						MessageBox.success("Strategy table updated");
						that._strategyEditDialog.close();
						that._refreshModel("Strategy", that._year, 0);
					},
					error : function(response) {
						MessageBox.error(response.responseText);
					},
					dataType : "json"
				});
			}
		},

		onMaintainRacingPress : function() {
			if (!this._racingEditDialog) {
				this._racingEditDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.RacingEditDialog", this);
				this.getView().addDependent(this._racingEditDialog);
			}
			this._racingEditDialog.open();
		},

		onSaveRacing : function() {
			var that = this;
			var data = this.getView().getModel("Racing1").getJSON();
			if (data) {
				$.ajax({
					type : "POST",
					url : "../../nlpt_php/postTournamentData.php?year=" + that._year,
					data : data,
					success : function(data, response) {
						// MessageBox.success("Racing tables updated");
						that._racingEditDialog.close();
						that._refreshModel("Racing", that._year, 0);
					},
					error : function(response) {
						MessageBox.error(response.responseText);
					},
					dataType : "json"
				});
			}
			var data = this.getView().getModel("Racing2").getJSON();
			if (data) {
				$.ajax({
					type : "POST",
					url : "../../nlpt_php/postTournamentData.php?year=" + that._year,
					data : data,
					success : function(data, response) {
						// MessageBox.success("Racing tables updated");
						that._racingEditDialog.close();
						that._refreshModel("Racing", that._year, 0);
					},
					error : function(response) {
						MessageBox.error(response.responseText);
					},
					dataType : "json"
				});
			}
			var data = this.getView().getModel("Racing3").getJSON();
			if (data) {
				$.ajax({
					type : "POST",
					url : "../../nlpt_php/postTournamentData.php?year=" + that._year,
					data : data,
					success : function(data, response) {
						// MessageBox.success("Racing tables updated");
						that._racingEditDialog.close();
						that._refreshModel("Racing", that._year, 0);
					},
					error : function(response) {
						MessageBox.error(response.responseText);
					},
					dataType : "json"
				});
			}
			var data = this.getView().getModel("Racing4").getJSON();
			if (data) {
				$.ajax({
					type : "POST",
					url : "../../nlpt_php/postTournamentData.php?year=" + that._year,
					data : data,
					success : function(data, response) {
						MessageBox.success("Racing tables updated");
						that._racingEditDialog.close();
						that._refreshModel("Racing", that._year, 0);
					},
					error : function(response) {
						MessageBox.error(response.responseText);
					},
					dataType : "json"
				});
			}
		},

		onMaintainSurvivalPress : function() {
			if (!this._survivalEditDialog) {
				this._survivalEditDialog = sap.ui.xmlfragment("com.nlpt.app.fragments.SurvivalEditDialog", this);
				this.getView().addDependent(this._survivalEditDialog);
			}
			this._survivalEditDialog.open();
		},

		onSaveSurvival : function() {
			var that = this;
			var data = this.getView().getModel("Survival1").getJSON();
			if (data) {
				$.ajax({
					type : "POST",
					url : "../../nlpt_php/postTournamentData.php?year=" + that._year,
					data : data,
					success : function(data, response) {
						// MessageBox.success("Survival tables updated");
						that._survivalEditDialog.close();
						that._refreshModel("Survival", that._year, 0);
					},
					error : function(response) {
						MessageBox.error(response.responseText);
					},
					dataType : "json"
				});
			}
			var data = this.getView().getModel("Survival2").getJSON();
			if (data) {
				$.ajax({
					type : "POST",
					url : "../../nlpt_php/postTournamentData.php?year=" + that._year,
					data : data,
					success : function(data, response) {
						// MessageBox.success("Survival tables updated");
						that._survivalEditDialog.close();
						that._refreshModel("Survival", that._year, 0);
					},
					error : function(response) {
						MessageBox.error(response.responseText);
					},
					dataType : "json"
				});
			}
			var data = this.getView().getModel("Survival3").getJSON();
			if (data) {
				$.ajax({
					type : "POST",
					url : "../../nlpt_php/postTournamentData.php?year=" + that._year,
					data : data,
					success : function(data, response) {
						MessageBox.success("Survival tables updated");
						that._survivalEditDialog.close();
						that._refreshModel("Survival", that._year, 0);
					},
					error : function(response) {
						MessageBox.error(response.responseText);
					},
					dataType : "json"
				});
			}
		},

		_refreshModel : function(category, year, rounds) {
			if (rounds) {
				for (var i = 1; i <= rounds; i++) {
					this.getView().getModel(category + i).loadData("../../nlpt_php/" + category + ".php?round=" + i + "&year=" + year);
				}
			} else {
				this.getView().getModel(category + 1).loadData("../../nlpt_php/" + category + ".php?round=0&year=" + year);
			}
		},

		_resetModels : function() {
			for ( var model in this.getView().oPropagatedProperties.oModels) {
				if (model !== "device" && model !== "i18n" && model !== "navModel" && model !== "Gamers" && model !== "GamerPoints") {
					this.getView().getModel(model).setData([])
				}
			}
		}

	});

});