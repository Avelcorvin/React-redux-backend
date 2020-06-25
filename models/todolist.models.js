/**
 * тот код что здесь написан касаетсья только драфвера монгусе
 * который позволяет общаться с базой данных монго DM
 * если захочу разобраться по подробнее определенно придеться покопаться в документации mongoDB
 */

const {Schema,model,Types} = require('mongoose')
const schema = new Schema({
    text:{type:String,unique:false,required:true},
    day:{type:String,unique:false,required:true},
    time:{type:String,unique:false,required:true},
    name:{type:String}
})

module.exports = model('todos',schema);