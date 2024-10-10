sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView"
], function (UIComponent, JSONModel, XMLView) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.toya.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // Initialize the base component
            UIComponent.prototype.init.apply(this, arguments);

            // Set up routing
            // this.getRouter().initialize();
        }
    });
});
