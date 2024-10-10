sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
], function (Controller, ODataModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.toya.controller.ClientTable", {
        onInit: function () {
               var sServiceUrl = "http://localhost:3000/odata/";

            var oDataModel = new ODataModel(sServiceUrl, {
                useBatch: false
            });

            this.getView().setModel(oDataModel);
        },


    });
});
