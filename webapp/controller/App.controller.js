sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.toya.controller.LandingPage", {
        onNavigate: function () {
            // Navigate to the second view (ClientTable)
            this.getOwnerComponent().getRouter().navTo("ClientTable");
        }
    });
});
