/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("immlzgwhlad3qlr")

  collection.createRule = null
  collection.updateRule = "@request.auth.staff = true"
  collection.deleteRule = "@request.auth.staff = true"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("immlzgwhlad3qlr")

  collection.createRule = ""
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
