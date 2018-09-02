var data = require("./configs/urlMonitoring.json");
function checkKeyInMonitoringConfig(type, key) {
  if(data.hasOwnProperty(type)) {
    if(Array.isArray(data[type])){
      var foundIndexForKey = data[type].findIndex((item,index)=>{
        return Object.keys(item)[0] === key;
      })
      if(foundIndexForKey!==-1) {
        return {
          status: true,
          result: data[type][foundIndexForKey]
        }
      }else {
        return {
          status: false,
          result: null
        }
      }
    }else if(typeof data[type] === "object"){
      var foundIndexForKey = Object.keys(data[type]).indexOf(key)
       if(foundIndexForKey!==-1){
        return {
          status: true,
          result: data[type][key]
        }
       }else {
        return {
          status: false,
          result: null
        }
       }
    }else if(data[type] === "individuals") {
       if(data[type].hasOwnProperty(key)) {
        return {
          status: true,
          result: data[type][key]
        }
       }else {
        return {
          status: false,
          result: null
        }
       }
    }
  }
}

var result = checkKeyInMonitoringConfig("groups","web");
console.log(result)
