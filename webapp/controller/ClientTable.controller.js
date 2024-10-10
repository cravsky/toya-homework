sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.toya.controller.ClientTable", {
        onInit: function () {
            console.log("ClientTable controller initialized");
        },

     
    });
});
