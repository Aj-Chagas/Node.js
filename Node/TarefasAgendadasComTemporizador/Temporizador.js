const schedule = require('node-schedule')
/*

*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

*/
//em cinco segundos
//* qualqeur
const tarefa1 = schedule.scheduleJob('*/5 * 15 * * 2', function () {
    console.log(' Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Tarefa1 Cancelado')
}, 10000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [new schedule.Range(1,5)]
rule.hour = 15
rule.second = 30

const tarefa2 = schedule.scheduleJob(rule, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})