/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xkj4mpc1ercyk4")

  collection.viewRule = "community.members:each ~ @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0xkj4mpc1ercyk4")

  collection.viewRule = ""

  return dao.saveCollection(collection)
})
