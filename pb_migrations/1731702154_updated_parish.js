/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("immlzgwhlad3qlr")

  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("immlzgwhlad3qlr")

  collection.updateRule = "@request.auth.staff = true"

  return dao.saveCollection(collection)
})
