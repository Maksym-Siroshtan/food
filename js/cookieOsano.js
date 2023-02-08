window.cookieconsent.initialise({
  palette: {
    popup: {
      background: "#000",
    },
    button: {
      background: "#f1d600",
    },
  },
  theme: "classic",
  position: "bottom-right",
  type: "opt-in",
  onInitialise: function (status) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == "opt-in" && didConsent) {
      console.log("Loading...");
    }
    if (type == "opt-out" && !didConsent) {
      console.log("Error!");
    }
  },
  onStatusChange: function (status, chosenBefore) {
    var type = this.options.type;
    var didConsent = this.hasConsented();
    if (type == "opt-in" && didConsent) {
      console.log("Loading...");
    }
    if (type == "opt-out" && !didConsent) {
      console.log("Error!");
    }
  },
  onRevokeChoice: function () {
    var type = this.options.type;
    if (type == "opt-in") {
      console.log("Error!");
    }
    if (type == "opt-out") {
      console.log("Loading...");
    }
  },
});