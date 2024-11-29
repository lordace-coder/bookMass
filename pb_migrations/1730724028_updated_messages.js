/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnh9nuyiwl32nsv")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "@request.auth.id != ''"
  collection.updateRule = ""
  collection.deleteRule = "@request.auth.id = sender.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nnh9nuyiwl32nsv")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
