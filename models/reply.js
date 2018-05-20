var mongoose = require('mongoose')
var Schema = mongoose.Schema

var replySchema = new mongoose.Schema({
    title: {type: String, required: true},
    synopsis: {type: String, required: true},
    tags: [{type: String, required: true}],
    url: {type: String},
    creationDate: {type: Date, default: Date.now},
    user: {
        id: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    news: {type: Schema.Types.ObjectId, ref: 'News'}
})

module.exports = mongoose.model('Reply', replySchema)