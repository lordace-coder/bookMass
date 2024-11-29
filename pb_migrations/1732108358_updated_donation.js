/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ro0rq9g4b5hqa1t")

  collection.createRule = "@request.auth.id != ''"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ro0rq9g4b5hqa1t")

  collection.createRule = ""

  return dao.saveCollection(collection)
})
