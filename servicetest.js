var serviceConfig = require('./configs/serviceMonitoring.json');
// key is the search item, value is one in the key list
function parseServiceConfig(key,value) {
  var result = new Array();
  for(serviceKey in serviceConfig) {
    if(serviceConfig[serviceKey] && serviceConfig[serviceKey][key] && serviceConfig[serviceKey][key].constructor === Array) {
      var isAvailable = serviceConfig[serviceKey][key].findIndex(item=>{
        return item === value;
      })
      if(isAvailable > -1) {
        result.push(serviceConfig[serviceKey])
      }
    }
    else {
      new Error("data type not correct for service group "+serviceConfig[serviceKey][key]);
      process.exit(1);
    }
  }
  return result;
}

console.log("****************************************")
console.log(parseServiceConfig("service_grp","nginx"))
console.log("****************************************")
