sap.ui.define([ "sap/ui/core/UIComponent", "sap/ui/Device",
    "com/nlpt/app/model/models" ],
    function(UIComponent, Device, models) {
      "use strict";

      return UIComponent.extend("com.nlpt.app.Component", {

        metadata : {
          manifest : "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup
         * of the app and calls the init method once.
         * 
         * @public
         * @override
         */
        init : function() {
          // call the base component's init function
          UIComponent.prototype.init.apply(this, arguments);

          // set the device model
          this.setModel(models.createDeviceModel(), "device");
          
          this.setModel(models.createGamerModel(), "Gamers")
          
          this.setModel(models.createGamerPointsModel(), "GamerPoints");
          
          this.setModel(models.createShooterModel(), "Shooter");
          
          this.setModel(models.createStrategyModel(), "Strategy");
          
          this.setModel(models.createSportModel(), "Sport");
          
          this.setModel(models.createRacing1Model(), "Racing1");
          this.setModel(models.createRacing2Model(), "Racing2");
          this.setModel(models.createRacing3Model(), "Racing3");
          this.setModel(models.createRacing4Model(), "Racing4");
          
          this.setModel(models.createSurvival1Model(), "Survival1");
          this.setModel(models.createSurvival2Model(), "Survival2");
          this.setModel(models.createSurvival3Model(), "Survival3");
          
       // create the views based on the url/hash
  				this.getRouter().initialize(); 
        }
      });

    });