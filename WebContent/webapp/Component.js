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
          this.setModel(models.createLocalModel(), "device");
          
          this.setModel(models.createLocalModel(), "Gamers")
          this.setModel(models.createLocalModel(), "GamerOverview")
          
          this.setModel(models.createLocalModel(), "GamerPoints");
          
          this.setModel(models.createLocalModel(), "Shooter1");
          
          this.setModel(models.createLocalModel(), "Strategy1");
          
          this.setModel(models.createLocalModel(), "Sport1");
          
          this.setModel(models.createLocalModel(), "Fighting1");
          
          this.setModel(models.createLocalModel(), "Racing1");
          this.setModel(models.createLocalModel(), "Racing2");
          this.setModel(models.createLocalModel(), "Racing3");
          this.setModel(models.createLocalModel(), "Racing4");
          
          this.setModel(models.createLocalModel(), "Survival1");
          this.setModel(models.createLocalModel(), "Survival2");
          this.setModel(models.createLocalModel(), "Survival3");
          
          this.setModel(models.createLocalModel(), "Special1");
          this.setModel(models.createLocalModel(), "Special2");
          this.setModel(models.createLocalModel(), "Special3");
          
          this.setModel(models.createAuthModel(), "authModel");
          
       // create the views based on the url/hash
  				this.getRouter().initialize(); 
        }
      });

    });