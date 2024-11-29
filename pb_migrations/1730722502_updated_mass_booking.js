/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("90mazdsnj6g7vvc")

  collection.viewRule = "@request.auth.id = user.id || @request.auth.priest = true"
  collection.createRule = "@request.auth.id != \"\""
  collection.updateRule = "@request.auth.id = parish.priest.id"
  collection.deleteRule = "@request.auth.id = parish.priest.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("90mazdsnj6g7vvc")

  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
