/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("immlzgwhlad3qlr")

  collection.createRule = "priest.priest = true "

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("immlzgwhlad3qlr")

  collection.createRule = "priest.priest = true"

  return dao.saveCollection(collection)
})
