sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
    createLocalModel: function() {
      var oModel = new JSONModel();
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
    
    createAuthModel: function() {
    	var oModel = new JSONModel("../../nlpt_php/wp_getUserInfo.php");
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    },
    
    createSettingModel: function() {
    	var oModel = new JSONModel({
    		"busy": false
    	});
      oModel.setDefaultBindingMode("TwoWay");
      return oModel;
    }
	
	};

});