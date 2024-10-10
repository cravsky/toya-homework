sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
], function (Controller, ODataModel, Filter, FilterOperator) {
    "use strict";
    return Controller.extend("sap.ui.demo.toya.controller.ClientTable", {
        onInit: function () {
            var sServiceUrl = "http://localhost:3000/odata/";

            var oDataModel = new ODataModel(sServiceUrl, {
                useBatch: false
            });

            this.getView().setModel(oDataModel);
        },

        onFilterCity: function (oEvent) {
            var sQuery = oEvent.getParameter("newValue");

            var aFilters = [];
            if (sQuery && sQuery.length > 0) {
                aFilters.push(new Filter("City", FilterOperator.Contains, sQuery));
            }
            var oTable = this.getView().byId("idCustomersTable");
            var oBinding = oTable.getBinding("items");
            oBinding.filter(aFilters); // in case that filter is empty display all records
        }

    });
});
