const mongoose = require('mongoose')
const { Schema } = mongoose

const collectionSchema = new Schema({
  floorPrice: String,
  total_suply: String,
  num_owners: String,
  name: String,
  data: String,
  total_volume:String,
  seven_day_sales: String,
  date: { type: Date, default: Date.now },
})

const Collection = mongoose.model('Collection', collectionSchema)

module.exports = Collection

