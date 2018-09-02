

exec = require('ssh-exec')

module.exports = (robot) ->
  robot.respond /check status for (.*)(.*)/i, (res) ->
    # parser = new HubotParser(serviceConfigPath="C:\\work\\hubot\\configs\\serviceMonitoring.json")
    console.log "***************************************************************"
    # console.log parser.parseServiceConfig("service_grp","gp1")
    console.log "***************************************************************"
    res.send "welcoeme"
    exec('hostname', {
      user: 'manjit',
      host: '192.168.43.47',
      password: 'test'
    }).pipe(process.stdout)
