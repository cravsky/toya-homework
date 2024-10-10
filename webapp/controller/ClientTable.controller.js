sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/Sorter"
], function (Controller, ODataModel, Filter, FilterOperator, Sorter) {
    "use strict";
    return Controller.extend("sap.ui.demo.toya.controller.ClientTable", {
        onInit: function () {
            var sServiceUrl = "http://localhost:3000/odata/";

            var oDataModel = new ODataModel(sServiceUrl, {
                useBatch: false
            });

            this.getView().setModel(oDataModel);
        },

        onSortCompanyName: function () {
            var oTable = this.getView().byId("idCustomersTable");
            var oBinding = oTable.getBinding("items");

            var bDescending = this._bSortDescending;
            this._bSortDescending = !this._bSortDescending;

            var oSorter = new Sorter("CompanyName", bDescending);
            oBinding.sort(oSorter);
        },
        onFilterCityColumn: function () {
            // Create a dialog for filtering by city
            if (!this._oCityFilterDialog) {
                this._oCityFilterDialog = new sap.m.Dialog({
                    title: "Filtruj wg miasta",
                    content: [
                        new sap.m.Input({
                            placeholder: "Wprowadź nazwę...",
                            liveChange: function (oEvent) {
                                this._sCityFilterValue = oEvent.getParameter("value");
                            }.bind(this)
                        })
                    ],
                    beginButton: new sap.m.Button({
                        text: "Zastosuj",
                        press: function () {
                            this._applyCityFilter();
                            this._oCityFilterDialog.close();
                        }.bind(this)
                    }),
                    endButton: new sap.m.Button({
                        text: "Anuluj",
                        press: function () {
                            this._oCityFilterDialog.close();
                        }.bind(this)
                    })
                });
            }

            this._oCityFilterDialog.open();
        },

        _applyCityFilter: function () {
            var aFilters = [];
            if (this._sCityFilterValue && this._sCityFilterValue.length > 0) {
                aFilters.push(new sap.ui.model.Filter("City", sap.ui.model.FilterOperator.Contains, this._sCityFilterValue));
            }

            var oTable = this.getView().byId("idCustomersTable");
            var oBinding = oTable.getBinding("items");
            oBinding.filter(aFilters);
        }


    });
});
