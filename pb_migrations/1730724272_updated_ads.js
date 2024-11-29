/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("69pa3fww4ybrvtv")

  collection.createRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("69pa3fww4ybrvtv")

  collection.createRule = ""

  return dao.saveCollection(collection)
})
