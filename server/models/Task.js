const {Schema,model,Types} = require('mongoose')

const schema = new Schema({
    text:{type: String, required: true},
    category: {type: String},
    completeStatus:{type: Boolean},
    createDate:{type: Date, default: Date.now},
    owner:{type: Types.ObjectId, ref:'User'}
})

module.exports = model('Task',schema)
