const collectionModel = require('./Model')

const collectionService = {

  create: (collection, success, fail) => {
    collectionModel.create(collection)
      .then(data => success(data))
      .catch(error => fail(error))
  },
find: (success, fail) => {
  collectionModel.find()
    .then(data => success(data))
    .catch(error => fail(error))
},
update: (id,data,success, fail) => {
  collectionModel.findByIdAndUpdate({id},{data})
    .then(data => success(data))
    .catch(error => fail(error))
},
delete: (_id,success, fail) => {
  collectionModel.findOneAndDelete({"_id" : _id})
    .then(data => success(data))
    .catch(error => fail(error))
},

}

module.exports = collectionService