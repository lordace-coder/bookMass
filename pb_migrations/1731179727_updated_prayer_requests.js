/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7a9zh9fc7zg7ajf")

  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("7a9zh9fc7zg7ajf")

  collection.createRule = null
  collection.updateRule = null

  return dao.saveCollection(collection)
})
