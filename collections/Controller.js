const express = require('express');
const collectionService = require('./Service');
const collectionRouter = express.Router();
collectionRouter.route('/create-collection').post(createCollection);
collectionRouter.route('/get').get(findCollection);
collectionRouter.route('/update').put(updateCollection);
collectionRouter.route('/delete').delete(deleteCollection);
function createCollection(request, response) {
  const value = request.body;
  collectionService.create(
    value,
    data => response.status(201).json(data),
    error => response.status(400).json(error),
  );
 
}
function findCollection(request, response) {
  const value = request.body;
  collectionService.find(
    data => response.status(200).json(data),
    error => response.status(400).json(error),
  );
 
}
function updateCollection(request, response) {
  const value = request.body;
  collectionService.update(
    value.id,
    request.body,
    data => response.status(200).json(data),
    error => response.status(400).json(error),
  );
 
}
function deleteCollection(request, response) {
  const value = request.body;
  collectionService.delete(
    value._id,
    data => response.status(200).json(data),
    error => response.status(400).json(error),
  );
 
}

module.exports = collectionRouter;