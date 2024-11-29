/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7a9zh9fc7zg7ajf")

  collection.listRule = "user.followers:each ~ @request.auth.id"
  collection.viewRule = "user.followers:each ~ @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7a9zh9fc7zg7ajf")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
