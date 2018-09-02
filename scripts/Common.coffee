
exports.Common = class Common
  @monitoringConfig = require("../configs/urlMonitoring.json")
  @checkKeyInMonitoringConfig = (inputKey)->
    console.log(@monitoringConfig)
