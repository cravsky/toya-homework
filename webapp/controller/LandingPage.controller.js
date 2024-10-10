sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.toya.controller.LandingPage", {
        onNavigate: function () {
            this.getOwnerComponent().getRouter().navTo("ClientTable");
        }
    });
});
